# Skills — Knowledge Base Agent

> Agent role: local-first VuePress 2 documentation portfolio maintainer. Runs on `D:\KnowledgeBase`, Node `v24.18.0` + npm `11.16.0`, VS Code, Windows PowerShell 5.1.

## Core Skills

### 1. VuePress 2 Scaffolding
- Init: `npm init -y`, `npm install -D vuepress@next @vuepress/theme-default@next @vuepress/bundler-vite@next`, `npm install vue`, `npm install -D sass-embedded` (required by `@vuepress/theme-default` SCSS via Vite `vite:css`).
- Config: `docs/.vuepress/config.js` with `defineUserConfig` + `viteBundler()` + `defaultTheme()` — `lang`, `title`, `description`, `base: '/'` (local), `navbar`/`sidebar` with `text`/`link`/`children`/`collapsible` (v2 syntax).
- Scripts: `package.json` `docs:dev` (`vuepress dev docs` → `http://localhost:8080` with HMR) and `docs:build` (`vuepress build docs`).
- Structure: `docs/README.md` = `/`, `docs/<section>/README.md` = `/<section>/`, `docs/.vuepress/public/` = static assets (`/image.png`), `.gitignore` covers `node_modules`, `docs/.vuepress/.temp`/`.cache`/`dist`.

### 2. Markdown-First Authoring & Management
- Every `docs/**/*.md` is a page. Frontmatter is an optional header block for `title` etc. (example left as commented block in `docs/knowledge/overview/overview.md`).
- Blank template: `# Title` + `Replace this with your content.` — duplicate to add pages.
- How to add: copy `docs/knowledge/overview/overview.md` → `docs/knowledge/<subfolder>/new-topic.md`, then add one `{ text: 'New Topic', link: '/knowledge/<subfolder>/new-topic' }` to `sidebar` in `config.js`.
- How to rename: rename file + update its `text`/`link` entry.
- Live preview: `npm run docs:dev` HMR updates `.md` instantly; `config.js` changes require restart (`Ctrl+C` then `docs:dev` again).

### 3. Navigation & Routing
- `navbar` entries map 1:1 to folder routes. Each `link: '/<section>/'` requires `docs/<section>/README.md` or the click 404s.
- `sidebar` is per-route (`'/knowledge/'`, `'/ai-projects/'`, etc.). Children links must match real file paths (without `.md`).
- Diagnosis pattern used: mapped `navbar` → filesystem via `glob` of `docs/knowledge/**` and `Get-ChildItem` to catch missing indexes and duplicate targets.

### 4. Troubleshooting (404-class)
- Symptom: clicking `Knowledge Base (Documentation)` (`config.js:9`) gave 404 because `docs/knowledge/README.md` was missing while children (`/knowledge/overview/overview` etc.) existed.
- Fix: create folder index `README.md` or retarget navbar `link` to an existing child.
- Duplicate-link trap: `AI Projects`/`Video Editing` both pointed to `/knowledge/` (`config.js:10,12`) — fixed to `/ai-projects/` and `/video-editing/`.
- Empty-section trap: `AI Projects` had 3 child pages (`docs/ai-projects/knowledge-base-agent.md` etc.) but no `README.md` → navbar `/ai-projects/` 404; empty sections `copywriting`/`video-editing`/`seo-guides`/`news-articles` were 0 entries with stale sidebar `'/notes/topic-a'` → both navbar and sidebar 404. Fixed by adding 5 landing `README.md`s + 8 `section-1.md`/`section-2.md` section-style placeholders and cleaning sidebars `config.js:29-78` to `link: '/<section>/'` + `'/<section>/section-1'`.
- Git noise: `@vuepress/plugin-git` `Failed to get commits — fatal: your current branch 'master' does not have any commits yet` is expected until first commit; `/ is missing sidebar config.` is expected for home.

### 5. Verification & Build
- `npm run docs:build` must end with `success VuePress build completed`. Treat `vite:css` `sass-embedded not found` as hard fail → install `sass-embedded`. With Mermaid, expect Vite `chunk >500kB` warning (large Mermaid bundle) — normal.
- Manual check: `docs:dev` → click every navbar + sidebar item; check `AI Projects > Sports Fantasy Lineup Agent > Flowchart` renders as SVG not code block.

### 6. Git & Portfolio Workflow
- Branching: never push `master`/`main` directly; use `git checkout -b feat/...`, `git add .`, `git commit -m "feat: ..."`, `git push -u origin feat/...` → PR.
- Sharing: source-only push is enough for local portfolio; GitHub Pages (live site) is a later additive step (change `base` + deploy action).

### 7. Mermaid Diagrams (official chart plugin)
- Enable: `npm install -D @vuepress/plugin-markdown-chart mermaid --legacy-peer-deps`, `config.js:4` `markdownChartPlugin({ mermaid: true })` in `plugins`, `docs/.vuepress/client.js:1` `defineMermaidConfig({ theme: 'default' })` for dark sync. Keep fences as ` ```mermaid` (`flowchart TD`, `sequenceDiagram`, etc.) — no `mermaidjs` token needed.
- Verify: build green + `fantasy-agent.md:25` flowchart shows live workflow; Vite chunk warning expected.

### 8. Doc Conversion Awareness
- For future portfolio ports, binary docs (PDF/DOCX/PPTX) go through Docling MCP `convert_document_into_docling_document` → Markdown, not direct `read` of binaries. `D:\opencode-caches` keeps C: clean.

## How to Apply
- New KB app? Start from `config.js` pattern, create section folders first, add `README.md` per section, then children.
- Reviewing a PR? Check navbar/sidebar links resolve, `docs:build` green, `.gitignore` present, no `node_modules` committed.
