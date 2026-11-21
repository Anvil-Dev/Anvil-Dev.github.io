<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { authStore } from '../auth-store'
import { jpeg, statusText, upload, useAccountUI, usePageRequests, type Application } from '../account-ui'
import { upUrl } from './img-url'

interface Category { id: string; name: string; emoji: string }
interface Entry { category_ids?: string[]; qq?: string; bilibili_uid?: string; mc_id?: string; description?: string }
interface Photo { file: File; preview: string; uploaded?: string }
const { t, path, loginHref } = useAccountUI()
const page = usePageRequests()
const { busy, error, notice } = page
const me = computed(() => authStore.user)
const categories = ref<Category[]>([])
const apps = ref<Application[]>([])
const loaded = ref(false)
const reading = ref(false)
const editing = ref('')
const detail = ref('')
const retained = ref<string[]>([])
const photos = ref<Photo[]>([])
const emptyForm = () => ({ category_ids: [] as string[], qq: '', bilibili_uid: '', mc_id: '', description: '' })
const form = ref(emptyForm())
const maxImages = 10
let poll: number | undefined
let mounted = false
let formRevision = 0

function clearForm() {
  formRevision++
  photos.value.forEach(photo => URL.revokeObjectURL(photo.preview))
  photos.value = []
  retained.value = []
  editing.value = ''
  form.value = emptyForm()
}
function edit(a: Application) {
  clearForm()
  editing.value = a.id
  fill(a, a.category_ids?.length ? a.category_ids : [a.category_id])
  retained.value = [...(a.images || [])]
  error.value = notice.value = ''
}
function fill(entry: Entry, ids: string[]) {
  form.value = { category_ids: ids.filter(id => categories.value.some(c => c.id === id)), qq: entry.qq || '',
    bilibili_uid: entry.bilibili_uid || '', mc_id: entry.mc_id || '', description: entry.description || '' }
}
async function readApps() {
  const { applications } = await page.get<{ applications: Application[] }>('/applications/mine')
  apps.value = applications || []
}
async function load() {
  const user = me.value
  if (!user) return
  window.clearTimeout(poll)
  await page.run(async () => {
    const [cats] = await Promise.all([page.get<{categories: Category[]}>('/categories', {}, false), readApps()])
    categories.value = cats.categories || []
    const editId = new URLSearchParams(location.search).get('edit')
    const target = apps.value.find(a => a.id === editId && a.status === 'pending')
    if (target) edit(target)
    else if (!loaded.value && !apps.value.some(a => a.status === 'pending')) {
      const entries = await page.get<{entries: Entry[]}>('/contributors?user_id=' + encodeURIComponent(user.id))
      const latest = entries.entries?.at(-1)
      const approved = apps.value.find(a => a.status === 'approved')
      if (latest) fill(latest, latest.category_ids || [])
      else if (approved) fill(approved, approved.category_ids?.length ? approved.category_ids : [approved.category_id])
    }
    loaded.value = true
  }, t('无法读取申请资料。','Could not load application details.'))
  if (mounted && me.value?.id === user.id && loaded.value) startPoll()
}
function startPoll() {
  window.clearTimeout(poll)
  const signal = page.signal
  poll = window.setTimeout(async () => {
    try {
      if (!busy.value && !document.hidden) await readApps()
    } catch { /* Keep the last confirmed list during a temporary outage. */ }
    if (mounted && !signal.aborted && me.value) startPoll()
  }, 30000)
}
function reset() {
  page.cancel()
  window.clearTimeout(poll)
  clearForm()
  apps.value = []
  loaded.value = reading.value = false
  detail.value = ''
}
watch(() => me.value?.id, id => {
  if (!mounted) return
  reset()
  if (id) void load()
})
onMounted(() => {
  mounted = true
  if (me.value) void load()
  else void authStore.restore()
})
onBeforeUnmount(() => { mounted = false; reset() })

