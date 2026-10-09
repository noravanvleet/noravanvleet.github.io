# Backlog

Goal: give the site a visual identity, a left-hand navigation bar, and a rotating panel on the homepage.

Work items are done in order, each as one small commit to `main` (see `CLAUDE.md`). Item 1 comes first because the other two use its colors.

## 1. Decide the color palette

- [x] Pick a palette (Bold Magenta): background, surface, text, muted text, primary accent, and secondary accent.
- [x] Check that text/background pairs meet WCAG AA contrast (4.5:1 for body text).
- [x] Decide whether the site supports dark mode: no, light only.
- [ ] Record the decision and the reasons in `docs/decisions/0001-color-palette.md`.
- [ ] Add the colors as CSS custom properties on `:root` in `styles.css`, link it from `index.html`, and apply the background and text colors.

**Done when:** the decision record is on `main` and the live page uses the palette's background and text colors.

Commits: `docs: record color palette decision`, then `feat: add color palette styles`

## 2. Add a left-hand navigation bar

- [ ] Add a `<nav>` fixed to the left side of the screen with the site name at the top and links: Home, Services, Work, About, Contact.
- [ ] Links jump to matching sections on the page (placeholder sections are fine for now).
- [ ] Highlight the link for the current section.
- [ ] On narrow screens (under 768px), collapse the nav into a menu button so it doesn't cover the content.
- [ ] Keyboard accessible: links reachable with Tab, visible focus styles.
- [ ] Uses only the palette's CSS custom properties for color.

**Done when:** the live site shows the left nav on desktop, a working menu button on a phone, and every link reaches its section.

Commit: `feat(nav): add left-hand navigation bar`

## 3. Add a rotating panel

- [ ] Collect the quotes and pictures from Nora when this item starts (each quote's attribution and each picture's alt text too).
- [ ] Add the pictures to `images/`, sized and compressed for the web.
- [ ] Add a panel on the homepage that rotates through slides, each showing a quote with its attribution and a picture.
- [ ] Rotates automatically every 6 seconds and pauses on hover or keyboard focus.
- [ ] Previous/next buttons and slide indicator dots let visitors move manually.
- [ ] Does not auto-rotate when the visitor has `prefers-reduced-motion` set.
- [ ] Accessible: buttons have labels, slide changes are announced to screen readers, works with the keyboard.
- [ ] Plain HTML, CSS, and JavaScript; no libraries.
- [ ] Uses only the palette's CSS custom properties for color.

**Done when:** the live homepage shows the panel rotating, it can be controlled by mouse and keyboard, and it stays still with reduced motion turned on.

Commit: `feat(home): add rotating panel`
