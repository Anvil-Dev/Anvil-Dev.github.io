<script lang="ts" setup>
// 动态贡献者列表：从后端 API 拉取贡献者条目、贡献项目、检查清单并渲染。
// 后端地址优先取 window.__ANVIL_API_BASE__（由部署方注入）；未配置时优雅提示。
import {onMounted, onUnmounted, ref} from 'vue'
import {upUrl} from './img-url'

interface CheckItem {
  id: string
  name: string
  enabled: boolean
}

interface Category {
  id: string
  name: string
  emoji: string
  separate: boolean
  separate_title: string
}

interface Entry {
  id: string
  nickname: string
  avatar_url: string
  display_id: string
  description: string
  category_ids: string[]
  check_states: Record<string, boolean> | null
  user?: { bio?: string } | null
}

// 悬浮卡片展示的描述：条目描述优先，其次绑定用户的个人简介
function descOf(e: Entry): string {
  return e.description || e.user?.bio || ''
}

const apiBase = ref('')
const loading = ref(true)
const error = ref('')
const noConfig = ref(false)
const categories = ref<Category[]>([])
const entries = ref<Entry[]>([])
const checkItems = ref<CheckItem[]>([])
const enabled = ref(false)

// 无头像时使用后端 SVG 默认头像（糖果色 + 昵称文字）
function avatarOf(e: Entry): string {
  if (e.avatar_url) return upUrl(e.avatar_url)
  if (apiBase.value) {
    return apiBase.value + '/api/v1/avatar.svg?name=' + encodeURIComponent(e.nickname)
  }
  return ''
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

async function load() {
  loading.value = true
  error.value = ''
  const base = (window as any).__ANVIL_API_BASE__ as string | undefined || 'https://api.anvilcraft.dev'
  apiBase.value = base.replace(/\/$/, '')
  noConfig.value = false
  try {
    const [catRes, entryRes, checkRes] = await Promise.all([
      fetch(`${apiBase.value}/api/v1/categories`),
      fetch(`${apiBase.value}/api/v1/contributors`),
      fetch(`${apiBase.value}/api/v1/checklist`),
    ])
    if (!catRes.ok || !entryRes.ok || !checkRes.ok) throw new Error('接口请求失败')
    const catJson = await catRes.json()
    const entryJson = await entryRes.json()
    const checkJson = await checkRes.json()
    categories.value = catJson.categories ?? []
    entries.value = entryJson.entries ?? []
    checkItems.value = (checkJson.items ?? []).filter((i: CheckItem) => i.enabled)
    enabled.value = true
    error.value = ''
  } catch (e: any) {
    error.value = `加载失败：${e?.message ?? e}`
  } finally {
    loading.value = false
  }
}

// 加载失败后重试
function retry() {
  enabled.value = false
  load()
}

// 静默刷新（不闪 loading、不重置错误态）；供轮询与页面重新可见时调用
async function refreshSilently() {
  if (noConfig.value || !apiBase.value) return
  try {
    const [catRes, entryRes, checkRes] = await Promise.all([
      fetch(`${apiBase.value}/api/v1/categories`),
      fetch(`${apiBase.value}/api/v1/contributors`),
      fetch(`${apiBase.value}/api/v1/checklist`),
    ])
    if (!catRes.ok || !entryRes.ok || !checkRes.ok) return
    const catJson = await catRes.json()
    const entryJson = await entryRes.json()
    const checkJson = await checkRes.json()
    if (catJson.categories) categories.value = catJson.categories
    if (entryJson.entries) entries.value = entryJson.entries
    if (checkJson.items) checkItems.value = (checkJson.items ?? []).filter((i: CheckItem) => i.enabled)
  } catch {
    /* 静默失败：保留当前数据 */
  }
}

let pollTimer: number | null = null

onMounted(() => {
  load()
  // 每 60s 静默刷新，保持与后端数据同步（新审核通过的条目可见）
  pollTimer = window.setInterval(refreshSilently, 60 * 1000)
  // 页面重新可见时立即刷新（如从后台标签切回）
  document.addEventListener('visibilitychange', onVisibility)
})

function onVisibility() {
  if (!document.hidden) refreshSilently()
}

onUnmounted(() => {
  if (pollTimer) {
    window.clearInterval(pollTimer)
    pollTimer = null
  }
  document.removeEventListener('visibilitychange', onVisibility)
})

// 主列表分类（非单独列出）与独立榜单
const mainCategories = (): Category[] => categories.value.filter(c => !c.separate)
const separateCategories = (): Category[] => categories.value.filter(c => c.separate)
// 某分类下的条目（一人可属多分类，卡片会出现在其每个分类下）
const entriesOf = (catId: string): Entry[] => entries.value.filter(e => (e.category_ids ?? []).includes(catId))
</script>

<template>
  <div class="dynamic-contributors">
    <p v-if="loading" class="hint">加载中…</p>
    <div v-else-if="error" class="hint">
      <p>{{ error }}</p>
      <button v-if="!noConfig" class="retry-btn" @click="retry">重试</button>
    </div>

    <template v-else-if="enabled">
      <section v-for="cat in mainCategories()" :key="cat.id" class="cat-block">
        <h2>{{ cat.name }} {{ cat.emoji }}</h2>
        <div class="cards">
          <div
              v-for="e in entriesOf(cat.id)"
              :key="e.id"
              class="card"
              :title="descOf(e) || undefined"
          >
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
            <div class="info">
              <div class="name">{{ e.nickname }}</div>
              <div class="sub">{{ e.display_id }}</div>
            </div>
            <ul v-if="checkItems.length" class="checks">
              <li
                  v-for="ci in checkItems"
                  :key="ci.id"
                  class="check"
                  :class="{done: e.check_states?.[ci.id]}"
              >
                <span class="box">{{ e.check_states?.[ci.id] ? '✔' : '' }}</span>
                {{ ci.name }}
              </li>
            </ul>
            <p v-if="descOf(e)" class="desc">{{ descOf(e) }}</p>
          </div>
        </div>
      </section>

      <section v-for="cat in separateCategories()" :key="'sep-' + cat.id" class="cat-block">
        <h2>{{ cat.separate_title || cat.name + ' ' + cat.emoji }}</h2>
        <div class="cards">
          <div v-for="e in entriesOf(cat.id)" :key="e.id" class="card" :title="descOf(e) || undefined">
            <img v-if="e.avatar_url || avatarOf(e)" class="avatar" :src="avatarOf(e)" :alt="e.nickname" loading="lazy"/>
            <span v-else class="avatar avatar-fallback" :style="{background: avatarColor(e.nickname)}">{{ avatarText(e.nickname) }}</span>
            <div class="info">
              <div class="name">{{ e.nickname }}</div>
              <div class="sub">{{ e.display_id }}</div>
            </div>
            <ul v-if="checkItems.length" class="checks">
              <li v-for="ci in checkItems" :key="ci.id" class="check" :class="{done: e.check_states?.[ci.id]}">
                <span class="box">{{ e.check_states?.[ci.id] ? '✔' : '' }}</span>
                {{ ci.name }}
              </li>
            </ul>
            <p v-if="descOf(e)" class="desc">{{ descOf(e) }}</p>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.hint {
  color: #888;
  padding: 12px 0;
}
.retry-btn {
  margin-top: 8px;
  padding: 5px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
}
.retry-btn:hover {
  border-color: #1f6feb;
  color: #1f6feb;
}
.cat-block {
  margin: 20px 0;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 12px;
  border: 1px solid rgba(128, 128, 128, 0.25);
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.05);
  cursor: default;
  position: relative;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
}
.avatar-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: 700;
  font-size: 18px;
}
.name {
  font-weight: 600;
}
.sub {
  color: #888;
  font-size: 12px;
}
.checks {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
}
.check {
  font-size: 12px;
  color: #999;
}
.check .box {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #aaa;
  border-radius: 3px;
  margin-right: 4px;
  line-height: 12px;
  font-size: 10px;
  text-align: center;
}
.check.done {
  color: #2e7d32;
}
.check.done .box {
  background: #2e7d32;
  color: #fff;
  border-color: #2e7d32;
}
.desc {
  font-size: 12px;
  color: #666;
  margin: 6px 0 0;
}
</style>
