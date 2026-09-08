<script lang="ts" setup>
// 特别鸣谢页动态区：从后端拉取贡献者条目并分组渲染。
// 规则：非 separate 分类的条目合并显示在「贡献者」组；
//       separate=true 的分类（如 实力富哥💵=赞助者）各自成独立分组。
// 卡片按参考图居中展示：发光头像/昵称/贡献项目/主页链接。

import {computed, onMounted, onUnmounted, ref} from 'vue'
import {upUrl} from './img-url'
import {onContributorChange} from '../ws'

interface Category {id: string; name: string; emoji: string; separate: boolean; separate_title: string}
interface Entry {
  id: string
  nickname: string
  avatar_url: string
  display_id: string
  bilibili_uid: string
  description: string
  category_ids: string[]
  user?: {bio?: string} | null
}

const apiBase = ref('')
const loading = ref(true)
const error = ref('')
const noConfig = ref(false)
const categories = ref<Category[]>([])
const entries = ref<Entry[]>([])

function descOf(e: Entry): string {
  return e.description || e.user?.bio || ''
}

function avatarOf(e: Entry): string {
  if (e.avatar_url) return upUrl(e.avatar_url)
  if (apiBase.value) return apiBase.value + '/api/v1/avatar.svg?name=' + encodeURIComponent(e.nickname)
  return ''
}

function githubUrl(e: Entry): string {
  return `https://github.com/${encodeURIComponent(e.display_id)}`
}

function bilibiliUrl(e: Entry): string {
  return `https://space.bilibili.com/${encodeURIComponent(e.bilibili_uid)}`
}

// 依据昵称生成默认头像文字与糖果底色（与后端规则一致）
function avatarText(nickname: string): string {
  const chars = Array.from(nickname.trim())
  if (chars.length === 0) return '?'
  const code = chars[0].codePointAt(0)!
  if (code > 0x2e80) return chars[0] // CJK 取首字
  return chars.slice(0, 2).join('')
}

const candyColors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E8BAFF', '#FFB3DE']
function avatarColor(nickname: string): string {
  let h = 0
  for (const ch of nickname) h = (h * 31 + ch.codePointAt(0)!) % 100000
  return candyColors[h % candyColors.length]
}

// 主「贡献者」组 = 所有非 separate 分类
const normalCats = () => categories.value.filter(c => !c.separate)
// 独立分组 = separate 分类（标题用 separate_title）
const separateCats = () => categories.value.filter(c => c.separate)
// 某分类下的条目（含多分类归属）
const entriesOf = (catId: string) => entries.value.filter(e => (e.category_ids ?? []).includes(catId))
// 「贡献者」合并组：出现在任一非 separate 分类下的条目（去重）
const mergedEntries = () => {
  const ids = new Set(normalCats().map(c => c.id))
  const seen = new Set<number>()
  return entries.value.filter(e => {
    if ((e.category_ids ?? []).some(id => ids.has(id))) {
      if (seen.has(e.id)) return false
      seen.add(e.id)
      return true
    }
    return false
  })
}
// 仅属于独立分类（separate）且不属于任何普通分类的条目（避免与合并组重复）
const orphanSeparate = (catId: string) => {
  const normalIds = new Set(normalCats().map(c => c.id))
  return entriesOf(catId).filter(e => !(e.category_ids ?? []).some(id => normalIds.has(id)))
}
// 卡片副标题：按后端分类顺序拼接该成员全部贡献项目
const categoryMap = computed(() => new Map(categories.value.map(c => [c.id, c])))
function categoryLine(e: Entry): string {
  return (e.category_ids ?? [])
      .map(id => categoryMap.value.get(id))
      .filter((c): c is Category => Boolean(c))
      .map(c => `${c.name} ${c.emoji}`)
      .join(' ')
}

async function load() {
  loading.value = true
  error.value = ''
  const base = (window as any).__ANVIL_API_BASE__ as string | undefined || 'https://api.anvilcraft.dev'
  apiBase.value = base.replace(/\/$/, '')
  try {
    const [catRes, entryRes] = await Promise.all([
      fetch(`${apiBase.value}/api/v1/categories`),
      fetch(`${apiBase.value}/api/v1/contributors`),
    ])
    if (!catRes.ok || !entryRes.ok) throw new Error('接口请求失败')
    const catJson = await catRes.json()
    const entryJson = await entryRes.json()
    categories.value = catJson.categories ?? []
    entries.value = entryJson.entries ?? []
    noConfig.value = false
    error.value = ''
  } catch (e: any) {
    error.value = `加载失败：${e?.message ?? e}`
  } finally {
    loading.value = false
  }
}

