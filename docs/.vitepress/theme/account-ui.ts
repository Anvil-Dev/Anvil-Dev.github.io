import { computed, onBeforeUnmount, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { request } from './auth-store'

export function useAccountUI() {
  const { page, site } = useData()
  const english = computed(() => page.value.relativePath.startsWith('en/'))
  const t = (zh: string, en: string) => english.value ? en : zh
  const path = (name: string) => withBase((english.value ? '/en/' : '/') + name + (site.value.cleanUrls ? '' : '.html'))
  const loginHref = (dest: string) => path('login') + '?redirect=' + encodeURIComponent(dest)
  function destination(raw?: string | null) {
    const fallback = path('posts/base-info/profile')
    if (!raw?.startsWith('/') || raw.startsWith('//') || raw.includes('\\')) return fallback
    try {
      const internalOrigin = 'https://internal.invalid'
      const url = new URL(raw, internalOrigin)
      if (url.origin !== internalOrigin || !url.pathname.startsWith(site.value.base)) return fallback
      if (/\/(?:login|oauth-callback)(?:\.html)?\/?$/.test(url.pathname)) return fallback
      return url.pathname + url.search + url.hash
    } catch { return fallback }
  }
  return { t, path, loginHref, destination }
}

export function usePageRequests() {
  let controller = new AbortController()
  const busy = ref(false)
  const error = ref('')
  const notice = ref('')
  function cancel() {
    controller.abort()
    controller = new AbortController()
    busy.value = false
    error.value = notice.value = ''
  }
  onBeforeUnmount(cancel)
  function get<T>(path: string, init?: RequestInit, authenticated = true) {
    return request<T>(path, { ...init, signal: controller.signal }, authenticated)
  }
  async function run(action: () => Promise<void>, failure: string) {
    if (busy.value) return
    const signal = controller.signal
    busy.value = true
    error.value = notice.value = ''
    try { await action() } catch (e) {
      if (!signal.aborted && !(e instanceof DOMException && e.name === 'AbortError')) {
        error.value = failure + (e instanceof Error ? ' (' + e.message + ')' : '')
      }
    } finally { if (!signal.aborted) busy.value = false }
  }
  return { get, run, busy, error, notice, cancel, get signal() { return controller.signal } }
}

export interface Application {
  id: string
  nickname: string
  display_id: string
  category_id: string
  category_ids?: string[]
  qq?: string
  bilibili_uid?: string
  mc_id?: string
  description?: string
  images?: string[]
  status: string
  reject_reason?: string
  entry_exists?: boolean
  created_at: string
}

export function statusText(status: string, t: (zh: string, en: string) => string) {
  const states: Record<string, string> = { pending: t('待审核', 'Pending'), approved: t('已通过', 'Approved'),
    rejected: t('已拒绝', 'Rejected'), withdrawn: t('已撤回', 'Withdrawn') }
  return states[status] || status
}

export async function jpeg(file: File, avatar = false): Promise<File> {
  if (!avatar && file.type === 'image/jpeg' && file.size <= 5 * 1024 * 1024) return file
  const image = new Image()
  const url = URL.createObjectURL(file)
  try {
    image.src = url
    await image.decode()
    const canvas = document.createElement('canvas')
    const side = Math.min(image.width, image.height)
    const ratio = Math.min(1, 1600 / Math.max(image.width, image.height))
    canvas.width = avatar ? 256 : Math.max(1, Math.round(image.width * ratio))
    canvas.height = avatar ? 256 : Math.max(1, Math.round(image.height * ratio))
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas unavailable')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    if (avatar) ctx.drawImage(image, (image.width-side)/2, (image.height-side)/2, side, side, 0, 0, 256, 256)
    else ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise<Blob | null>(done => canvas.toBlob(done, 'image/jpeg', 0.85))
    if (!blob) throw new Error('JPEG conversion failed')
    return new File([blob], avatar ? 'avatar.jpg' : file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' })
  } finally { URL.revokeObjectURL(url) }
}

export async function upload(file: File, signal: AbortSignal) {
  const body = new FormData()
  body.append('file', file)
  const { url } = await request<{ url: string }>('/uploads', { method: 'POST', body, signal })
  if (!url) throw new Error('Missing upload URL')
  return url
}
