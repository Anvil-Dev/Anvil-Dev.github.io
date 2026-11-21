<script setup lang="ts">
import { computed, onMounted, ref, watch, onBeforeUnmount } from 'vue'
import { authStore, type UserInfo } from '../auth-store'
import { useAccountUI, usePageRequests, jpeg, upload, statusText, type Application } from '../account-ui'
import { upUrl } from './img-url'

interface Entry { mc_id: string; mc_uuid: string; mc_id_updated_at?: string }
const { t, path, loginHref } = useAccountUI()
const page = usePageRequests()
const { busy, error, notice } = page
const me = computed(() => authStore.user)
const form = ref({ nickname: '', bio: '', avatar_url: '' })
const entry = ref<Entry | null>(null)
const mc = ref('')
const apps = ref<Application[]>([])
const loaded = ref(false)
const email = ref('')
const bound = ref(false)
const secret = ref('')
const otpUri = ref('')
const code = ref('')
const invite = ref('')
const now = ref(0)
let clock: number | undefined
const cooldown = computed(() => {
  const end = Date.parse(entry.value?.mc_id_updated_at || '') + 86400000
  return end > now.value ? new Date(end) : null
})
function resetPrivate() {
  page.cancel()
  form.value = { nickname: '', bio: '', avatar_url: '' }
  email.value = secret.value = otpUri.value = code.value = invite.value = mc.value = ''
  bound.value = false
  loaded.value = false
  apps.value = []
  entry.value = null
}
async function loadApplications() {
  const result = await page.get<{ applications: Application[] }>('/applications/mine')
  apps.value = result.applications || []
}
async function load() {
  const user = me.value
  if (!user) return
  await page.run(async () => {
    const [, result] = await Promise.all([loadApplications(), page.get<{entries: Entry[]}>('/contributors?user_id=' + encodeURIComponent(user.id))])
    entry.value = result.entries?.at(-1) || null
    mc.value = entry.value?.mc_id || ''
    loaded.value = true
  }, t('无法载入个人中心。', 'Could not load your account.'))
}
watch(() => me.value?.id, id => {
  resetPrivate()
  if (!id || !me.value) return
  const user = me.value
  form.value = { nickname: user.nickname || '', bio: user.bio || '', avatar_url: user.avatar_url || '' }
  email.value = user.email || ''
  bound.value = user.email_verified ?? !!user.email
  void load()
}, { immediate: true })
onMounted(() => {
  void authStore.restore()
  now.value = Date.now()
  clock = window.setInterval(() => { now.value = Date.now() }, 30000)
})
onBeforeUnmount(() => window.clearInterval(clock))

