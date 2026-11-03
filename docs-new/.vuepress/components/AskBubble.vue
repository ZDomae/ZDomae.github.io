<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter, useSiteData, withBase } from 'vuepress/client'
const mounted = ref(false)
onMounted(() => { mounted.value = true })

const API_URL = 'https://zdomae-github-io.onrender.com/ask' // set to your deployed endpoint
const CONTENT = '[vp-content]'
const MIN_DWELL = 7000
const MAX_DWELL = 10000
const MAX_PER_PAGE = 3
const MIN_CHARS = 80

const route = useRoute()
const router = useRouter()
const site = useSiteData()

const visible = ref(false)
const open = ref(false)
const top = ref(0)
const left = ref(0)
const question = ref('')
const answer = ref('')
const sources = ref<{ pagePath: string; headingId: string; title: string }[]>([])
const sectionTitle = ref('')
const loading = ref(false)
const input = ref<HTMLInputElement | null>(null)

let target: HTMLElement | null = null
let io: IntersectionObserver | null = null
let shown = 0
let raf = 0
const timers = new Map<Element, number>()
const seen = new WeakSet<Element>()

const stripBase = (p: string) => (p.startsWith(site.value.base) ? '/' + p.slice(site.value.base.length) : p)
const dwellFor = (el: Element) => Math.min(MAX_DWELL, MIN_DWELL + (el.textContent ?? '').trim().split(/\s+/).length * 40)

function arm(el: Element) {
  timers.set(el, window.setTimeout(() => {
    // Only count time while the tab is actually in view.
    if (document.visibilityState !== 'visible') return arm(el)
    // Panel is open: hop it to whatever paragraph the reader has moved on to.
    if (open.value) return retarget(el as HTMLElement)
    // Don't stack bubbles.
    if (visible.value) return arm(el)
    reveal(el as HTMLElement)
  }, dwellFor(el)))
}

function sectionOf(el: HTMLElement) {
  const t = headingFor(el)?.textContent?.replace(/^#\s*/, '').trim() ?? ''
  return t.length > 40 ? t.slice(0, 40).trimEnd() + '…' : t
}

function retarget(el: HTMLElement) {
  if (el === target) return
  // Never yank a response that is still streaming: retry after another dwell.
  if (loading.value) return arm(el)
  target = el
  seen.add(el)
  question.value = ''
  answer.value = ''
  sources.value = []
  sectionTitle.value = sectionOf(el)
  place()
  visible.value = true
}

function reveal(el: HTMLElement) {
  if (shown >= MAX_PER_PAGE) return
  seen.add(el)
  shown++
  target = el
  sectionTitle.value = sectionOf(el)
  place()
  visible.value = true
}

function place() {
  if (!target) return
  const r = target.getBoundingClientRect()
  if (r.bottom < 0 || r.top > window.innerHeight) {
    if (!open.value) visible.value = false // reader scrolled away: dismiss quietly
    return
  }
  top.value = Math.max(8, r.top)
  left.value = Math.min(r.right + 12, window.innerWidth - (open.value ? 340 : 172))
}

const onScroll = () => {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(place)
}

function teardown() {
  io?.disconnect()
  timers.forEach((t) => clearTimeout(t))
  timers.clear()
  visible.value = false
  open.value = false
  question.value = ''
  answer.value = ''
  sources.value = []
  sectionTitle.value = ''
  target = null
}

function setup() {
  teardown()
  shown = 0
  io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      clearTimeout(timers.get(e.target))
      timers.delete(e.target)
      if (e.intersectionRatio >= 0.6 && (!seen.has(e.target) || open.value)) arm(e.target)
    }
  }, { threshold: 0.6 })
  document.querySelectorAll<HTMLElement>(`${CONTENT} p, ${CONTENT} li`).forEach((el) => {
    if (el.tagName === 'LI' && el.querySelector(':scope > p')) return
    if ((el.textContent ?? '').trim().length < MIN_CHARS) return
    io!.observe(el)
  })
}

function headingFor(el: HTMLElement): HTMLElement | null {
  let node: Element | null = el
  while (node && !node.matches(CONTENT)) {
    let sib = node.previousElementSibling
    while (sib) {
      if (/^H[1-4]$/.test(sib.tagName)) return sib as HTMLElement
      sib = sib.previousElementSibling
    }
    node = node.parentElement
  }
  return null
}

async function openPanel() {
  open.value = true
  await nextTick()
  place()
  input.value?.focus()
}

function close() {
  open.value = false
  visible.value = false
  answer.value = ''
  sources.value = []
  question.value = ''
  sectionTitle.value = ''
}

