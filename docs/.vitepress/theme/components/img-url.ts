import { authStore } from '../auth-store'

export function upUrl(raw: string) {
  if (!raw) return ''
  try {
    const url = new URL(raw, authStore.apiBase + '/')
    if (!['http:', 'https:'].includes(url.protocol)) return ''
    if (typeof location !== 'undefined' && location.protocol === 'https:' && url.protocol === 'http:') url.protocol = 'https:'
    return url.href
  } catch { return '' }
}
