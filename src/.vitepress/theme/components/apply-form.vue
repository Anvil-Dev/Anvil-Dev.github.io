<script lang="ts" setup>
// 贡献者申请表单：登录（GitHub OAuth / Device Flow）后提交；多图上传并前端压缩为 JPG。
import {onMounted, onUnmounted, ref} from 'vue'
import {upUrl} from './img-url'
import {authStore} from '../auth-store'

interface Category {id: string; name: string; emoji: string}
interface UserInfo {
  id: string; username: string; nickname: string; avatar_url: string; bio: string; role: string
}

// 官网静态站不引入 Arco，这里使用原生 HTML 表单元素（样式沿用页面样式）。
const apiBase = ref('')
const enabled = ref(false)

const loggedUser = ref<UserInfo | null>(null)
const token = ref('')
const categories = ref<Category[]>([])

const form = ref({
  category_ids: [] as string[],
  nickname: '',
  id: '',
  qq: '',
  bilibili_uid: '',
  mc_id: '',
  description: '',
})
const imageFiles = ref<File[]>([])
const imagePreviews = ref<string[]>([])
const submitting = ref(false)
const errorMsg = ref('')
const device = ref<{device_code: string; user_code: string; verification_uri: string} | null>(null)
const deviceExpired = ref(false)
const pollTimer = ref<number | null>(null)
let pollDeadline = 0
const POLL_TIMEOUT_MS = 15 * 60 * 1000

// 我的申请（5.2：待审核可修改/撤回）
interface MyApp {
  id: string
  category_id: string
  category_ids?: string[]
  nickname: string
  display_id: string
  qq: string
  bilibili_uid: string
  mc_id: string
  description: string
  images?: string[]
  status: string
  reject_reason?: string
  created_at: string
}
const myApps = ref<MyApp[]>([])
const editingAppId = ref<number | null>(null) // 正在编辑的申请 id（null=新申请）
const noticeMsg = ref('')
// 编辑模式保留的既有附件 URL（避免编辑时误清空原图）
const existingImages = ref<string[]>([])
// 「我的申请」行内展开查看附件的申请 id（null=收起）
const detailImagesId = ref<number | null>(null)

function toggleDetail(id: string) {
  detailImagesId.value = detailImagesId.value === id ? null : id
}

const TOKEN_KEY = 'anvil_website_token'
const MAX_IMAGES = 10
const MAX_SIZE = 5 * 1024 * 1024

function apiURL(p: string) {
  return apiBase.value.replace(/\/$/, '') + '/api/v1' + p
}

function setAuth(t: string, u: UserInfo) {
  token.value = t
  loggedUser.value = u
  authStore.setAuth(t, u)
  // 昵称/ID 由账号确定，仅作展示；无绑定条目时也预填账号名
  form.value.nickname = u.nickname || u.username || ''
  form.value.id = u.username || ''
  loadMyApps().catch(() => {})
  startMyAppsPolling()
}

// 登录后每 30s 静默刷新「我的申请」状态（审核通过/拒绝自动可见）
let myAppsPollTimer: number | null = null
function startMyAppsPolling() {
  stopMyAppsPolling()
  myAppsPollTimer = window.setInterval(() => {
    if (!token.value) return
    loadMyApps().catch(() => {})
  }, 30 * 1000)
}
function stopMyAppsPolling() {
  if (myAppsPollTimer) {
    window.clearInterval(myAppsPollTimer)
    myAppsPollTimer = null
  }
}

function logout() {
  token.value = ''
  loggedUser.value = null
  authStore.clearAuth()
  myApps.value = []
  editingAppId.value = null
  stopMyAppsPolling()
}