async function refreshSilently() {
  if (noConfig.value || !apiBase.value) return
  try {
    const [catRes, entryRes] = await Promise.all([
      fetch(`${apiBase.value}/api/v1/categories`),
      fetch(`${apiBase.value}/api/v1/contributors`),
    ])
    if (!catRes.ok || !entryRes.ok) return
    const catJson = await catRes.json()
    const entryJson = await entryRes.json()
    if (catJson.categories) categories.value = catJson.categories
    if (entryJson.entries) entries.value = entryJson.entries
  } catch { /* 静默 */ }
}

let pollTimer: number | null = null
let offWs: (() => void) | null = null
let wsReloadTimer: number | undefined
// WS 事件到达后防抖刷新（合并连续的创建/更新事件）
function scheduleWsRefresh() {
  if (wsReloadTimer !== undefined) clearTimeout(wsReloadTimer)
  wsReloadTimer = window.setTimeout(() => {
    wsReloadTimer = undefined
    refreshSilently()
  }, 500)
}
onMounted(() => {
  load().then(() => {
    // 匿名订阅 WS 实时刷新；连接失败时由 60s 轮询兜底
    if (apiBase.value) offWs = onContributorChange(apiBase.value, scheduleWsRefresh)
  })
  pollTimer = window.setInterval(refreshSilently, 60 * 1000)
  document.addEventListener('visibilitychange', onVisibility)
})
function onVisibility() {
  if (!document.hidden) refreshSilently()
}
onUnmounted(() => {
  if (pollTimer) window.clearInterval(pollTimer)
  if (wsReloadTimer !== undefined) clearTimeout(wsReloadTimer)
  offWs?.()
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <div class="dynamic-members">
    <p v-if="loading" class="hint">加载中…</p>
    <div v-else-if="error" class="hint">
      <p>{{ error }}</p>
      <button v-if="!noConfig" class="retry-btn" @click="load">重试</button>
    </div>

    <template v-else>
      <!-- 贡献者合并组（非独立分类，一人一条去重） -->
      <section v-if="mergedEntries().length" class="cat-block">
        <h2>贡献者</h2>
        <div class="cards">
          <div
              v-for="e in mergedEntries()"
              :key="e.id"
              class="card"
          >
            <div class="avatar-ring">
              <img
                  v-if="e.avatar_url || avatarOf(e)"
                  class="avatar"
                  :src="avatarOf(e)"
                  :alt="e.nickname"
                  loading="lazy"
              />
              <span
                  v-else
                  class="avatar avatar-fallback"
                  :style="{background: avatarColor(e.nickname)}"
              >{{ avatarText(e.nickname) }}</span>
            </div>
            <div class="info">
              <div class="name">{{ e.nickname }}</div>
              <div v-if="categoryLine(e)" class="roles">{{ categoryLine(e) }}</div>
              <p v-if="descOf(e)" class="desc">{{ descOf(e) }}</p>
            </div>
            <div v-if="e.display_id || e.bilibili_uid" class="card-footer">
              <a
                  v-if="e.display_id"
                  class="profile-link"
                  :href="githubUrl(e)"
                  target="_blank"
                  rel="noopener"
                  :title="`GitHub: ${e.display_id}`"
                  aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
              <a
                  v-if="e.bilibili_uid"
                  class="profile-link"
                  :href="bilibiliUrl(e)"
                  target="_blank"
                  rel="noopener"
                  :title="`Bilibili: ${e.bilibili_uid}`"
                  aria-label="Bilibili"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M17.28 3.22a.75.75 0 0 1 1.06 1.06l-1.63 1.63h1.79A3.5 3.5 0 0 1 22 9.41v8.09a3.5 3.5 0 0 1-3.5 3.5H5.5A3.5 3.5 0 0 1 2 17.5V9.41a3.5 3.5 0 0 1 3.5-3.5h1.79L5.66 4.28A.75.75 0 0 1 6.72 3.22l2.69 2.69h5.18l2.69-2.69ZM5.5 7.41a2 2 0 0 0-2 2v8.09a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9.41a2 2 0 0 0-2-2h-13Zm3.25 4.34a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm6.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 独立分组（separate 分类，如 赞助者） -->
      <section v-for="cat in separateCats()" :key="'sep-' + cat.id" class="cat-block">
        <h2>{{ cat.separate_title || cat.name + ' ' + cat.emoji }}</h2>
        <div class="cards">
          <div v-for="e in orphanSeparate(cat.id)" :key="e.id" class="card">
            <div class="avatar-ring">
              <img v-if="e.avatar_url || avatarOf(e)" class="avatar" :src="avatarOf(e)" :alt="e.nickname" loading="lazy"/>
              <span v-else class="avatar avatar-fallback" :style="{background: avatarColor(e.nickname)}">{{ avatarText(e.nickname) }}</span>
            </div>
            <div class="info">
              <div class="name">{{ e.nickname }}</div>
              <div v-if="categoryLine(e)" class="roles">{{ categoryLine(e) }}</div>
              <p v-if="descOf(e)" class="desc">{{ descOf(e) }}</p>
            </div>
            <div v-if="e.display_id || e.bilibili_uid" class="card-footer">
              <a
                  v-if="e.display_id"
                  class="profile-link"
                  :href="githubUrl(e)"
                  target="_blank"
                  rel="noopener"
                  :title="`GitHub: ${e.display_id}`"
                  aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
              <a
                  v-if="e.bilibili_uid"
                  class="profile-link"
                  :href="bilibiliUrl(e)"
                  target="_blank"
                  rel="noopener"
                  :title="`Bilibili: ${e.bilibili_uid}`"
                  aria-label="Bilibili"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M17.28 3.22a.75.75 0 0 1 1.06 1.06l-1.63 1.63h1.79A3.5 3.5 0 0 1 22 9.41v8.09a3.5 3.5 0 0 1-3.5 3.5H5.5A3.5 3.5 0 0 1 2 17.5V9.41a3.5 3.5 0 0 1 3.5-3.5h1.79L5.66 4.28A.75.75 0 0 1 6.72 3.22l2.69 2.69h5.18l2.69-2.69ZM5.5 7.41a2 2 0 0 0-2 2v8.09a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9.41a2 2 0 0 0-2-2h-13Zm3.25 4.34a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm6.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"/>
                </svg>
              </a>
            </div>
          </div>
          <p v-if="!orphanSeparate(cat.id).length" class="hint">（暂无）</p>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.hint {
  color: var(--vp-c-text-3);
  padding: 12px 0;
}
.retry-btn {
  margin-top: 8px;
  padding: 5px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 13px;
}
.retry-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.cat-block {
  margin: 20px 0;
}
.cat-block h2 {
  color: var(--vp-c-text-1);
  font-size: 1.3em;
  margin-bottom: 12px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 784px;
  margin: 0 auto;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(calc(50% - 8px), 376px);
  min-height: 280px;
  padding: 28px 24px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-align: center;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.14);
}
.avatar-ring {
  width: 88px;
  height: 88px;
  padding: 3px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #41d1ff, #00a7c7);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft), 0 0 22px rgba(65, 209, 255, 0.28);
}
.avatar {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: var(--vp-c-bg);
}
.avatar-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.72);
  font-weight: 700;
  font-size: 22px;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  color: var(--vp-c-text-1);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}
.roles {
  margin-top: 8px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}
.desc {
  display: -webkit-box;
  margin: 8px 0 0;
  overflow: hidden;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.card-footer {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: auto;
  padding-top: 16px;
}
.profile-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--vp-c-text-3);
  transition: color 0.2s, background 0.2s, transform 0.2s;
}
.profile-link:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateY(-1px);
}
.profile-link svg {
  width: 18px;
  height: 18px;
}
:global(.dark) .card {
  border-color: rgba(255, 255, 255, 0.08);
  background: var(--vp-c-bg-elv, var(--vp-c-bg-soft));
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.32);
}
:global(.dark) .card:hover {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.48);
}
:global(.dark) .avatar-ring {
  box-shadow: 0 0 0 3px rgba(65, 209, 255, 0.12), 0 0 26px rgba(65, 209, 255, 0.35);
}
@media (max-width: 640px) {
  .cards {
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .card {
    width: 100%;
    max-width: 380px;
    min-height: 0;
  }
}
</style>