async function ask() {
  const q = question.value.trim()
  if (!q || loading.value || !target) return
  const h = headingFor(target)
  loading.value = true
  answer.value = ''
  sources.value = []
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        question: q,
        pagePath: stripBase(route.path),
        headingId: h?.id,
        headingTitle: h?.textContent?.replace(/^#\s*/, '').trim(),
        paragraph: target.innerText.slice(0, 1500),
      }),
    })
    if (!res.ok || !res.body) throw new Error(String(res.status))
    const hdr = res.headers.get('x-sources')
    if (hdr) sources.value = JSON.parse(decodeURIComponent(hdr))
    const reader = res.body.getReader()
    const dec = new TextDecoder()
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      answer.value += dec.decode(value, { stream: true })
    }
  } catch {
    answer.value = 'Something went wrong. Try asking again in a moment.'
  }
  loading.value = false
}

function go(s: { pagePath: string; headingId: string }) {
  router.push(withBase(s.pagePath) + (s.headingId ? '#' + s.headingId : ''))
}

onMounted(() => {
  setTimeout(setup, 300)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
  teardown()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
watch(() => route.path, () => setTimeout(setup, 300))
</script>

<template>
   <Teleport v-if="mounted" to="body">
    <Transition name="kb-ask-fade">
      <div v-if="visible" class="kb-ask" :style="{ top: top + 'px', left: left + 'px' }" @keydown.esc="close">
        <button v-if="!open" type="button" class="kb-ask__bubble" @click="openPanel">
          Having trouble? Ask about this paragraph
        </button>
        <form v-else class="kb-ask__panel" @submit.prevent="ask">
          <div class="kb-ask__head">
            <span :title="sectionTitle || undefined">{{ sectionTitle ? `Ask about this section: ${sectionTitle}` : 'Ask about this section' }}</span>
            <button type="button" class="kb-ask__close" aria-label="Close" @click="close">×</button>
          </div>
          <div class="kb-ask__row">
            <input ref="input" v-model="question" maxlength="500" placeholder="What's unclear?" />
            <button type="submit" :disabled="loading || !question.trim()">Ask</button>
          </div>
          <p v-if="loading && !answer" class="kb-ask__muted">Reading the docs…</p>
          <div v-if="answer" class="kb-ask__answer" aria-live="polite">{{ answer }}</div>
          <ul v-if="sources.length && !loading" class="kb-ask__sources">
            <li v-for="s in sources" :key="s.pagePath + s.headingId">
              <a :href="withBase(s.pagePath) + '#' + s.headingId" @click.prevent="go(s)">{{ s.title }}</a>
            </li>
          </ul>
        </form>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.kb-ask { position: fixed; z-index: 50; font-size: 13px; line-height: 1.45; }
.kb-ask__bubble {
  width: 160px; padding: 8px 10px; text-align: left; cursor: pointer;
  color: var(--c-text, #2c3e50); background: var(--c-bg, #fff);
  border: 1px solid var(--c-border, #eaecef); border-left: 3px solid var(--c-brand, #3eaf7c);
  border-radius: 6px; box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);
}
.kb-ask__bubble:hover { border-color: var(--c-brand, #3eaf7c); }
.kb-ask__panel {
  width: 320px; max-height: 70vh; overflow-y: auto; padding: 10px;
  color: var(--c-text, #2c3e50); background: var(--c-bg, #fff);
  border: 1px solid var(--c-border, #eaecef); border-radius: 8px; box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
}
.kb-ask__head { display: flex; justify-content: space-between; align-items: center; gap: 8px; font-weight: 600; margin-bottom: 8px; }
.kb-ask__head span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.kb-ask__close { flex: none; border: 0; background: none; font-size: 18px; cursor: pointer; color: inherit; }
.kb-ask__row { display: flex; gap: 6px; }
.kb-ask__row input {
  flex: 1; min-width: 0; padding: 6px 8px; color: inherit; background: var(--c-bg-light, #f6f8fa);
  border: 1px solid var(--c-border, #eaecef); border-radius: 4px;
}
.kb-ask__row button {
  padding: 6px 12px; cursor: pointer; color: #fff; background: var(--c-brand, #3eaf7c);
  border: 0; border-radius: 4px;
}
.kb-ask__row button:disabled { opacity: 0.5; cursor: default; }
.kb-ask__answer { margin-top: 10px; white-space: pre-wrap; }
.kb-ask__muted { margin: 10px 0 0; opacity: 0.7; }
.kb-ask__sources { margin: 10px 0 0; padding: 8px 0 0 16px; border-top: 1px solid var(--c-border, #eaecef); }
.kb-ask__bubble:focus-visible, .kb-ask__panel :focus-visible { outline: 2px solid var(--c-brand, #3eaf7c); outline-offset: 2px; }
.kb-ask-fade-enter-active, .kb-ask-fade-leave-active { transition: opacity 0.25s; }
.kb-ask-fade-enter-from, .kb-ask-fade-leave-to { opacity: 0; }
@media (prefers-reduced-motion: reduce) { .kb-ask-fade-enter-active, .kb-ask-fade-leave-active { transition: none; } }
</style>