function save() {
  return page.run(async () => {
    const { user } = await page.get<{user?: UserInfo}>('/users/me/profile', { method: 'PUT', body: JSON.stringify(form.value) })
    if (user) authStore.setAuth(authStore.token, user)
    else await authStore.restore(true)
    notice.value = t('个人资料已保存。', 'Profile saved.')
  }, t('资料保存失败。', 'Could not save your profile.'))
}
async function pickAvatar(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return
  await page.run(async () => {
    const signal = page.signal
    form.value.avatar_url = await upload(await jpeg(file, true), signal)
    notice.value = t('头像已上传。保存资料后生效。', 'Avatar uploaded. Save your profile to use it.')
  }, t('头像上传失败。', 'Could not upload the avatar.'))
}
function changeMC(refresh: boolean) {
  return page.run(async () => {
    const id = mc.value.trim()
    if (!refresh && !/^[A-Za-z0-9_]{3,16}$/.test(id)) throw new Error(t('请输入 3 至 16 位字母、数字或下划线。', 'Use 3–16 letters, numbers or underscores.'))
    const { entry: changed } = await page.get<{entry: Entry}>('/users/me/mc-id' + (refresh ? '/refresh' : ''), refresh ?
      { method: 'POST' } : { method: 'PUT', body: JSON.stringify({ mc_id: id }) })
    entry.value = changed
    mc.value = changed.mc_id
    now.value = Date.now()
    notice.value = t('Minecraft ID 已更新。', 'Minecraft ID updated.')
  }, t('Minecraft ID 更新失败。', 'Could not update your Minecraft ID.'))
}
function bind() {
  return page.run(async () => {
    if (!secret.value) {
      const result = await page.get<{secret: string; otpauth_url: string}>('/auth/totp/request', { method: 'POST', body: JSON.stringify({ email: email.value.trim() }) })
      secret.value = result.secret
      otpUri.value = result.otpauth_url
    } else {
      await page.get('/auth/totp/verify', { method: 'POST', body: JSON.stringify({ code: code.value.trim() }) })
      bound.value = true
      secret.value = otpUri.value = code.value = ''
      notice.value = t('邮箱与验证器已绑定。', 'Email and authenticator linked.')
    }
  }, t('验证器绑定失败。', 'Could not link your authenticator.'))
}
function register() {
  return page.run(async () => {
    const result = await page.get<{ token: string; user: UserInfo }>('/auth/register-admin', {
      method: 'POST', body: JSON.stringify({ invite_code: invite.value.trim(), email: email.value.trim(), totp_code: code.value.trim() }),
    })
    authStore.setAuth(result.token, result.user)
    invite.value = code.value = ''
    notice.value = t('管理员身份已启用。', 'Administrator access enabled.')
  }, t('管理员注册失败。', 'Administrator registration failed.'))
}
function withdraw(application: Application) {
  if (!window.confirm(t('撤回申请', 'Withdraw application') + ' #' + application.id + '?')) return
  return page.run(async () => {
    await page.get('/applications/' + encodeURIComponent(application.id) + '/withdraw', { method: 'POST' })
    await loadApplications()
    notice.value = t('申请已撤回。', 'Application withdrawn.')
  }, t('申请撤回失败。', 'Could not withdraw the application.'))
}
</script>
<template>
  <div class="account" :aria-busy="busy">
    <template v-if="!me">
      <p v-if="authStore.state.unavailable" role="alert">{{ t('暂时无法验证会话。','Your session could not be verified.') }} <button @click="authStore.restore()">{{ t('重试','Retry') }}</button></p>
      <a class="action primary" :href="loginHref(path('posts/base-info/profile'))">{{ t('使用 GitHub 登录','Sign in with GitHub') }}</a>
    </template>
    <template v-else>
      <div><img v-if="me.avatar_url" class="avatar" :src="upUrl(me.avatar_url)" alt=""> <strong>{{ me.nickname || me.username }}</strong> · @{{ me.username }} · {{ me.role }} <button @click="authStore.clearAuth()">{{ t('退出登录','Sign out') }}</button></div>
      <form @submit.prevent="save"><fieldset :disabled="busy"><legend>{{ t('个人资料','Profile details') }}</legend>
        <label>{{ t('昵称','Display name') }}<input v-model="form.nickname"></label>
        <label>{{ t('上传头像','Upload avatar') }}<input type="file" accept="image/*" @change="pickAvatar"></label>
        <img v-if="form.avatar_url" class="avatar" :src="upUrl(form.avatar_url)" :alt="t('头像预览','Avatar preview')">
        <label>{{ t('头像 URL（留空使用 GitHub 头像）','Avatar URL (leave blank for your GitHub avatar)') }}<input v-model="form.avatar_url"></label>
        <label>{{ t('个人简介（显示在贡献者卡片上）','Bio (shown on your contributor card)') }}<textarea v-model="form.bio" rows="4"></textarea></label>
        <button class="primary">{{ t('保存资料','Save profile') }}</button>
      </fieldset></form>
      <fieldset :disabled="busy"><legend>{{ t('Minecraft 正版账号','Minecraft account') }}</legend>
        <template v-if="entry"><p>{{ t('当前玩家名','Current player name') }} · {{ entry.mc_id || '—' }} <code>{{ entry.mc_uuid }}</code></p>
          <p>{{ t('白名单按 UUID 识别。改名后可以从 Mojang 刷新玩家名。','The allowlist uses your UUID. Refresh the player name from Mojang after a rename.') }}</p>
          <button :disabled="!entry.mc_uuid" @click="changeMC(true)">{{ t('刷新玩家名','Refresh player name') }}</button>
          <label>{{ t('重新设置 Minecraft ID','Set Minecraft ID') }}<input v-model="mc" maxlength="16" :disabled="!!cooldown"></label>
          <p v-if="cooldown">{{ t('每 24 小时可修改一次，下次可修改时间','Changes are limited to once every 24 hours. Next change') }} · {{ cooldown.toLocaleString() }}</p>
          <button :disabled="!!cooldown" @click="changeMC(false)">{{ t('保存 Minecraft ID','Save Minecraft ID') }}</button>
        </template>
        <p v-else>{{ loaded ? t('申请审核通过后，可以在此管理 Minecraft ID。','Manage your Minecraft ID here after your contributor application is approved.') : t('正在读取账号资料…','Loading account details…') }}</p>
      </fieldset>
      <form @submit.prevent="bind"><fieldset :disabled="busy"><legend>{{ t('邮箱与 TOTP 验证器','Email and TOTP authenticator') }}</legend>
        <p v-if="bound">{{ t('已绑定邮箱','Linked email') }} · {{ email }}</p>
        <template v-else>
          <label>{{ t('邮箱','Email') }}<input v-model="email" type="email" required :disabled="!!secret"></label>
          <template v-if="secret"><p>{{ t('将此密钥添加到验证器，然后填写当前验证码。','Add this key to your authenticator, then enter the current code.') }}</p>
            <p class="secret"><code>{{ secret }}</code></p><p class="secret"><code>{{ otpUri }}</code></p>
            <label>{{ t('六位验证码','Six-digit code') }}<input v-model="code" required pattern="[0-9]{6}" inputmode="numeric" autocomplete="one-time-code"></label></template>
          <button>{{ secret ? t('验证并绑定','Verify and link') : t('获取绑定密钥','Request setup key') }}</button>
        </template>
      </fieldset></form>
      <form v-if="me.role === 'user'" @submit.prevent="register"><fieldset :disabled="busy || !bound"><legend>{{ t('使用邀请码注册管理员','Administrator invitation') }}</legend>
        <p>{{ t('先绑定邮箱与验证器，再输入超级管理员分发的一次性邀请码。','Link an email and authenticator, then enter the one-time invitation issued by a super administrator.') }}</p>
        <label>{{ t('邀请码','Invitation code') }}<input v-model="invite" required autocomplete="off"></label>
        <label>{{ t('当前 TOTP 验证码','Current TOTP code') }}<input v-model="code" required pattern="[0-9]{6}" inputmode="numeric" autocomplete="one-time-code"></label>
        <button>{{ t('提交注册','Register') }}</button>
      </fieldset></form>
      <section><h2>{{ t('我的贡献者申请','My contributor applications') }}</h2>
        <p v-if="!loaded"><button :disabled="busy" @click="load">{{ t('重新加载','Reload') }}</button></p>
        <p v-else-if="!apps.length">{{ t('暂无申请。','You have no applications.') }}</p>
        <a :href="path('posts/base-info/apply')">{{ t('申请成为贡献者','Apply as a contributor') }}</a>
        <ul><li v-for="a in apps" :key="a.id">#{{ a.id }} · {{ a.nickname }} · {{ statusText(a.status, t) }} · {{ t('分类','Category') }} #{{ a.category_id }}
          <p v-if="a.reject_reason">{{ t('拒绝原因','Reason') }} · {{ a.reject_reason }}</p>
          <template v-if="a.status === 'pending'"><a :href="path('posts/base-info/apply') + '?edit=' + encodeURIComponent(a.id)">{{ t('修改','Edit') }}</a> <button :disabled="busy" @click="withdraw(a)">{{ t('撤回','Withdraw') }}</button></template>
        </li></ul>
      </section>
    </template>
    <p v-if="error" role="alert" class="error">{{ error }}</p><p v-if="notice" role="status" class="notice">{{ notice }}</p>
  </div>
</template>
<style scoped lang="scss" src="../account.scss"></style>
