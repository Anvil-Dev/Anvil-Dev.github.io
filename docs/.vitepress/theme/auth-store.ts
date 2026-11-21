import { reactive, readonly } from 'vue'

declare global {
  interface Window { __ANVIL_API_BASE__?: string }
}

export interface UserInfo {
  id: string
  username: string
  nickname?: string
  avatar_url?: string
  bio?: string
  role: string
  email?: string
  email_verified?: boolean
}
export const TOKEN_KEY = 'anvil_website_token'
export const DEFAULT_API_BASE = 'https://api.anvilcraft.dev'

function apiBase() {
  return ((typeof window !== 'undefined' && window.__ANVIL_API_BASE__) ||
    import.meta.env.VITE_ANVIL_API_BASE || DEFAULT_API_BASE).replace(/\/+$/, '')
}
function apiURL(path: string) {
  return apiBase() + '/api/v1' + path
}
function storedToken() {
  try { return window.localStorage.getItem(TOKEN_KEY) ?? '' } catch { return '' }
}

const state = reactive({ token: '', user: null as UserInfo | null, ready: false, checking: false, unavailable: false })
let revision = 0
let pending: Promise<void> | undefined
let initialized = false

function setSession(token: string, user: UserInfo | null, persist: boolean) {
  revision++
  pending = undefined
  Object.assign(state, { token, user, ready: !token || !!user, checking: false, unavailable: false })
  if (persist) {
    try {
      if (token) localStorage.setItem(TOKEN_KEY, token)
      else localStorage.removeItem(TOKEN_KEY)
    } catch { /* The in-memory session remains usable when storage is disabled. */ }
  }
}

function clearAuth() { initialized = true; setSession('', null, true) }
function setAuth(token: string, user: UserInfo) {
  if (!token || !user?.id || !user.username) throw new Error('Invalid login response')
  initialized = true
  setSession(token, user, true)
}

async function restore(force = false): Promise<void> {
  if (typeof window === 'undefined') return
  if (!initialized) {
    initialized = true
    setSession(storedToken(), null, false)
  }
  if (!state.token || (state.user && !force)) return
  if (pending) return pending
  const active = revision
  state.checking = true
  pending = (async () => {
    try {
      const response = await fetch(apiURL('/auth/me'), { headers: { Authorization: 'Bearer ' + state.token } })
      if (active !== revision) return
      if (response.status === 401 || response.status === 403) return clearAuth()
      if (!response.ok) throw new Error(String(response.status))
      const { user } = await response.json()
      if (active !== revision) return
      if (!user?.id || !user.username) throw new Error('Invalid account')
      state.user = user
      state.unavailable = false
    } catch {
      if (active === revision) state.unavailable = true
    } finally {
      if (active === revision) { pending = undefined; state.ready = true; state.checking = false }
    }
  })()
  return pending
}

// The navigation owns these listeners. Multiple responsive menus share one session.
export function listenForSessionChanges() {
  function onStorage(event: StorageEvent) {
    if ((event.key === TOKEN_KEY || event.key === null) && storedToken() !== state.token) {
      setSession(storedToken(), null, false)
      void restore()
    }
  }
  function online() { void restore() }
  window.addEventListener('storage', onStorage)
  window.addEventListener('online', online)
  void restore()
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener('online', online)
  }
}

export const authStore = {
  state: readonly(state),
  get apiBase() { return apiBase() },
  apiURL,
  get token() { return state.token },
  get user() { return state.user },
  get isLoggedIn() { return !!state.token && !!state.user },
  restore, setAuth, clearAuth,
  authedFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> | null {
    if (!state.token) return null
    const url = new URL(input instanceof Request ? input.url : String(input), window.location.href)
    if (url.origin !== new URL(apiBase(), window.location.href).origin) throw new Error('Invalid account API origin')
    const headers = new Headers(input instanceof Request ? input.headers : undefined)
    new Headers(init.headers).forEach((value, key) => headers.set(key, value))
    if (!headers.has('Content-Type') && !(init.body instanceof FormData)) headers.set('Content-Type', 'application/json')
    headers.set('Authorization', 'Bearer ' + state.token)
    return fetch(input, { ...init, headers })
  },
  async fetchUserInfo(): Promise<UserInfo | null> {
    await restore(true)
    return state.unavailable ? null : state.user
  },
}

export async function request<T>(path: string, init: RequestInit = {}, authenticated = true): Promise<T> {
  const headers = new Headers(init.headers)
  const active = revision
  if (authenticated) {
    if (!state.token) throw new Error('HTTP 401')
    headers.set('Authorization', 'Bearer ' + state.token)
  }
  if (typeof init.body === 'string') headers.set('Content-Type', 'application/json')
  const response = await fetch(apiURL(path), { ...init, headers })
  if (authenticated && active !== revision) throw new DOMException('Session changed', 'AbortError')
  const data = await response.json().catch(() => ({}))
  if (authenticated && active !== revision) throw new DOMException('Session changed', 'AbortError')
  if (!response.ok) {
    if (authenticated && response.status === 401) clearAuth()
    throw new Error(typeof data.error === 'string' ? data.error : 'HTTP ' + response.status)
  }
  return data as T
}
