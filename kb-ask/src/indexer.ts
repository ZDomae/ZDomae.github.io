// Usage: npm run index -- <docsDir> [outFile]
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { type Chunk, embed } from './shared.js'

const DOCS_DIR = path.resolve(process.argv[2] ?? 'docs')
const OUT = path.resolve(process.argv[3] ?? 'index.json')
const MAX_CHARS = 5000

// Sections the site no longer builds. Keep in sync with `pagePatterns` in
// docs-new/.vuepress/config.js, otherwise the index keeps chunks whose pages
// 404 and the widget offers dead source links.
const SKIP = (process.env.SKIP_DIRS ?? 'copywriting')
  .split(',')
  .map((s) => s.trim().replace(/^!|\/\*\*$/g, '').replace(/\/$/, ''))
  .filter(Boolean)

// Must match VuePress exactly: anchors are copied verbatim from @mdit-vue/shared,
// which is what the theme uses to generate heading ids. A near-miss here silently
// produces links to the top of the page instead of the section.
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g
const slugify = (s: string) =>
  s
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()

async function* walk(dir: string, prefix = ''): AsyncGenerator<string> {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue // skips .vuepress
    const rel = prefix ? `${prefix}/${e.name}` : e.name
    if (e.isDirectory()) {
      if (SKIP.some((s) => rel === s || rel.startsWith(`${s}/`))) continue
      yield* walk(path.join(dir, e.name), rel)
    } else if (e.name.endsWith('.md')) yield path.join(dir, e.name)
  }
}

function pagePathOf(file: string): string {
  const rel = path.relative(DOCS_DIR, file).split(path.sep).join('/').replace(/\.md$/, '')
  const isIndex = /(^|\/)(README|index)$/i.test(rel)
  return '/' + (isIndex ? rel.replace(/(README|index)$/i, '') : rel + '.html')
}

function split(body: string) {
  const out: { headingId: string; headingPath: string[]; text: string }[] = []
  const trail: string[] = []
  let id = '', lines: string[] = [], fence = false
  const flush = () => {
    const text = lines.join('\n').trim()
    if (text) out.push({ headingId: id, headingPath: [...trail], text })
    lines = []
  }
  for (const line of body.split('\n')) {
    if (/^(```|~~~)/.test(line)) fence = !fence
    const m = !fence && /^(#{1,3})\s+(.+?)\s*#*$/.exec(line)
    if (m) {
      flush()
      trail.length = m[1].length - 1
      trail[m[1].length - 1] = m[2]
      id = slugify(m[2])
    } else lines.push(line)
  }
  flush()
  return out
}

function pack(text: string): string[] {
  if (text.length <= MAX_CHARS) return [text]
  const parts: string[] = []
  let buf = ''
  for (const para of text.split(/\n\n+/)) {
    if (buf && buf.length + para.length > MAX_CHARS) {
      parts.push(buf)
      buf = ''
    }
    buf += (buf ? '\n\n' : '') + para
  }
  if (buf) parts.push(buf)
  return parts
}

const prev: Chunk[] = await readFile(OUT, 'utf8').then(JSON.parse).catch(() => [])
const cache = new Map(prev.map((c) => [c.hash, c.embedding]))
const chunks: Chunk[] = []

for await (const file of walk(DOCS_DIR)) {
  const pagePath = pagePathOf(file)
  const module = pagePath.split('/')[1] || 'root'
  const body = (await readFile(file, 'utf8')).replace(/^---\n[\s\S]*?\n---\n/, '')
  for (const r of split(body)) {
    pack(r.text).forEach((text, i) => {
      const hash = createHash('sha256').update(r.headingPath.join('>') + text).digest('hex').slice(0, 16)
      chunks.push({
        id: `${pagePath}#${r.headingId}:${i}`,
        pagePath, headingId: r.headingId, headingPath: r.headingPath, module, text, hash,
        embedding: cache.get(hash) ?? [], // unchanged chunks reuse their old embedding
      })
    })
  }
}

const todo = chunks.filter((c) => c.embedding.length === 0)
if (todo.length) {
  const vecs = await embed(todo.map((c) => `${c.headingPath.join(' > ')}\n${c.text}`))
  todo.forEach((c, i) => (c.embedding = vecs[i]))
}
await writeFile(OUT, JSON.stringify(chunks))
console.log(`${chunks.length} chunks (${todo.length} newly embedded) -> ${OUT}`)