async function beginLogin() {
  errorMsg.value = ''
  deviceExpired.value = false
  try {
    // Device Flow 恒可用（GitHub 设备流仅需 client_id，后端已强制该端点走设备流；POST）
    const r = await fetch(apiURL('/auth/device/start'), {method: 'POST'})
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    const j = await r.json()
    if (j.device_flow) {
      device.value = j
      pollDeadline = Date.now() + POLL_TIMEOUT_MS
      startPolling(j.device_code)
      return
    }
  } catch (e: any) {
    // 官网不使用授权码模式（回调域名指向控制台），失败直接提示
    errorMsg.value = '无法发起登录：' + (e?.message ?? '请稍后重试')
    return
  }
  errorMsg.value = '无法发起登录：后端未返回设备码'
}

async function pollOnce(deviceCode: string) {
  if (Date.now() > pollDeadline) {
    deviceExpired.value = true
    return false
  }
  try {
    const r = await fetch(apiURL('/auth/device/poll'), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({device_code: deviceCode}),
    })
    const j = await r.json()
    if (j.token) {
      setAuth(j.token, j.user)
      device.value = null
      stopDevicePolling()
      await loadMyApps()
      await prefillFromEntry(j.user.id)
      return true
    }
  } catch {
    /* 忽略 */
  }
  return false
}

async function startPolling(deviceCode: string) {
  stopDevicePolling()
  const tick = async () => {
    const done = await pollOnce(deviceCode)
    if (!done && !deviceExpired.value) pollTimer.value = window.setTimeout(tick, 5000)
  }
  tick()
}

// 停止轮询并复位设备码状态
function stopDevicePolling() {
  if (pollTimer.value) {
    window.clearTimeout(pollTimer.value)
    pollTimer.value = null
  }
}

// 用户主动取消等待
function cancelDevicePolling() {
  stopDevicePolling()
  device.value = null
  deviceExpired.value = false
  pollDeadline = 0
}

onUnmounted(() => {
  stopDevicePolling()
  stopMyAppsPolling()
})

// ---------- 图片压缩为 JPG ----------
async function fileToJpeg(file: File): Promise<File> {
  if (file.type === 'image/jpeg' && file.size <= MAX_SIZE) return file
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      URL.revokeObjectURL(url)
      const MAX_EDGE = 1600
      let {width, height} = img
      if (width > MAX_EDGE || height > MAX_EDGE) {
        const ratio = Math.min(MAX_EDGE / width, MAX_EDGE / height)
        width = Math.round(width * ratio)
        height = Math.round(height * ratio)
      }
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')!
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, width, height)
      ctx.drawImage(img, 0, 0, width, height)
      canvas.toBlob((blob) => {
        if (!blob) return reject(new Error('图片压缩失败'))
        const f = new File([blob], file.name.replace(/\.[^.]+$/, '') + '.jpg', {type: 'image/jpeg'})
        resolve(f)
      }, 'image/jpeg', 0.85)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('图片读取失败'))
    }
    img.src = url
  })
}

async function onPickFiles(list: FileList | null) {
  if (!list) return
  errorMsg.value = ''
  for (const f of Array.from(list)) {
    if (imageFiles.value.length >= MAX_IMAGES) {
      errorMsg.value = `最多上传 ${MAX_IMAGES} 张图片`
      break
    }
    try {
      const jpg = await fileToJpeg(f)
      imageFiles.value.push(jpg)
      imagePreviews.value.push(URL.createObjectURL(jpg))
    } catch (e: any) {
      errorMsg.value = e?.message ?? '图片处理失败'
    }
  }
}

function removeImage(i: number) {
  imageFiles.value.splice(i, 1)
  imagePreviews.value.splice(i, 1)
}

// 拉取我的申请列表
async function loadMyApps() {
  if (!token.value) return
  try {
    const r = await fetch(apiURL('/applications/mine'), {headers: {Authorization: `Bearer ${token.value}`}})
    if (r.ok) {
      const j = await r.json()
      myApps.value = j.applications ?? []
    }
  } catch {
    /* 忽略 */
  }
}

