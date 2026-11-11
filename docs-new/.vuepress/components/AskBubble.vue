<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter, useSiteData, withBase } from 'vuepress/client'
const mounted = ref(false)
onMounted(() => { mounted.value = true })

const API_URL = 'https://zdomae-github-io.onrender.com/ask' // set to your deployed endpoint
const CONTENT = '[vp-content]'
const MIN_DWELL = 7000
const MAX_DWELL = 10000
const MAX_PER_PAGE = 3
const MIN_CHARS = 80
const SNOOZE_MS = 60_000 // after an explicit dismiss, stay quiet for a minute
const TYPING_GRACE_MS = 2500 // ignore retargets for this long after the last keystroke
const REQUEST_TIMEOUT_MS = 45_000 // Render free tier can cold-start for ~30s

const route = useRoute()
const router = useRouter()
const site = useSiteData()

const visible = ref(false)
const open = ref(false)
const top = ref(0)
const left = ref(0)
const question = ref('')
const answer = ref('')
// The answer is shown as plain text, so markdown emphasis markers would appear
// as literal asterisks. Drop the ** pairs, plus a lone trailing * left over
// when a marker is split across two streamed chunks.
const answerText = computed(() => answer.value.replace(/\*\*/g, '').replace(/\*$/, ''))
const sources = ref<{ pagePath: string; headingId: string; title: string }[]>([])
const sectionTitle = ref('')
const loading = ref(false)
const input = ref<HTMLInputElement | null>(null)
const box = ref<HTMLElement | null>(null)
const body = ref<HTMLElement | null>(null)
const maxH = ref(0) // pixel cap so the panel never runs past the bottom edge
const narrow = ref(false) // phones get a bottom sheet instead of a floating panel
const contextText = ref('') // the paragraph the question is about
const copied = ref(false)

let target: HTMLElement | null = null
let io: IntersectionObserver | null = null
let shown = 0
let raf = 0
let snoozeUntil = 0
let lastTypedAt = 0
let controller: AbortController | null = null
let stick = true // keep the answer scrolled to the bottom while it streams
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

// Show which paragraph the panel is pointed at. Without it a retarget is
// invisible: the title changes but the reader can't tell what is in scope.
function setContext(el: HTMLElement) {
  const t = (el.innerText ?? '').replace(/\s+/g, ' ').trim()
  contextText.value = t.length > 120 ? t.slice(0, 120).trimEnd() + '…' : t
}

function markTyped() {
  lastTypedAt = Date.now()
}

function retarget(el: HTMLElement) {
  if (el === target) return
  // Never yank a response that is still streaming: retry after another dwell.
  if (loading.value) return arm(el)
  // Never yank the panel while the reader is composing a question: that would
  // move the box and wipe the text they are typing. Retry once they are idle.
  if (question.value.trim() || Date.now() - lastTypedAt < TYPING_GRACE_MS) return arm(el)
  target = el
  seen.add(el)
  question.value = ''
  answer.value = ''
  sources.value = []
  copied.value = false
  sectionTitle.value = sectionOf(el)
  setContext(el)
  visible.value = true
  nextTick(place)
}

function reveal(el: HTMLElement) {
  if (Date.now() < snoozeUntil) return // reader dismissed it recently: stay quiet
  if (shown >= MAX_PER_PAGE) return
  seen.add(el)
  shown++
  target = el
  sectionTitle.value = sectionOf(el)
  setContext(el)
  visible.value = true
  nextTick(place)
}

// Fixed page chrome the widget has to stay clear of: the navbar band along the
// top and the sidebar column down the left. A closed mobile drawer is translated
// off-canvas, so it reports right <= 0 and is ignored.
function obstacles() {
  const nav = document.querySelector('.vp-navbar')
  const side = document.querySelector('.vp-sidebar')
  const top = nav ? Math.round(nav.getBoundingClientRect().height) : 0
  let leftEdge = 0
  if (side) {
    const cs = getComputedStyle(side)
    const r = side.getBoundingClientRect()
    if (cs.display !== 'none' && cs.visibility !== 'hidden' && r.right > 8) leftEdge = Math.round(r.right)
  }
  return { top, leftEdge }
}

