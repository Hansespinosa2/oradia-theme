# Change Log

All notable changes to the **Oradia** theme are documented here. Format based on
[Keep a Changelog](http://keepachangelog.com/).

## [1.0.0] - 2026-08-01

The first stable release. **Oradia** is now the calm, green-forward "Slate-Graphite"
theme; the original theme is preserved as **Oradia Classic**.

### Guiding principle
Visual weight tracks importance. Warmth and saturation are spent only where they signal
something — errors, dirty state, focus — so everything else can stay quiet.

### Added
- **Two themes:** `Oradia` (new primary) and `Oradia Classic` (the original).
- **Signal-separated palette** — names/types/keys pop; plain variables and strings recede
  toward a neutral gray-green so importance reads at a glance. Neutral `#1b1b1b` base.
- **Bold literals** — `true`/`false`/`nil` (Ruby), `True`/`False`/`None` (Python), and
  booleans in JS/TS/Go render bold.
- **On-palette bracket ladder** — nested `()[]{}` brighten gently with depth in a single
  blue-violet hue (never a rainbow); stray/unexpected brackets stay quiet instead of red.
- **ERB template popout** — a subtle raised box behind the inner expression of single-line
  `<%= %>` / `<% %>` regions (and `${ }` / `{{ }}` interpolations) via a bundled editor
  decoration. Toggle with `oradia.regionHighlight.enable`.
- **ERB comparison fix** — `configurationDefaults` stop `<`/`>` comparison operators in
  embedded Ruby from being mis-flagged as broken brackets.
- **Full terminal palette** — a cohesive 16-color ANSI set plus **command decorations**
  (green success / red failure dots) tuned for Copilot CLI and diff output.
- **Unified UI vocabulary** — red = error, amber = warn, cyan = info, green = OK/active,
  applied consistently across squiggles, status bar, notifications, badges, and input
  validation.
- **Focus ladder** — active tab green underline, unsaved-file teal marker, green focus
  rings, badges, and progress; buttons weight the primary action only.
- **Rendered-markdown fixes** — inline code and code blocks stay on-palette (no orange).
- A `demo/` scene (workspace, guided `TOUR.md`, dense sample files, terminal-tour script)
  for exercising every feature in one place.

### Changed
- Promoted the refined Slate-Graphite palette to be the primary `Oradia` theme.
- Renamed the original theme file to `Oradia-Classic-color-theme.json`.