// 编辑待审核申请（回填表单并切到编辑模式；保留既有附件图）
function editApp(a: MyApp) {
  editingAppId.value = a.id
  form.value = {
    category_ids: a.category_ids && a.category_ids.length ? [...a.category_ids] : [a.category_id],
    nickname: a.nickname,
    id: a.display_id,
    qq: a.qq,
    bilibili_uid: a.bilibili_uid,
    mc_id: a.mc_id,
    description: a.description,
  }
  imageFiles.value = []
  imagePreviews.value.forEach((p) => URL.revokeObjectURL(p))
  imagePreviews.value = []
  existingImages.value = [...(a.images ?? [])]
  noticeMsg.value = ''
  window.scrollTo({top: 0, behavior: 'smooth'})
}

// 移除既有附件图（编辑模式）
function removeExistingImage(i: number) {
  existingImages.value.splice(i, 1)
}

// 撤回待审核申请
async function withdrawApp(a: MyApp) {
  if (!confirm(`确定撤回申请「${a.nickname}」吗？`)) return
  try {
    const r = await fetch(apiURL(`/applications/${a.id}/withdraw`), {
      method: 'POST', headers: {Authorization: `Bearer ${token.value}`},
    })
    if (r.ok) {
      noticeMsg.value = '已撤回申请'
      await loadMyApps()
    } else {
      const j = await r.json()
      errorMsg.value = j.error ?? '撤回失败'
    }
  } catch {
    errorMsg.value = '撤回失败'
  }
}

function statusLabel(s: string): string {
  return {pending: '待审核', approved: '已通过', rejected: '已拒绝', withdrawn: '已撤回'}[s] ?? s
}

function catName(id: string): string {
  const c = categories.value.find((x) => x.id === id)
  return c ? `${c.name} ${c.emoji}` : `#${id}`
}

function cancelEdit() {
  editingAppId.value = null
  form.value = {category_ids: [], nickname: '', id: '', qq: '', bilibili_uid: '', mc_id: '', description: ''}
  imageFiles.value = []
  imagePreviews.value.forEach((p) => URL.revokeObjectURL(p))
  imagePreviews.value = []
  existingImages.value = []
  errorMsg.value = ''
}

// 多选贡献项目切换
function toggleCategory(id: string, on: boolean) {
  const ids = form.value.category_ids
  if (on) {
    if (!ids.includes(id)) ids.push(id)
  } else {
    const i = ids.indexOf(id)
    if (i >= 0) ids.splice(i, 1)
  }
}

