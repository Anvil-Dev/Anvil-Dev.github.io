<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { authStore } from '../auth-store'
import { onContributorChange } from '../ws'
import { upUrl } from './img-url'
import { avatarColor, initials } from './member-avatar'
import Members from './members.vue'

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
  avatar_url?: string
  display_id?: string
  bilibili_uid?: string
  description?: string
  category_ids?: string[]
  user?: { bio?: string } | null
}

const props = withDefaults(defineProps<{ lang?: 'zh' | 'en' }>(), { lang: 'zh' })
const english = computed(() => props.lang === 'en')
const loading = ref(true)
const error = ref(false)
const categories = ref<Category[]>([])
const entries = ref<Entry[]>([])
const photoErrors = ref(new Set<string>())
const outlines = computed(() => new Map(categories.value.map(category => [category.id, category])))
const groups = computed(() => {
  const main = { id: 'contributors', title: english.value ? 'Contributors' : '贡献者', members: [] as Entry[] }
  const separate = categories.value.filter(category => category.separate).map(category => ({
    id: category.id, title: category.separate_title || [category.name, category.emoji].filter(Boolean).join(' '),
    members: [] as Entry[],
  }))
  const seen = new Set<string>()
  for (const entry of entries.value) {
    if (seen.has(entry.id)) continue
    seen.add(entry.id)
    const ids = entry.category_ids ?? []
    if (ids.some(id => outlines.value.has(id) && !outlines.value.get(id)!.separate)) {
      main.members.push(entry)
    } else {
      for (const group of separate) if (ids.includes(group.id)) group.members.push(entry)
    }
  }
  return main.members.length ? [main, ...separate] : separate
})

function roles(entry: Entry): Category[] {
  return (entry.category_ids ?? []).map(id => outlines.value.get(id)).filter((c): c is Category => !!c)
}

function avatar(entry: Entry) {
  return entry.avatar_url ? upUrl(entry.avatar_url) : authStore.apiURL('/avatar.svg?name=' + encodeURIComponent(entry.nickname))
}

let request: AbortController | undefined
let timer: number | undefined
let debounce: number | undefined
let disconnect: (() => void) | undefined
let refreshPending = false
let mounted = false
let hasLiveData = false

async function refresh() {
  if (!mounted) return
  if (request) {
    refreshPending = true
    return
  }
  const controller = new AbortController()
  request = controller
  try {
    const [categoryResponse, entryResponse] = await Promise.all([
      fetch(authStore.apiURL('/categories'), { signal: controller.signal }),
      fetch(authStore.apiURL('/contributors'), { signal: controller.signal }),
    ])
    if (!categoryResponse.ok || !entryResponse.ok) throw new Error('Contributor request failed')
    const [categoryData, entryData] = await Promise.all([categoryResponse.json(), entryResponse.json()])
    if (!mounted) return
    categories.value = categoryData.categories ?? []
    entries.value = entryData.entries ?? []
    hasLiveData = true
    error.value = false
  } catch {
    if (mounted && !hasLiveData) error.value = true
  } finally {
    request = undefined
    if (mounted) {
      loading.value = false
      if (refreshPending) {
        refreshPending = false
        void refresh()
      }
    }
  }
}

function visibilityChanged() {
  if (!document.hidden) void refresh()
}

onMounted(() => {
  mounted = true
  void refresh()
  disconnect = onContributorChange(authStore.apiBase, () => {
    window.clearTimeout(debounce)
    debounce = window.setTimeout(refresh, 500)
  })
  timer = window.setInterval(refresh, 60_000)
  document.addEventListener('visibilitychange', visibilityChanged)
})
onUnmounted(() => {
  mounted = false
  request?.abort()
  disconnect?.()
  window.clearTimeout(debounce)
  window.clearInterval(timer)
  document.removeEventListener('visibilitychange', visibilityChanged)
})
</script>

<template>
  <div class="dynamic-members">
    <p v-if="loading" class="hint" role="status">{{ english ? 'Loading…' : '加载中…' }}</p>
    <div v-else-if="error">
      <p class="hint" role="status">{{ english ? 'The live contributor list could not be loaded.' : '未能加载实时贡献者名单。' }}</p>
      <button type="button" class="retry-btn" @click="refresh">{{ english ? 'Retry' : '重试' }}</button>
      <h2>{{ english ? 'Archived lists' : '存档名单' }}</h2>
      <details open>
        <summary>{{ english ? 'Contributors' : '贡献者' }}</summary>
        <Members type="contributors" />
      </details>
      <details>
        <summary>{{ english ? 'Supporters' : '赞助者' }}</summary>
        <Members type="supporters" />
      </details>
    </div>
    <template v-else>
      <section v-for="group in groups" :key="group.id" class="cat-block">
        <h2>{{ group.title }}</h2>
        <div class="cards">
          <article v-for="entry in group.members" :key="entry.id" class="card">
            <div class="avatar-ring">
              <img v-if="!photoErrors.has(avatar(entry))" class="avatar" :src="avatar(entry)" :alt="entry.nickname"
                loading="lazy" @error="photoErrors.add(avatar(entry))" />
              <span v-else class="avatar avatar-fallback" :style="{ background: avatarColor(entry.nickname) }">
                {{ initials(entry.nickname) }}
              </span>
            </div>
            <div class="info">
              <div class="name">{{ entry.nickname }}</div>
              <div class="roles">
                <span v-for="category in roles(entry)" :key="category.id" class="role">{{ category.name }} {{ category.emoji }}</span>
              </div>
              <p v-if="entry.description || entry.user?.bio" class="desc">{{ entry.description || entry.user?.bio }}</p>
            </div>
            <div v-if="entry.display_id || entry.bilibili_uid" class="card-footer">
              <a v-if="entry.display_id" class="profile-link" :href="'https://github.com/' + encodeURIComponent(entry.display_id)"
                :aria-label="'GitHub · ' + entry.display_id" :title="'GitHub · ' + entry.display_id" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
              <a v-if="entry.bilibili_uid" class="profile-link" :href="'https://space.bilibili.com/' + encodeURIComponent(entry.bilibili_uid)"
                :aria-label="'Bilibili · ' + entry.bilibili_uid" :title="'Bilibili · ' + entry.bilibili_uid" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M17.28 3.22a.75.75 0 0 1 1.06 1.06l-1.63 1.63h1.79A3.5 3.5 0 0 1 22 9.41v8.09a3.5 3.5 0 0 1-3.5 3.5H5.5A3.5 3.5 0 0 1 2 17.5V9.41a3.5 3.5 0 0 1 3.5-3.5h1.79L5.66 4.28A.75.75 0 0 1 6.72 3.22l2.69 2.69h5.18l2.69-2.69ZM5.5 7.41a2 2 0 0 0-2 2v8.09a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9.41a2 2 0 0 0-2-2h-13Zm3.25 4.34a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm6.5 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"/>
                </svg>
              </a>
            </div>
          </article>
          <p v-if="!group.members.length" class="hint">{{ english ? 'No entries yet.' : '（暂无）' }}</p>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped lang="scss">
details { margin-block: 1rem; }
summary { cursor: pointer; font-weight: 600; }
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
/* 单个贡献项目作为整体换行：行内容不下时完整移到下一行，不拆散名称与 emoji */
.role {
  display: inline-block;
  margin: 0 5px;
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
