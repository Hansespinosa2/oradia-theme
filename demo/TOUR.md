# Oradia Slate-Mono+ — Demo tour

This folder is a **single scene** for exercising every theme feature without hunting.
This file itself is the **markdown legibility demo** — prose should read near-white and
calm, headings should carry weight, and `inline code` / code blocks should stay on-palette
(no orange).

> Open the workspace: **File → Open Workspace from File… → `demo/demo.code-workspace`**.
> It sets the theme, shell integration, and bracket colorization for you. Then reload if
> prompted. Open the files below as tabs and walk the checklist.

---

## 1 · Editor tokens & legibility
Open **`app.ts`**, **`model.rb`**, **`service.py`**, **`report.sql`**, **`config.json`**.

- [ ] **Signal separation** — names/types/keys pop; plain variables & strings sit back (grayer).
- [ ] **Bold literals** — `true` / `false` / `nil` / `None` render **bold** (ts, rb, py).
- [ ] **Bracket ladder** — nested `()[]{}` brighten *gently* with depth (never rainbow).
- [ ] **Punctuation** sits at the cool blue-violet edge, on-palette.

## 2 · ERB popout + the comparison-bracket fix
Open **`view.html.erb`**.

- [ ] `<%= … %>` and `<% … %>` get a subtle raised box behind the inner expression.
- [ ] The comparison operators `> 5` and `<= 5` are **not** flagged red (the old bug).

## 3 · Tabs & the focus ladder
- [ ] Active tab shows a **green** top-border + brighter title; inactive tabs recede.
- [ ] Edit any line, don't save → the tab shows a **teal** unsaved dot.
- [ ] Split the editor (drag a tab right) → the focused pane gets the green focus ring.

## 4 · Unified error / warning / info
Open **`broken_on_purpose.ts`** (has intentional errors).

- [ ] Squiggles + the Problems panel + status-bar counts all use **red = error, amber =
      warn, cyan = info** — one vocabulary.
- [ ] The status bar error/warning items use the same red/amber.

## 5 · Terminal (Copilot CLI aesthetic)
Open a terminal (**Ctrl+`**) and run: `./terminal-tour.ps1`

- [ ] Each command gets a gutter dot: **green = success, red = failure**, and a matching
      mark on the scrollbar.
- [ ] The ANSI palette prints on-brand (green/red/amber/blue/magenta/cyan).
- [ ] A colored `git diff` shows additions green, removals red — legible for CLI work.

## 6 · Chrome odds & ends
- [ ] Command Palette / Quick Input → focus ring is green.
- [ ] Activity-bar badges + progress bar are green.
- [ ] Buttons (e.g. the SCM **Commit** button) put weight on the primary action only.

---

### Sample inline elements (markdown check)
Regular prose stays near-white. Here is `inline code`, a [link](https://example.com), and:

```ruby
# a fenced code block — should be on-palette, not orange
def greet(name) = "hi #{name}"   # true, false, nil below should be bold
flags = { active: true, archived: false, note: nil }
```

**Bold text** and *italic text* for weight contrast. Done.
