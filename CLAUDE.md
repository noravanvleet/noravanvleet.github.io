# CLAUDE.md

## Branching: trunk-based development

- `main` is the trunk and is always deployable (GitHub Pages serves it).
- Commit small, complete changes directly to `main`, or use a short-lived branch that merges back within a day.
- Do not create long-lived feature, develop, or release branches.
- Pull/rebase on `main` before pushing; keep history linear (no merge commits).

## Commits: Conventional Commits

Format:

```
<type>[optional scope]: <description>

<footer>
```

- **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **Description:** imperative mood, lowercase, no trailing period, 72 characters or fewer.
- **No body.** Never write the optional body. Put any extra information in the footer as attributes instead.
- **Footer:** one `Token: value` git trailer per line, separated from the subject by a blank line. Use `-` instead of spaces in tokens (except `BREAKING CHANGE`). Examples:
  - `Refs: #12`
  - `Closes: #34`
  - `Reason: <short why>`
  - `BREAKING CHANGE: <what breaks>` (also mark with `!` after the type/scope)
  - `Co-Authored-By: Name <email>`

Example:

```
feat(home): add services section

Reason: clients need to see packaged offers up front
Refs: #3
Co-Authored-By: Claude <noreply@anthropic.com>
```

## Colors: Bold Magenta palette

The site is light-only: no dark mode, no `prefers-color-scheme` styles. Use only these colors. Do not add new colors, tints, or one-off hex values; if a new color seems needed, ask first.

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F7F0F4` | Cards, nav, panels |
| `--color-text` | `#1A1A1F` | Body text, headings |
| `--color-muted` | `#5C5A63` | Secondary text, captions, attributions |
| `--color-primary` | `#C8186C` | Brand magenta: buttons, active nav, highlights |
| `--color-secondary` | `#1E3A5F` | Navy: links, secondary accents |
| `--color-on-primary` | `#FFFFFF` | Text on primary-colored backgrounds |

- In CSS, reference the custom properties (e.g. `var(--color-primary)`), never raw hex values. The hex values live only in the `:root` block in `styles.css`.
- Every pairing above meets WCAG AA (4.5:1). Keep text on `--color-bg` or `--color-surface`, and only `--color-on-primary` on `--color-primary`.