function place() {
  if (!target) return
  const vh = window.innerHeight
  const M = 8 // keep clear of the viewport edge

  // Bottom sheet: CSS pins the panel to the bottom edge, so only the height cap
  // needs maintaining. Measuring it here would fight the layout.
  if (narrow.value && open.value) {
    maxH.value = Math.round(vh * 0.7)
    return
  }

  const r = target.getBoundingClientRect()
  const vw = window.innerWidth
  const GAP = 12 // gap between the paragraph and the widget
  const { top: navH, leftEdge } = obstacles()
  const w = box.value?.offsetWidth || (open.value ? 340 : 172)
  const h = box.value?.offsetHeight || 40

  if (r.bottom < 0 || r.top > vh) {
    if (!open.value) visible.value = false // reader scrolled away: dismiss quietly
    return
  }

  const minX = leftEdge + M // never sit on the sidebar
  const minY = navH + M // never sit under the navbar
  const clampY = (y: number) => Math.max(minY, Math.min(y, vh - h - M))
  const fitsX = (x: number) => x >= minX && x + w <= vw - M

  // Prefer the page margins beside the paragraph, then above/below it, so the
  // widget never covers the text being read. Corner pin is the last resort.
  const rightX = r.right + GAP
  const leftX = r.left - w - GAP
  const sideY = clampY(r.top)
  if (fitsX(rightX)) {
    left.value = rightX
    top.value = sideY
  } else if (fitsX(leftX)) {
    left.value = leftX
    top.value = sideY
  } else {
    const maxX = vw - w - M
    // If the strip beside the sidebar is narrower than the box, staying on
    // screen wins: the sidebar is only an obstacle, not a hard wall.
    const innerX = maxX >= minX ? Math.max(minX, Math.min(rightX, maxX)) : Math.max(M, maxX)
    if (r.bottom + GAP + h <= vh - M) {
      left.value = innerX
      top.value = r.bottom + GAP
    } else if (r.top - GAP - h >= minY) {
      left.value = innerX
      top.value = r.top - GAP - h
    } else {
      left.value = Math.max(M, maxX)
      top.value = Math.max(minY, vh - h - M)
    }
  }

  // Cap the panel to the space left below it instead of re-placing it: the box
  // stays put while the answer streams and the body scrolls on its own.
  maxH.value = Math.max(200, Math.min(Math.round(vh * 0.7), vh - top.value - M))
}

const onScroll = () => {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(place)
}

// Keep the sheet/floating decision in sync with the viewport. A phone that
// rotates, or a desktop window dragged narrow, changes mode mid-session.
function onResize() {
  narrow.value = window.innerWidth < 720
  onScroll()
}

function teardown() {
  stopStream()
  io?.disconnect()
  timers.forEach((t) => clearTimeout(t))
  timers.clear()
  visible.value = false
  open.value = false
  question.value = ''
  answer.value = ''
  sources.value = []
  sectionTitle.value = ''
  contextText.value = ''
  copied.value = false
  target = null
}

function setup() {
  teardown()
  shown = 0
  snoozeUntil = 0 // fresh page: a dismiss on the previous page doesn't carry over
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
  stick = true
  // Drop every dwell timer queued before the panel opened. Otherwise several
  // visible paragraphs fire in quick succession and each one retargets the
  // panel, making it hop around and clear whatever the reader has typed.
  timers.forEach((t) => clearTimeout(t))
  timers.clear()
  await nextTick()
  requestAnimationFrame(place) // measure the real panel, not the closed bubble
  // On a phone the sheet sits at the bottom edge, so focusing the input would
  // pop the keyboard over the answer the reader is waiting for.
  if (!narrow.value) input.value?.focus()
}

// Abort any in-flight answer. Without this the reader loop keeps appending to
// `answer` after the panel is closed and `loading` stays true, which leaves the
// Ask button disabled and blocks retargeting for the rest of the response.
function stopStream() {
  controller?.abort()
  controller = null
  loading.value = false
}

// The widget unmounts on close, so focus would fall to <body>. Hand it to the
// paragraph the reader was on instead, so keyboard and screen-reader users keep
// their place.
function focusBack() {
  if (!target) return
  const el = target
  el.setAttribute('tabindex', '-1')
  nextTick(() => {
    el.focus({ preventScroll: true })
    el.addEventListener('blur', () => el.removeAttribute('tabindex'), { once: true })
  })
}

function close() {
  const hadFocus = !!box.value?.contains(document.activeElement)
  stopStream()
  snoozeUntil = Date.now() + SNOOZE_MS
  timers.forEach((t) => clearTimeout(t))
  timers.clear()
  open.value = false
  visible.value = false
  answer.value = ''
  sources.value = []
  question.value = ''
  sectionTitle.value = ''
  contextText.value = ''
  copied.value = false
  if (hadFocus) focusBack()
}

async function ask() {
  const q = question.value.trim()
  if (!q || loading.value || !target) return
  const h = headingFor(target)
  stopStream() // drop any previous request before starting a new one
  const ctl = new AbortController()
  controller = ctl
  let timedOut = false
  const timer = window.setTimeout(() => {
    timedOut = true
    ctl.abort()
  }, REQUEST_TIMEOUT_MS)
  loading.value = true
  answer.value = ''
  sources.value = []
  stick = true
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: ctl.signal,
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
  } catch (err) {
    if ((err as Error)?.name === 'AbortError') {
      // The reader closed the panel, moved to another paragraph, or the request
      // timed out. Only the timeout deserves a message.
      if (timedOut) answer.value = 'The docs service is taking too long. Try again in a moment.'
    } else if ((err as Error)?.message === '429') {
      answer.value = "You're asking quickly — give it a minute and try again."
    } else {
      answer.value = 'Something went wrong. Try asking again in a moment.'
    }
  } finally {
    clearTimeout(timer)
    // A newer request may have replaced this one; only the owner clears state.
    if (controller === ctl) {
      controller = null
      loading.value = false
    }
  }
}