async function attach(event: Event) {
  const input = event.target as HTMLInputElement
  const selected = Array.from(input.files || [])
  input.value = ''
  if (reading.value) return
  reading.value = true
  error.value = ''
  const revision = formRevision
  try {
    for (const file of selected) {
      if (photos.value.length + retained.value.length >= maxImages) throw new Error(t('最多 10 张图片。','You can attach up to 10 images.'))
      const converted = await jpeg(file)
      if (revision !== formRevision) return
      photos.value.push({ file: converted, preview: URL.createObjectURL(converted) })
    }
  } catch (e) { if (revision === formRevision) error.value = e instanceof Error ? e.message : t('无法读取图片。','Could not read the image.') }
  finally { if (revision === formRevision) reading.value = false }
}
function removePhoto(i: number) {
  URL.revokeObjectURL(photos.value[i].preview)
  photos.value.splice(i, 1)
}
function submit() {
  const user = me.value
  if (!user || reading.value) return
  return page.run(async () => {
    if (!form.value.category_ids.length) throw new Error(t('请至少选择一个贡献项目。', 'Select at least one category.'))
    const images = [...retained.value]
    for (const photo of photos.value) {
      photo.uploaded ??= await upload(photo.file, page.signal)
      images.push(photo.uploaded)
    }
    const id = editing.value
    const payload = { ...form.value, nickname: user.nickname || user.username, id: user.username, images }
    await page.get(id ? '/applications/' + encodeURIComponent(id) : '/applications', {
      method: id ? 'PUT' : 'POST', body: JSON.stringify(payload),
    })
    clearForm()
    notice.value = t('申请已提交，等待审核。','Application submitted for review.')
    await readApps()
  }, t('申请保存失败。', 'Could not save the application.'))
}
function withdraw(a: Application) {
  if (!window.confirm(t('撤回申请', 'Withdraw application') + ' #' + a.id + '?')) return
  return page.run(async () => {
    await page.get('/applications/' + encodeURIComponent(a.id) + '/withdraw', { method: 'POST' })
    if (editing.value === a.id) clearForm()
    await readApps()
    notice.value = t('已撤回申请。','Application withdrawn.')
  }, t('撤回失败。','Could not withdraw the application.'))
}
function catName(id: string) {
  const c = categories.value.find(c => c.id === id)
  return c ? c.name + (c.emoji ? ' ' + c.emoji : '') : '#' + id
}
</script>

