// Usage: npm run index -- <docsDir> [outFile]
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { type Chunk, embed } from './shared.js'

const DOCS_DIR = path.resolve(process.argv[2] ?? 'docs')
const OUT = path.resolve(process.argv[3] ?? 'index.json')
const MAX_CHARS = 5000

// Approximates VuePress heading slugs; verify against a few real headings.
const slugify = (s: string) =>
  s.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s+/g, '-')

async function* walk(dir: string): AsyncGenerator<string> {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue // skips .vuepress
    const p = path.join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else if (e.name.endsWith('.md')) yield p
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
