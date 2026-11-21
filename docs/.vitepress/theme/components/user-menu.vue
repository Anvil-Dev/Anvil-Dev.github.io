<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { authStore, listenForSessionChanges } from '../auth-store'
import { useAccountUI } from '../account-ui'
import { upUrl } from './img-url'

const { t, path, loginHref, destination } = useAccountUI()
const route = useRoute()
const root = ref<HTMLElement>()
const trigger = ref<HTMLButtonElement>()
const open = ref(false)
const name = computed(() => authStore.user?.nickname || authStore.user?.username || '')
const href = computed(() => loginHref(destination(route.path)))
let detach: (() => void) | undefined
function outside(event: MouseEvent) {
  if (!root.value?.contains(event.target as Node)) open.value = false
}
function escape() { open.value = false; trigger.value?.focus() }
function logout() { authStore.clearAuth(); open.value = false }
function login(event: MouseEvent) {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  location.assign(loginHref(destination(location.pathname + location.search + location.hash)))
}
onMounted(() => {
  detach = listenForSessionChanges()
  document.addEventListener('click', outside)
})
onBeforeUnmount(() => { detach?.(); document.removeEventListener('click', outside) })
</script>

<template>
  <div ref="root" class="user-menu" @keydown.esc="escape">
    <a v-if="!authStore.isLoggedIn" class="login" :href="href" @click="login">{{ t('登录', 'Sign in') }}</a>
    <button v-else ref="trigger" type="button" class="avatar" :aria-label="t('账户菜单', 'Account menu')" :aria-expanded="open" @click="open = !open">
      <img v-if="authStore.user?.avatar_url" :src="upUrl(authStore.user.avatar_url)" alt="">
      <span v-else>{{ name.slice(0, 1) }}</span>
    </button>
    <div v-if="authStore.isLoggedIn && open" class="dropdown">
      <strong>{{ name }}</strong><small>@{{ authStore.user?.username }}</small>
      <a :href="path('posts/base-info/profile')" @click="open = false">{{ t('个人中心', 'Profile') }}</a>
      <button type="button" @click="logout">{{ t('退出登录', 'Sign out') }}</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-menu { position: relative; margin-inline-start: 12px; display: inline-flex; align-items: center; }
.login { border: 1px solid var(--vp-c-brand-1); color: var(--vp-c-brand-1); padding: 3px 12px; border-radius: 7px; font-size: 14px; white-space: nowrap; }
.avatar { width: 32px; height: 32px; border-radius: 50%; overflow: hidden; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.avatar img { width: 100%; height: 100%; object-fit: cover; }
.dropdown { position: absolute; inset-inline-end: 0; top: calc(100% + 10px); width: max-content; min-width: 150px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); box-shadow: var(--vp-shadow-3); border-radius: 9px; padding: 10px; z-index: 12; text-align: start;
  > * { display: block; padding: 3px 6px; }
  small { color: var(--vp-c-text-2); border-bottom: 1px solid var(--vp-c-divider); }
  a, button { font-size: 14px; }
}
</style>