<template>
  <div class="account">
    <template v-if="!me">
      <p v-if="authStore.state.unavailable" role="alert">{{ t('暂时无法验证会话。','Your session could not be verified.') }} <button @click="authStore.restore()">{{ t('重试','Retry') }}</button></p>
      <a class="action primary" :href="loginHref(path('posts/base-info/apply'))">{{ t('使用 GitHub 登录','Sign in with GitHub') }}</a>
    </template>
    <template v-else>
      <p><img v-if="me.avatar_url" class="avatar" :src="upUrl(me.avatar_url)" alt=""> <strong>{{ me.nickname || me.username }}</strong> · @{{ me.username }} · {{ me.role }} <button @click="authStore.clearAuth()">{{ t('退出登录','Sign out') }}</button></p>
      <button v-if="!loaded" :disabled="busy" @click="load">{{ busy ? t('正在读取申请资料…','Loading application details…') : t('重新加载','Reload') }}</button>
      <template v-if="loaded">
        <section v-if="apps.length"><h2>{{ t('我的申请','My applications') }}</h2>
          <div v-for="a in apps" :key="a.id"><p><strong>#{{ a.id }} · {{ a.nickname }}</strong> · {{ statusText(a.status, t) }} · {{ new Date(a.created_at).toLocaleDateString() }}</p>
            <p>{{ (a.category_ids?.length ? a.category_ids : [a.category_id]).map(catName).join(', ') }}</p>
            <p v-if="a.reject_reason">{{ t('拒绝原因','Reason') }} · {{ a.reject_reason }}</p>
            <a v-if="a.status === 'approved' && a.entry_exists !== false" :href="path('posts/base-info/members')">{{ t('查看贡献者墙','View the contributor wall') }}</a>
            <p v-if="a.status === 'approved' && a.entry_exists === false">{{ t('条目已移除，可以重新提交申请。','This entry has been removed. You can submit a new application.') }}</p>
            <template v-if="a.status === 'pending'"><button :disabled="busy || reading" @click="edit(a)">{{ t('修改','Edit') }}</button><button :disabled="busy" @click="withdraw(a)">{{ t('撤回','Withdraw') }}</button></template>
            <button v-if="a.images?.length" @click="detail = detail === a.id ? '' : a.id">{{ detail === a.id ? t('收起图片','Hide attachments') : t('查看图片','View attachments') }} ({{ a.images.length }})</button>
            <div v-if="detail === a.id" class="photos"><a v-for="(img,i) in a.images" :key="i" :href="upUrl(img)" target="_blank" rel="noopener"><img :src="upUrl(img)" :alt="t('附件','Attachment') + ' ' + (i+1)"></a></div>
          </div>
        </section>
        <form @submit.prevent="submit"><fieldset :disabled="busy || reading"><legend>{{ editing ? t('修改申请','Edit application') + ' #' + editing : t('贡献者申请','Contributor application') }}</legend>
          <p>{{ t('选择至少一个贡献项目。已加入的项目会自动忽略。','Choose at least one category. Existing memberships are ignored on submission.') }}</p>
          <label v-for="c in categories" :key="c.id"><input v-model="form.category_ids" :value="c.id" type="checkbox">{{ c.name }} {{ c.emoji }}</label>
          <p>{{ t('昵称和 GitHub ID 来自登录账号。','Your display name and GitHub ID come from your account.') }}</p>
          <label>QQ <input v-model.trim="form.qq" pattern="[0-9]+" inputmode="numeric" :placeholder="t('选填，纯数字','Optional, digits only')"></label>
          <label>{{ t('哔哩哔哩 UID','Bilibili UID') }}<input v-model.trim="form.bilibili_uid" pattern="[0-9]+" inputmode="numeric" :placeholder="t('选填，纯数字','Optional, digits only')"></label>
          <label>{{ t('Minecraft 正版 ID','Minecraft player name') }}<input v-model.trim="form.mc_id" pattern="[A-Za-z0-9_]{3,16}" maxlength="16" :placeholder="t('选填，3 至 16 个字母、数字或下划线','Optional, 3–16 letters, digits or underscores')"></label>
          <label>{{ t('贡献说明（选填）','Contribution description (optional)') }}<textarea v-model="form.description" rows="4"></textarea></label>
          <label>{{ t('上传截图（最多 10 张，自动压缩为 JPEG）','Screenshots (up to 10, compressed to JPEG)') }}<input type="file" accept="image/*" multiple @change="attach"></label>
          <div class="photos">
            <div v-for="(img,i) in retained" :key="'old'+i"><img :src="upUrl(img)" :alt="t('已有附件','Existing attachment')"><button type="button" @click="retained.splice(i,1)">{{ t('移除','Remove') }}</button></div>
            <div v-for="(photo,i) in photos" :key="photo.preview"><img :src="photo.preview" :alt="photo.file.name"><button type="button" @click="removePhoto(i)">{{ t('移除','Remove') }}</button></div>
          </div>
          <button class="primary" type="submit">{{ editing ? t('更新申请','Update application') : t('提交申请','Submit application') }}</button>
          <button v-if="editing" type="button" @click="clearForm">{{ t('取消编辑','Cancel edit') }}</button>
        </fieldset></form>
      </template>
    </template>
    <p v-if="error" class="error" role="alert">{{ error }}</p><p v-if="notice" class="notice" role="status">{{ notice }}</p>
  </div>
</template>
<style scoped lang="scss" src="../account.scss"></style>
