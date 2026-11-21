<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { authStore, type UserInfo } from '../auth-store'
import { useAccountUI } from '../account-ui'

interface Device { device_code: string; user_code: string; verification_uri: string; interval?: number; expires_in?: number }
const { t, destination } = useAccountUI()
const device = ref<Device | null>(null)
const error = ref('')
const status = ref('')
const busy = ref(false)
let controller = new AbortController()
let timer: number | undefined
let next = ''
const redirectKey = 'anvil_home_login_redirect'

function cancel() {
  controller.abort()
  controller = new AbortController()
  window.clearTimeout(timer)
  device.value = null
  busy.value = false
  status.value = error.value = ''
}
onBeforeUnmount(cancel)
onMounted(async () => {
  next = destination(new URLSearchParams(location.search).get('redirect'))
  const signal = controller.signal
  await authStore.restore()
  if (!signal.aborted && authStore.isLoggedIn) location.replace(next)
})

async function begin() {
  if (busy.value || device.value) return
  cancel()
  const signal = controller.signal
  busy.value = true
  try {
    const mode = await fetch(authStore.apiURL('/auth/mode'), { signal }).catch(() => null)
    if (signal.aborted) return
    if (mode?.ok && (await mode.json()).mode === 'oauth') {
      if (signal.aborted) return
      try { sessionStorage.setItem(redirectKey, next) } catch { /* The callback defaults to Profile. */ }
      location.assign(authStore.apiURL('/auth/begin?site=website'))
      return
    }
    const response = await fetch(authStore.apiURL('/auth/device/start'), { method: 'POST', signal })
    const data = await response.json()
    if (!response.ok || !data.device_flow || !data.device_code || !data.user_code) throw new Error(data.error || 'HTTP ' + response.status)
    const verification = new URL(data.verification_uri)
    if (verification.protocol !== 'https:' || verification.hostname !== 'github.com') throw new Error('Invalid GitHub verification URL')
    if (signal.aborted) return
    device.value = data
    const deadline = Date.now() + 1000 * Math.min(900, Number(data.expires_in) || 900)
    let interval = Math.max(5, Number(data.interval) || 5) * 1000
    async function poll() {
      if (signal.aborted) return
      if (Date.now() >= deadline) {
        device.value = null
        error.value = t('设备码已过期，请重新登录。', 'The device code expired. Start again.')
        return
      }
      try {
        const r = await fetch(authStore.apiURL('/auth/device/poll'), {
          method: 'POST', signal, headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ device_code: data.device_code }),
        })
        const result = await r.json()
        if (signal.aborted) return
        if (r.ok && result.token) {
          authStore.setAuth(result.token, result.user as UserInfo)
          location.replace(next)
          return
        }
        const reason = String(result.error || result.status || '')
        if (reason === 'slow_down') interval += 5000
        else if (/denied|declined|expired|invalid_grant|expired_token/i.test(reason) ||
          (!r.ok && r.status < 500 && r.status !== 429 && !/pending/i.test(reason))) {
          device.value = null
          error.value = t('设备授权未完成。', 'Device authorization failed.') + ' ' + (reason || 'HTTP ' + r.status)
          return
        }
        status.value = t('正在等待 GitHub 授权。', 'Waiting for GitHub authorization.')
      } catch {
        if (signal.aborted) return
        status.value = t('连接中断，正在重试。', 'Connection lost. Retrying.')
      }
      if (!signal.aborted) timer = window.setTimeout(poll, interval)
    }
    timer = window.setTimeout(poll, interval)
  } catch (e) {
    if (!signal.aborted) error.value = t('无法发起登录。', 'Unable to start sign-in.') + (e instanceof Error ? ' ' + e.message : '')
  } finally { if (!signal.aborted) busy.value = false }
}
async function copyCode() {
  if (!device.value) return
  try { await navigator.clipboard.writeText(device.value.user_code); status.value = t('设备码已复制。', 'Device code copied.') }
  catch { status.value = t('请选择并复制设备码。', 'Select and copy the device code.') }
}
</script>

<template>
  <div class="account">
    <p>{{ t('使用 GitHub 账号登录后，可编辑个人资料并申请成为贡献者。首次登录会创建本站账号。', 'Sign in with GitHub to edit your profile and apply as a contributor. Your first sign-in creates a site account.') }}</p>
    <button v-if="!device" type="button" class="primary" :disabled="busy" @click="begin">{{ busy ? t('连接中…','Connecting…') : t('使用 GitHub 登录', 'Sign in with GitHub') }}</button>
    <section v-else>
      <h2>{{ t('GitHub 设备授权', 'GitHub device authorization') }}</h2>
      <p>{{ t('请在 GitHub 授权页输入此设备码。', 'Enter this code on the GitHub verification page.') }}</p>
      <strong><code>{{ device.user_code }}</code></strong>
      <button type="button" @click="copyCode">{{ t('复制设备码','Copy code') }}</button>
      <p><a :href="device.verification_uri" target="_blank" rel="noopener noreferrer" @click="copyCode">{{ t('前往 GitHub 授权','Open GitHub verification') }}</a></p>
      <button type="button" @click="cancel">{{ t('取消','Cancel') }}</button>
    </section>
    <p v-if="status" role="status">{{ status }}</p>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
  </div>
</template>
<style scoped lang="scss" src="../account.scss"></style>
