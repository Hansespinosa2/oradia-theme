// Oradia region decorators.
//
// Draws subtle rounded background boxes behind "dynamic" regions so they pop out
// of surrounding markup (the same idea as Volar's Vue interpolation boxes, but
// for other languages). This is a purely additive editor decoration: it does not
// touch tokenization, IntelliSense, or any language server — it just overlays a
// background, so it coexists with every other extension.
//
// Covered:
//   ERB (.erb)                <%= output %>  -> "output" tint
//                             <%  logic  %>  -> "logic" tint
//   JS/TS/JSX/TSX             `${ interpolation }`
//   HTML / Handlebars         {{ mustache }}
// Vue (.vue) is intentionally skipped so we never double-box what Volar draws.

const vscode = require('vscode');

const OUTPUT = vscode.window.createTextEditorDecorationType({
  backgroundColor: new vscode.ThemeColor('oradia.templateOutputBackground'),
  borderColor: new vscode.ThemeColor('oradia.templateOutputBorder'),
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
});
const LOGIC = vscode.window.createTextEditorDecorationType({
  backgroundColor: new vscode.ThemeColor('oradia.templateLogicBackground'),
  borderColor: new vscode.ThemeColor('oradia.templateLogicBorder'),
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
});
const INTERP = vscode.window.createTextEditorDecorationType({
  backgroundColor: new vscode.ThemeColor('oradia.interpolationBackground'),
  borderColor: new vscode.ThemeColor('oradia.interpolationBorder'),
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
});

const TEMPLATE_LANGS = new Set(['javascript', 'typescript']);
const MUSTACHE_LANGS = new Set(['html', 'handlebars']);

// Returns { output, logic, interp } arrays of vscode.Range for a document.
// Only the INNER expression is boxed (delimiters excluded), whitespace-trimmed,
// and only when it sits on a single line (multi-line regions look messy).
function computeRanges(doc) {
  const text = doc.getText();
  const out = { output: [], logic: [], interp: [] };
  const lang = doc.languageId;

  // Each spec: regex whose full match includes delimiters, plus the delimiter
  // lengths so we can carve out just the inner expression.
  const specs = [];
  if (lang === 'erb') {
    specs.push({ re: /<%=([\s\S]*?)%>/g, pre: 3, suf: 2, bucket: 'output' });
    specs.push({ re: /<%(?![%=#])([\s\S]*?)%>/g, pre: 2, suf: 2, bucket: 'logic' });
  }
  if (TEMPLATE_LANGS.has(lang)) {
    specs.push({ re: /\$\{([^{}]*)\}/g, pre: 2, suf: 1, bucket: 'interp' });
  }
  if (MUSTACHE_LANGS.has(lang)) {
    specs.push({ re: /\{\{([^{}]*)\}\}/g, pre: 2, suf: 2, bucket: 'interp' });
  }

  const isWS = (ch) => ch === ' ' || ch === '\t' || ch === '\r' || ch === '\n';

  for (const spec of specs) {
    for (const m of text.matchAll(spec.re)) {
      let s = m.index + spec.pre;
      let e = m.index + m[0].length - spec.suf;
      while (s < e && isWS(text[s])) s++;
      while (e > s && isWS(text[e - 1])) e--;
      if (s >= e) continue; // empty expression
      const start = doc.positionAt(s);
      const end = doc.positionAt(e);
      if (start.line !== end.line) continue; // single-line only
      out[spec.bucket].push(new vscode.Range(start, end));
    }
  }

  return out;
}

function clear(editor) {
  editor.setDecorations(OUTPUT, []);
  editor.setDecorations(LOGIC, []);
  editor.setDecorations(INTERP, []);
}

function update(editor) {
  if (!editor || !editor.document) return;
  const enabled = vscode.workspace.getConfiguration('oradia').get('regionHighlight.enable', true);
  if (!enabled) return clear(editor);
  const r = computeRanges(editor.document);
  editor.setDecorations(OUTPUT, r.output);
  editor.setDecorations(LOGIC, r.logic);
  editor.setDecorations(INTERP, r.interp);
}

function updateAllVisible() {
  for (const editor of vscode.window.visibleTextEditors) update(editor);
}

function activate(context) {
  context.subscriptions.push(OUTPUT, LOGIC, INTERP);

  let timer;
  const debouncedUpdate = (editor) => {
    clearTimeout(timer);
    timer = setTimeout(() => update(editor), 120);
  };

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((e) => update(e)),
    vscode.window.onDidChangeVisibleTextEditors(() => updateAllVisible()),
    vscode.workspace.onDidChangeTextDocument((e) => {
      const editor = vscode.window.activeTextEditor;
      if (editor && e.document === editor.document) debouncedUpdate(editor);
    }),
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('oradia.regionHighlight')) updateAllVisible();
    }),
  );

  updateAllVisible();
}

function deactivate() {}

module.exports = { activate, deactivate };