function go(s: { pagePath: string; headingId: string }) {
  router.push(withBase(s.pagePath) + (s.headingId ? '#' + s.headingId : ''))
}

async function copyAnswer() {
  try {
    await navigator.clipboard.writeText(answerText.value)
    copied.value = true
    window.setTimeout(() => (copied.value = false), 1500)
  } catch {
    // Clipboard blocked (insecure context or denied permission): say nothing.
  }
}

// Follow the stream, unless the reader has scrolled up to re-read something.
function onBodyScroll() {
  const el = body.value
  if (!el) return
  stick = el.scrollHeight - el.scrollTop - el.clientHeight < 32
}

watch([answerText, sources], () => {
  if (!stick) return
  nextTick(() => {
    const el = body.value
    if (el) el.scrollTop = el.scrollHeight
  })
})

onMounted(() => {
  narrow.value = window.innerWidth < 720
  setTimeout(setup, 300)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  teardown()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
watch(() => route.path, () => setTimeout(setup, 300))
</script>

<template>
   <Teleport v-if="mounted" to="body">
    <Transition name="kb-ask-fade">
      <div
        v-if="visible"
        ref="box"
        class="kb-ask"
        :class="{ 'kb-ask--sheet': narrow && open }"
        :style="narrow && open ? undefined : { top: top + 'px', left: left + 'px' }"
        @keydown.esc="close"
      >
        <div v-if="!open" class="kb-ask__bubble-wrap">
          <button type="button" class="kb-ask__bubble" @click="openPanel">
            Ask about this paragraph
          </button>
          <button type="button" class="kb-ask__dismiss" aria-label="Dismiss" title="Dismiss" @click="close">×</button>
        </div>
        <form
          v-else
          class="kb-ask__panel"
          :style="{ maxHeight: maxH ? maxH + 'px' : '70vh' }"
          @submit.prevent="ask"
        >
          <div class="kb-ask__head">
            <span :title="sectionTitle || undefined">{{ sectionTitle ? `Ask about this section: ${sectionTitle}` : 'Ask about this section' }}</span>
            <button type="button" class="kb-ask__close" aria-label="Close" @click="close">×</button>
          </div>
          <p v-if="contextText" class="kb-ask__context" :title="contextText">{{ contextText }}</p>
          <div class="kb-ask__row">
            <input ref="input" v-model="question" maxlength="500" placeholder="What's unclear?" @input="markTyped" />
            <button type="submit" :disabled="loading || !question.trim()">Ask</button>
          </div>
          <div ref="body" class="kb-ask__body" @scroll.passive="onBodyScroll">
            <p v-if="loading && !answer" class="kb-ask__muted" role="status">Reading the docs…</p>
            <div
              v-if="answerText"
              class="kb-ask__answer"
              aria-live="polite"
              :aria-busy="loading ? 'true' : 'false'"
            >{{ answerText }}</div>
            <ul v-if="sources.length && !loading" class="kb-ask__sources">
              <li v-for="s in sources" :key="s.pagePath + s.headingId">
                <a :href="withBase(s.pagePath) + '#' + s.headingId" @click.prevent="go(s)">{{ s.title }}</a>
              </li>
            </ul>
            <div v-if="answerText && !loading" class="kb-ask__foot">
              <button type="button" class="kb-ask__copy" @click="copyAnswer">
                {{ copied ? 'Copied' : 'Copy answer' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
/* Colours come from the site's --vp-c-* palette, so the widget follows the
   theme (including dark mode) instead of always painting light-on-white. */
.kb-ask { position: fixed; z-index: 50; font-size: 13px; line-height: 1.45; }
.kb-ask__bubble-wrap { position: relative; }
.kb-ask__bubble {
  /* Size to the label instead of a fixed 160px, which wrapped "Having trouble?
     Ask about this paragraph" onto four lines and left a ragged block. */
  width: max-content; max-width: 200px; padding: 8px 30px 8px 10px; text-align: left; cursor: pointer;
  color: var(--vp-c-text, #3c3c43); background: var(--vp-c-bg-elv, #fff);
  border: 1px solid var(--vp-c-border, #c2c2c4); border-left: 3px solid var(--vp-c-accent, #3eaf7c);
  border-radius: 6px; box-shadow: 0 1px 6px var(--vp-c-shadow, rgba(0, 0, 0, 0.12));
  user-select: none;
}
.kb-ask__bubble:hover { border-color: var(--vp-c-accent, #3eaf7c); }
/* 24px keeps the dismiss target at the minimum comfortable touch size. */
.kb-ask__dismiss {
  position: absolute; top: 2px; right: 2px; width: 24px; height: 24px; padding: 0;
  display: grid; place-items: center; font-size: 15px; line-height: 1;
  color: var(--vp-c-text, #3c3c43); background: var(--vp-c-bg-elv, #fff);
  border: 1px solid transparent; border-radius: 4px; cursor: pointer; opacity: 0.55;
}
.kb-ask__dismiss:hover { opacity: 1; border-color: var(--vp-c-border, #c2c2c4); }
.kb-ask__panel {
  display: flex; flex-direction: column;
  width: 320px; max-width: calc(100vw - 24px); padding: 10px;
  color: var(--vp-c-text, #3c3c43); background: var(--vp-c-bg-elv, #fff);
  border: 1px solid var(--vp-c-border, #c2c2c4); border-radius: 8px;
  box-shadow: 0 4px 18px var(--vp-c-shadow, rgba(0, 0, 0, 0.18));
}
/* Phone: anchor to the bottom edge as a sheet. The inline top/left are dropped
   for this mode, so no !important is needed. */
.kb-ask--sheet { left: 0; right: 0; bottom: 0; }
.kb-ask--sheet .kb-ask__panel {
  width: 100%; max-width: none; border-radius: 12px 12px 0 0; border-bottom: 0;
  padding-bottom: max(10px, env(safe-area-inset-bottom));
}
/* Only the body scrolls, so the header and input stay put while an answer
   streams in. */
.kb-ask__body { min-height: 0; overflow-y: auto; overscroll-behavior: contain; }
.kb-ask__head { display: flex; justify-content: space-between; align-items: center; gap: 8px; font-weight: 600; margin-bottom: 6px; }
.kb-ask__head span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.kb-ask__close {
  flex: none; display: grid; place-items: center; width: 26px; height: 26px; padding: 0;
  border: 0; border-radius: 4px; background: none; font-size: 18px; line-height: 1; cursor: pointer; color: inherit;
}
.kb-ask__close:hover { background: var(--vp-c-bg-alt, #f6f6f7); }
/* Two lines of the paragraph in scope, so a retarget is visible. */
.kb-ask__context {
  margin: 0 0 8px; color: var(--vp-c-text-mute, #3c3c43c7); font-size: 12px;
  display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-clamp: 2;
  overflow: hidden; border-left: 2px solid var(--vp-c-border, #c2c2c4); padding-left: 6px;
}
.kb-ask__row { display: flex; gap: 6px; flex: none; }
.kb-ask__row input {
  flex: 1; min-width: 0; padding: 6px 8px; color: inherit; background: var(--vp-c-bg-alt, #f6f6f7);
  border: 1px solid var(--vp-c-border, #c2c2c4); border-radius: 4px;
}
.kb-ask__row button {
  padding: 6px 12px; cursor: pointer; color: #fff; background: var(--vp-c-accent-bg, #3eaf7c);
  border: 0; border-radius: 4px;
}
.kb-ask__row button:hover:not(:disabled) { background: var(--vp-c-accent-hover, #349469); }
.kb-ask__row button:disabled { opacity: 0.5; cursor: default; }
.kb-ask__answer { margin-top: 10px; white-space: pre-wrap; }
.kb-ask__muted { margin: 10px 0 0; color: var(--vp-c-text-mute, #3c3c43c7); }
.kb-ask__sources { margin: 10px 0 0; padding: 8px 0 0 16px; border-top: 1px solid var(--vp-c-border, #c2c2c4); }
.kb-ask__foot { display: flex; justify-content: flex-end; margin-top: 8px; }
.kb-ask__copy {
  padding: 3px 8px; font-size: 12px; cursor: pointer; color: var(--vp-c-text-mute, #3c3c43c7);
  background: none; border: 1px solid var(--vp-c-border, #c2c2c4); border-radius: 4px;
}
.kb-ask__copy:hover { color: var(--vp-c-text, #3c3c43); border-color: var(--vp-c-accent, #3eaf7c); }
.kb-ask__bubble:focus-visible, .kb-ask__panel :focus-visible { outline: 2px solid var(--vp-c-accent, #3eaf7c); outline-offset: 2px; }
.kb-ask-fade-enter-active, .kb-ask-fade-leave-active { transition: opacity 0.25s; }
.kb-ask-fade-enter-from, .kb-ask-fade-leave-to { opacity: 0; }
@media (prefers-reduced-motion: reduce) { .kb-ask-fade-enter-active, .kb-ask-fade-leave-active { transition: none; } }
</style>