// ---------- 提交 ----------
async function submit() {
  errorMsg.value = ''
  if (!token.value || !loggedUser.value) {
    errorMsg.value = '请先登录'
    return
  }
  if (!form.value.category_ids.length) {
    errorMsg.value = '请至少选择一个贡献项目'
    return
  }
  submitting.value = true
  try {
    // 先逐张上传图片
    const uploaded: string[] = []
    for (const f of imageFiles.value) {
      const fd = new FormData()
      fd.append('file', f)
      let ok = false
      try {
        const r = await fetch(apiURL('/uploads'), {method: 'POST', headers: {Authorization: `Bearer ${token.value}`}, body: fd})
        const j = await r.json()
        if (r.ok && j.url) {
          uploaded.push(j.url)
          ok = true
        } else {
          errorMsg.value = `图片上传失败：${j.error ?? `HTTP ${r.status}`}`
        }
      } catch {
        errorMsg.value = '图片上传失败：无法连接服务器，请重试'
      }
      if (!ok) {
        // 任务书 5.1：附件必须随申请提交；上传失败则中止，避免图片静默丢失
        submitting.value = false
        return
      }
    }
    // 附件 = 保留的既有图 + 新上传图（总数不超 10）
    if (existingImages.value.length + uploaded.length > MAX_IMAGES) {
      errorMsg.value = `附件图片最多 ${MAX_IMAGES} 张（含已有图片）`
      submitting.value = false
      return
    }
    const payload = {...form.value, images: [...existingImages.value, ...uploaded]}
    const isEdit = editingAppId.value !== null
    const r = await fetch(isEdit ? apiURL(`/applications/${editingAppId.value}`) : apiURL('/applications'), {
      method: isEdit ? 'PUT' : 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token.value}`},
      body: JSON.stringify(payload),
    })
    const j = await r.json()
    if (!r.ok) {
      errorMsg.value = j.error ?? (isEdit ? '修改失败' : '提交失败')
      return
    }
    alert(isEdit ? '申请已更新，等待管理员审核' : '申请已提交，等待管理员审核')
    editingAppId.value = null
    form.value = {category_ids: [], nickname: '', id: '', qq: '', bilibili_uid: '', mc_id: '', description: ''}
    imageFiles.value = []
    imagePreviews.value.forEach((p) => URL.revokeObjectURL(p))
    imagePreviews.value = []
    existingImages.value = []
    await loadMyApps()
  } catch (e: any) {
    errorMsg.value = e?.message ?? (editingAppId.value ? '修改失败' : '提交失败')
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  apiBase.value = ((window as any).__ANVIL_API_BASE__ as string | undefined || 'https://api.anvilcraft.dev').replace(/\/$/, '')
  // 会话恢复：优先全局 authStore（导航/登录页同源）
  await authStore.restore()
  const saved = authStore.token || localStorage.getItem(TOKEN_KEY)
  if (saved) {
    token.value = saved
    // 尝试拉取 me 校验
    try {
      const r = await fetch(apiURL('/auth/me'), {headers: {Authorization: `Bearer ${saved}`}})
      if (r.ok) {
        const j = await r.json()
        loggedUser.value = j.user
        await loadMyApps()
        await prefillFromEntry(j.user.id)
        startMyAppsPolling()
      } else {
        logout()
      }
    } catch {
      /* 离线忽略 */
    }
  }
  try {
    const r = await fetch(apiURL('/categories'))
    if (r.ok) {
      const j = await r.json()
      categories.value = j.categories ?? []
      enabled.value = true
    }
  } catch {
    errorMsg.value = '无法连接后端'
  }
})

// 5.2：若用户已绑定贡献者条目且无待审核申请，再次申请时基于最新条目预填表单
async function prefillFromEntry(userId: string) {
  // 有待审核申请时不预填（应通过「我的申请」编辑）
  if (myApps.value.some((a) => a.status === 'pending')) return
  try {
    const r = await fetch(apiURL(`/contributors?user_id=${userId}`), {
      headers: {Authorization: `Bearer ${token.value}`},
    })
    if (!r.ok) return
    const j = await r.json()
    const list: any[] = j.entries ?? []
    // 无论有无条目，昵称/ID 都按登录账号展示
    if (loggedUser.value) {
      form.value.nickname = loggedUser.value.nickname || loggedUser.value.username || ''
      form.value.id = loggedUser.value.username || ''
    }
    if (!list.length) return
    // 取最近更新的条目（按 id desc 由后端排序保证近似）
    const e = list[list.length - 1]
    // 分类预填：已有条目所属项目默认勾上（后端提交时自动过滤已属）
    const owned = e.category_ids ?? []
    if (owned.length) {
      form.value.category_ids = owned.filter((id: string) =>
        categories.value.some((c) => c.id === id),
      )
    }
    // 资料预填（昵称/ID 以登录账号为准，条目资料仅作 QQ 等参考）
    if (loggedUser.value) {
      form.value.nickname = loggedUser.value.nickname || loggedUser.value.username || ''
      form.value.id = loggedUser.value.username || ''
    }
    form.value.qq = e.qq ?? ''
    form.value.bilibili_uid = e.bilibili_uid ?? ''
    form.value.mc_id = e.mc_id ?? ''
    form.value.description = e.description ?? ''
  } catch {
    /* 预填失败不阻塞 */
  }
}
</script>

<template>
  <div class="apply-page">
    <p v-if="!enabled && errorMsg" class="hint">{{ errorMsg }}</p>

    <template v-if="enabled">
      <!-- 登录区 -->
      <section v-if="!loggedUser" class="panel">
        <h3>申请成为贡献者</h3>
        <p class="hint">登录后即可提交申请（GitHub 授权）。</p>
        <a class="btn primary" href="/login?redirect=/posts/base-info/apply">使用 GitHub 登录</a>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      </section>

      <section v-else class="panel">
        <div class="user-bar">
          <img v-if="loggedUser.avatar_url" :src="upUrl(loggedUser.avatar_url)" class="avatar" alt="头像" />
          <span>{{ loggedUser.nickname || loggedUser.username }}（{{ loggedUser.role }}）</span>
          <button class="btn" @click="logout">退出</button>
        </div>

        <!-- 我的申请（待审核可修改/撤回） -->
        <div v-if="myApps.length" class="my-apps">
          <h4>我的申请</h4>
          <table class="app-table">
            <thead><tr><th>项目</th><th>昵称</th><th>状态</th><th>时间</th><th>操作</th></tr></thead>
            <tbody>
              <tr v-for="a in myApps" :key="a.id">
                <td>{{ catName(a.category_id) }}</td>
                <td>{{ a.nickname }}</td>
                <td>
                  <span class="status" :class="a.status">{{ statusLabel(a.status) }}</span>
                  <div v-if="a.status === 'rejected' && a.reject_reason" class="reject">原因：{{ a.reject_reason }}</div>
                  <a v-if="a.status === 'approved'" class="approved-link" href="./contributors.html" target="_blank" rel="noopener">已收录到贡献者墙 →</a>
                </td>
                <td class="time">{{ new Date(a.created_at).toLocaleDateString() }}</td>
                <td>
                  <button v-if="a.status === 'pending'" class="btn mini" @click="editApp(a)">修改</button>
                  <button v-if="a.status === 'pending'" class="btn mini danger" @click="withdrawApp(a)">撤回</button>
                  <button v-if="a.images?.length" class="btn mini" @click="toggleDetail(a.id)">
                    {{ detailImagesId === a.id ? '收起图片' : `图片(${a.images.length})` }}
                  </button>
                </td>
              </tr>
              <tr v-if="detailImagesId === a.id" class="detail-row">
                <td colspan="5">
                  <div class="detail-imgs">
                    <a v-for="(u, i) in (a.images ?? [])" :key="i" :href="upUrl(u)" target="_blank" rel="noopener">
                      <img :src="upUrl(u)" alt="附件图" loading="lazy" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <form class="apply-form" @submit.prevent="submit">
          <h4 v-if="editingAppId !== null">修改申请（#{{ editingAppId }}）</h4>
          <p v-else-if="noticeMsg" class="ok">{{ noticeMsg }}</p>
          <div class="field">
            <span>贡献项目（可多选，必选 ≥1；已属项目已勾上，重复会自动忽略）</span>
            <div class="cat-checks">
              <label v-for="c in categories" :key="c.id" class="cat-check">
                <input
                    type="checkbox"
                    :value="c.id"
                    :checked="form.category_ids.includes(c.id)"
                    @change="toggleCategory(c.id, ($event.target as HTMLInputElement).checked)"
                />
                {{ c.name }} {{ c.emoji }}
              </label>
            </div>
          </div>
          <div class="field readonly">
            <span>昵称（由登录账号确定）</span>
            <div class="ro">{{ loggedUser?.nickname || loggedUser?.username }}</div>
          </div>
          <div class="field readonly">
            <span>ID（GitHub 用户名，由登录账号确定）</span>
            <div class="ro">@{{ loggedUser?.username }}</div>
          </div>
          <label class="field">QQ<input v-model="form.qq" placeholder="选填" /></label>
          <label class="field">B站UID<input v-model="form.bilibili_uid" placeholder="选填" /></label>
          <label class="field">Minecraft 正版 ID<input v-model="form.mc_id" placeholder="选填" /></label>
          <label class="field">文字说明<textarea v-model="form.description" rows="3" placeholder="选填" /></label>

          <div class="field">
            <span>截图/图片（最多 {{ MAX_IMAGES }} 张，自动压缩为 JPG）</span>
            <div v-if="existingImages.length" class="imgs">
              <div v-for="(u, i) in existingImages" :key="'e' + i" class="img-item">
                <img :src="upUrl(u)" alt="已有图片" />
                <button type="button" class="remove" @click="removeExistingImage(i)">×</button>
              </div>
            </div>
            <input type="file" accept="image/*" multiple @change="(e: Event) => onPickFiles((e.target as HTMLInputElement).files)" />
            <div class="imgs">
              <div v-for="(p, i) in imagePreviews" :key="i" class="img-item">
                <img :src="p" alt="预览" />
                <button type="button" class="remove" @click="removeImage(i)">×</button>
              </div>
            </div>
          </div>

          <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
          <div class="form-actions">
            <button type="submit" class="btn primary" :disabled="submitting">
              {{ submitting ? '提交中…' : editingAppId !== null ? '更新申请' : '提交申请' }}
            </button>
            <button v-if="editingAppId !== null" type="button" class="btn" @click="cancelEdit">取消编辑</button>
          </div>
        </form>
      </section>
    </template>
  </div>
</template>

<style scoped>
.panel {
  max-width: 520px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid rgba(128, 128, 128, 0.25);
  border-radius: 12px;
  background: rgba(128, 128, 128, 0.04);
}
.hint {
  color: #888;
  font-size: 13px;
}
.code {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #c62828;
}
.btn {
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
.btn.primary {
  background: #1f6feb;
  border-color: #1f6feb;
  color: #fff;
  font-weight: 600;
}
.user-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.apply-form .field {
  display: block;
  margin: 10px 0;
  font-size: 14px;
}
.cat-checks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
}
.cat-check {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  box-sizing: border-box;
  transition: all 0.15s;
}
.cat-check:hover {
  border-color: #1f6feb;
}
.cat-check input {
  width: auto;
  margin: 0;
  accent-color: #1f6feb;
}
.field.readonly .ro {
  margin-top: 4px;
  padding: 7px 10px;
  border: 1px dashed #ccc;
  border-radius: 8px;
  background: #f6f8fa;
  color: #444;
  font-weight: 600;
}
.apply-form input,
.apply-form select,
.apply-form textarea {
  width: 100%;
  margin-top: 4px;
  padding: 7px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 14px;
}
.apply-form .cat-check input[type="checkbox"] {
  flex: 0 0 auto;
  width: auto;
  margin: 0;
  padding: 0;
}
.imgs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}
.img-item {
  position: relative;
}
.img-item img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.remove {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  line-height: 16px;
  border-radius: 50%;
  border: none;
  background: #e33;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
}
.error {
  color: #c62828;
  font-size: 13px;
}
.ok {
  color: #2e7d32;
  font-size: 13px;
}
.my-apps {
  margin-bottom: 16px;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  padding-top: 10px;
}
.app-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.app-table th,
.app-table td {
  padding: 6px 6px;
  text-align: left;
  border-bottom: 1px solid rgba(128, 128, 128, 0.15);
}
.status {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  background: #eee;
}
.status.pending { background: #fff3e0; color: #b26a00; }
.status.approved { background: #e8f5e9; color: #2e7d32; }
.status.rejected { background: #fdecea; color: #c62828; }
.status.withdrawn { background: #eee; color: #777; }
.approved-link {
  display: block;
  font-size: 12px;
  color: #2e7d32;
  margin-top: 2px;
}
.reject {
  font-size: 12px;
  color: #c62828;
}
.time {
  color: #888;
  font-size: 12px;
  white-space: nowrap;
}
.btn.mini {
  padding: 3px 10px;
  font-size: 12px;
  margin-right: 4px;
}
.btn.mini.danger {
  border-color: #e33;
  color: #e33;
}
.form-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}
.detail-row td {
  background: rgba(128, 128, 128, 0.05);
}
.detail-imgs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 6px 0;
}
.detail-imgs img {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid rgba(128, 128, 128, 0.3);
}
</style>
