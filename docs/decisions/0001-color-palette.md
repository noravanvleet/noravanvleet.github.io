# 1. Color palette: Bold Magenta, light only

Date: 2026-10-09

Status: Accepted

## Context

The site needs a consistent set of colors before the navigation bar and rotating panel are built. Nora wants pink as the primary color. The site's audience is potential consulting clients, such as CTOs and founders, so it should feel personal but professional. All text must be readable, meeting WCAG AA contrast (4.5:1 for body text).

## Options considered

| Option | Feel | Pink |
|---|---|---|
| A · Soft Blush | Warm, friendly | `#C2185B` raspberry |
| B · Bold Magenta | Crisp, confident | `#C8186C` magenta |
| C · Dusty Rose | Calm, editorial | `#A8476A` rose |
| D · Neon Night (dark) | Dark, techy | `#FF5FA2` hot pink |

## Decision

Use **Bold Magenta**:

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F7F0F4` | Cards, nav, panels |
| `--color-text` | `#1A1A1F` | Body text, headings |
| `--color-muted` | `#5C5A63` | Secondary text, captions, attributions |
| `--color-primary` | `#C8186C` | Brand magenta: buttons, active nav, highlights |
| `--color-secondary` | `#1E3A5F` | Navy: links, secondary accents |
| `--color-on-primary` | `#FFFFFF` | Text on primary-colored backgrounds |

The site is **light only**, with no dark mode.

## Reasons

- Magenta is the one clear signature color, and the white and navy around it keep the site professional for a client audience.
- Every text pairing passes WCAG AA:

  | Pairing | Contrast |
  |---|---|
  | Text on background / surface | 17.33 / 15.46 |
  | Muted on background / surface | 6.78 / 6.04 |
  | Magenta on background / surface | 5.52 / 4.92 |
  | Navy on background / surface | 11.50 / 10.26 |
  | White on magenta | 5.52 |

- Light only keeps the site simpler to build and maintain, with one set of colors to design and test.

## Consequences

- All CSS uses the custom properties above, defined once in `:root` in `styles.css`. Raw hex values are not used anywhere else.
- New colors need an explicit decision first (see `CLAUDE.md`).
- Adding dark mode later would need a new decision record and a second set of values.
