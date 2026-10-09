# Backlog

Goal: publish a simple "Hello, world" page at https://noravanvleet.github.io.

Work items are done in order, each as one small commit to `main` (see `CLAUDE.md`).

## 1. Commit project conventions

- [x] Commit `CLAUDE.md` and `BACKLOG.md` to `main` and push.

**Done when:** both files are visible on GitHub on `main`.

Commit: `docs: add claude md and backlog`

## 2. Add hello world page

- [ ] Create `index.html` at the repo root: valid HTML5 doctype, `lang="en"`, UTF-8 charset, viewport meta, a `<title>`, and an `<h1>Hello, world</h1>`.
- [ ] Open it locally in a browser and confirm it renders.

**Done when:** `index.html` is on `main` and renders "Hello, world" locally.

Commit: `feat: add hello world page`

## 3. Enable GitHub Pages (manual, in GitHub)

- [ ] In the repo, go to **Settings → Pages**.
- [ ] Set **Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.

**Done when:** the Pages settings show "Your site is live at https://noravanvleet.github.io".

No commit.

## 4. Verify the live site

- [ ] Visit https://noravanvleet.github.io (allow a minute or two after pushing).
- [ ] Confirm the page shows "Hello, world" and the browser tab shows the title.
- [ ] Confirm it loads over HTTPS.

**Done when:** the live URL shows the hello world page over HTTPS.

No commit.
