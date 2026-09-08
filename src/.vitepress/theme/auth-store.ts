// 全局登录状态单例（模块级 reactive，跨 VitePress 页面共享）。
// 官网静态站无后端会话：JWT 存 localStorage，启动时若有 token 则拉 /auth/me 恢复用户。
// 任何组件（导航头像/申请弹层/个人中心）统一经此读写，保证登录态全站一致。

import {reactive, readonly} from 'vue'

export interface UserInfo {
  id: string // 雪花 ID（字符串）
  username: string
  nickname: string
  avatar_url: string
  bio: string
  role: string
}

export const TOKEN_KEY = 'anvil_website_token'

export const DEFAULT_API_BASE = 'https://api.anvilcraft.dev'

function apiBase(): string {
  const b = (window as any).__ANVIL_API_BASE__ as string | undefined
  return (b || DEFAULT_API_BASE).replace(/\/$/, '')
}

function apiURL(p: string): string {
  return apiBase() + '/api/v1' + p
}

// localStorage 读写守卫（SSR/构建期无 localStorage，惰性访问）
function loadToken(): string {
  try {
    return typeof localStorage !== 'undefined' ? localStorage.getItem(TOKEN_KEY) ?? '' : ''
  } catch {
    return ''
  }
}
function saveToken(t: string) {
  try {
    if (typeof localStorage !== 'undefined') {
      if (t) localStorage.setItem(TOKEN_KEY, t)
      else localStorage.removeItem(TOKEN_KEY)
    }
  } catch { /* 忽略 */ }
}

const state = reactive<{
  token: string
  user: UserInfo | null
  ready: boolean
  checking: boolean
}>({
  token: loadToken(),
  user: null,
  ready: false,
  checking: false,
})

let restorePromise: Promise<void> | null = null

/** 从 localStorage 恢复会话（token 存在时拉 /auth/me 验证；网络失败保留 token 待下次）。 */
async function restore(): Promise<void> {
  if (!state.token || state.user || state.checking) {
    state.ready = true
    return
  }
  state.checking = true
  try {
    const r = await fetch(apiURL('/auth/me'), {
      headers: {Authorization: 'Bearer ' + state.token},
    })
    if (r.ok) {
      const j = await r.json()
      state.user = j.user ?? null
    } else if (r.status === 401 || r.status === 403) {
      clearAuth() // token 失效
    }
  } catch {
    /* 网络失败：保留 token，下次进入再试 */
  } finally {
    state.checking = false
    state.ready = true
  }
}

function ensureRestore(): Promise<void> {
  if (!restorePromise) restorePromise = restore()
  return restorePromise
}

function setAuth(t: string, u: UserInfo) {
  state.token = t
  state.user = u
  state.ready = true
  saveToken(t)
}

function clearAuth() {
  state.token = ''
  state.user = null
  state.ready = true
  saveToken('')
}

/** 已登录时带鉴权请求；未登录返回 null。 */
function authedFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> | null {
  if (!state.token) return null
  return fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
      Authorization: 'Bearer ' + state.token,
    },
  })
}

export const authStore = {
  state: readonly(state),
  get apiBase() {
    return apiBase()
  },
  get apiURL() {
    return apiURL
  },
  get token(): string {
    return state.token
  },
  get user(): UserInfo | null {
    return state.user
  },
  get isLoggedIn(): boolean {
    return !!state.token && !!state.user
  },
  restore: ensureRestore,
  setAuth,
  clearAuth,
  authedFetch,
  fetchUserInfo: async function (): Promise<UserInfo | null> {
    const r = await fetch(apiURL('/auth/me'), {
      headers: {Authorization: 'Bearer ' + state.token},
    })
    if (!r.ok) return null
    const j = await r.json()
    return j.user ?? null
  },
}
