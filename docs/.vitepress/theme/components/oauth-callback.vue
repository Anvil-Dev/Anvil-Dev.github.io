<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { authStore, request, type UserInfo } from '../auth-store'
import { useAccountUI } from '../account-ui'

const { t, path, destination } = useAccountUI()
const error = ref('')
const controller = new AbortController()
onBeforeUnmount(() => controller.abort())
onMounted(async () => {
  const query = new URLSearchParams(location.search)
  const code = query.get('code')
  const state = query.get('state')
  const denied = query.get('error_description') || query.get('error')
  try {
    if (denied) throw new Error(denied)
    if (!code || !state) throw new Error(t('回调缺少 code 或 state。', 'The callback is missing code or state.'))
    const params = new URLSearchParams({ code, state })
    const result = await request<{ token: string; user: UserInfo }>('/auth/callback?' + params, { signal: controller.signal }, false)
    if (controller.signal.aborted) return
    authStore.setAuth(result.token, result.user)
    let target: string | null = null
    try { target = sessionStorage.getItem('anvil_home_login_redirect'); sessionStorage.removeItem('anvil_home_login_redirect') } catch { /* Storage is optional. */ }
    location.replace(destination(target))
  } catch (e) {
    if (!controller.signal.aborted) error.value = t('GitHub 登录失败。', 'GitHub sign-in failed.') + ' ' + (e instanceof Error ? e.message : '')
  }
})
</script>
<template>
  <div class="account">
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <p v-else role="status">{{ t('正在完成 GitHub 登录…', 'Completing GitHub sign-in…') }}</p>
    <a v-if="error" :href="path('login')">{{ t('返回登录页', 'Back to sign in') }}</a>
  </div>
</template>
<style scoped lang="scss" src="../account.scss"></style>
