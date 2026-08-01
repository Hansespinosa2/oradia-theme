# Oradia

A calm, muted, **green-forward dark theme** built on one principle:

> **Visual weight tracks importance.** Warmth and saturation are spent only where they
> signal something — errors, dirty state, focus — so everything else can stay quiet.

Oradia is designed for long, focused sessions across many languages, and is tuned for a
Copilot-CLI-in-the-terminal workflow.

## Themes

- **Oradia** — the primary "Slate-Graphite" palette. Neutral `#1b1b1b` base; names, types,
  and keys carry the signal while plain variables and strings recede.
- **Oradia Classic** — the original Oradia, preserved unchanged.

Select via **Preferences: Color Theme** (`Ctrl+K Ctrl+T`) → **Oradia**.

## What makes it purposeful

- **Signal separation** — the important tier (names/types/keys/headings) pops; the "boring"
  tier (variables, strings) sits back in a neutral gray-green.
- **Bold literals** — `true`/`false`/`nil`, `True`/`False`/`None`, and booleans in JS/TS/Go
  render bold, because a literal truth value is worth noticing.
- **On-palette brackets** — nested `()[]{}` brighten *gently* with depth in a single
  blue-violet hue (a subtle nesting hint, never a rainbow). Stray brackets stay quiet.
- **ERB popout** — a subtle raised box sits behind the inner expression of single-line
  `<%= %>` / `<% %>` regions (and `${ }` / `{{ }}` interpolations), so dynamic bits lift out
  of surrounding markup. Toggle with `oradia.regionHighlight.enable`.
- **Terminal + Copilot CLI** — a full 16-color ANSI palette plus **command decorations**
  (green success / red failure dots), with additions/removals legible in diffs.
- **One UI vocabulary** — red = error, amber = warn, cyan = info, green = OK/active, applied
  consistently across squiggles, the status bar, notifications, badges, and inputs.
- **Focus ladder** — the active tab, focused pane, badges, and focus rings all use the one
  green accent so "where am I" reads at a glance; unsaved files get a distinct teal marker.

## Settings

| Setting | Default | Description |
| --- | --- | --- |
| `oradia.regionHighlight.enable` | `true` | Draw the subtle raised popout behind single-line ERB / `${ }` / `{{ }}` regions. Purely visual; Vue files are left to the Vue extension. |

## Try the demo scene

The `demo/` folder is a single scene that exercises every feature without hunting:

1. **File → Open Workspace from File…** → `demo/demo.code-workspace` (it sets the theme and
   the relevant editor/terminal settings).
2. Walk the checklist in `demo/TOUR.md` (also a markdown legibility demo).
3. In a terminal, run `./terminal-tour.ps1` to see command decorations, the ANSI palette,
   and a colored `git diff`.

## Feedback

Issues and ideas: <https://github.com/Hansespinosa2/oradia-theme>

**Enjoy the quiet.**

