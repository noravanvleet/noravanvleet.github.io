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
