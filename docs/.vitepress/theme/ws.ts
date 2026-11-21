// 官网匿名 WebSocket 事件订阅：贡献者条目变更时通知页面刷新。
// 需后端 ws.allow_anonymous 开启；连接失败由调用方的定时轮询兜底。
// 注意：模块顶层不得触碰 window（VitePress SSR 构建）。

type Listener = () => void

const EVENTS = ['contributor.created', 'contributor.updated', 'contributor.deleted']

const listeners = new Set<Listener>()
let conn: WebSocket | null = null
let wsBase = ''
let reconnectTimer: number | undefined
let reconnectDelay = 2000
const maxReconnectDelay = 30000

// 应用层心跳：每 60s 发一次 ping；连续 5 次未收到 pong 判定假死并主动重连
const PING_INTERVAL = 60_000
const MAX_MISSED_PONGS = 5
let pingTimer: number | undefined
let missedPongs = 0

function buildURL(base: string): string {
  return `${base.replace(/\/$/, '').replace(/^http/, 'ws')}/api/v1/ws`
}

function stopPing() {
  if (pingTimer !== undefined) {
    clearInterval(pingTimer)
    pingTimer = undefined
  }
  missedPongs = 0
}

function startPing() {
  stopPing()
  pingTimer = window.setInterval(() => {
    if (!conn || conn.readyState !== WebSocket.OPEN) return
    if (missedPongs >= MAX_MISSED_PONGS) {
      // 连续 5 次 ping 未收到 pong：连接假死，断开并立即重连
      closeConn()
      reconnectDelay = 2000
      connect()
      return
    }
    missedPongs++
    conn.send(JSON.stringify({ type: 'ping' }))
  }, PING_INTERVAL)
}

function closeConn() {
  stopPing()
  if (reconnectTimer !== undefined) {
    clearTimeout(reconnectTimer)
    reconnectTimer = undefined
  }
  if (conn) {
    conn.onopen = conn.onmessage = conn.onclose = conn.onerror = null
    try {
      conn.close()
    } catch { /* ignore */ }
    conn = null
  }
}

function scheduleReconnect() {
  if (listeners.size === 0 || reconnectTimer !== undefined) return
  reconnectTimer = window.setTimeout(() => {
    reconnectTimer = undefined
    reconnectDelay = Math.min(reconnectDelay * 2, maxReconnectDelay)
    connect()
  }, reconnectDelay)
}

function connect() {
  if (typeof window === 'undefined' || typeof WebSocket === 'undefined' || conn || !wsBase || listeners.size === 0) return
  let ws: WebSocket
  try {
    ws = new WebSocket(buildURL(wsBase))
  } catch {
    scheduleReconnect()
    return
  }
  conn = ws
  ws.onopen = () => {
    reconnectDelay = 2000
    ws.send(JSON.stringify({ type: 'subscribe', events: EVENTS }))
    startPing()
  }
  ws.onmessage = (ev) => {
    try {
      const msg = JSON.parse(ev.data as string)
      if (msg.type === 'pong') {
        missedPongs = 0
        return
      }
      if (msg.type !== 'event') return
      for (const cb of listeners) {
        try {
          cb()
        } catch (e) {
          console.error('[ws] 事件回调异常', e)
        }
      }
    } catch { /* 非 JSON 帧忽略 */ }
  }
  ws.onclose = () => {
    if (conn !== ws) return
    conn = null
    stopPing()
    scheduleReconnect()
  }
  ws.onerror = () => { /* 交由 onclose 处理重连 */ }
}

/**
 * 订阅贡献者变更事件；返回取消函数。
 * apiBase 形如 https://api.anvilcraft.dev（与页面数据接口一致）。
 */
export function onContributorChange(apiBase: string, cb: Listener): () => void {
  if (wsBase && wsBase !== apiBase) closeConn()
  wsBase = apiBase
  listeners.add(cb)
  connect()
  return () => {
    listeners.delete(cb)
    if (listeners.size === 0) {
      closeConn()
      reconnectDelay = 2000
    }
  }
}
