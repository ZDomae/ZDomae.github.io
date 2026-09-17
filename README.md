# My Knowledge Base (VuePress 2)

Blank local-first docs site. Write in Markdown under `docs/`, preview locally, push source to GitHub.

## Run locally

```powershell
npm install
npm run docs:dev
```

Open http://localhost:8080

## Build check

```powershell
npm run docs:build
```

## Add / rename pages

1. Duplicate e.g. `docs/notes/topic-a.md` → `docs/notes/topic-c.md`
2. Change its `# Title`
3. Add one line in `docs/.vuepress/config.js` sidebar:
   `{ text: 'Topic C', link: '/notes/topic-c' }`
4. Rename = rename file + update its `text` / `link`.

Images go in `docs/.vuepress/public/` and are referenced as `/image.png`.

## Upload to GitHub

```powershell
git checkout -b feat/vuepress-init
git add .
git commit -m "feat: blank VuePress knowledge base"
git push -u origin feat/vuepress-init
```

Then open a PR to `master`/`main`. No Pages hosting configured (local only for now).
