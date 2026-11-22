import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { resolve, join, relative, dirname } from 'node:path'

const dist = resolve('docs/.vitepress/dist')
const failures = new Set<string>()
const targets = new Map<string, Set<string>>()
const anchors = new Map<string, Set<string>>()

function inspect(dir: string) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== 'assets') inspect(file)
    } else if (entry.name.endsWith('.html')) {
      const html = readFileSync(file, 'utf8')
      anchors.set(file, new Set(Array.from(html.matchAll(/\sid="([^"]+)"/g), m => m[1])))
      targets.set(file, new Set(Array.from(html.matchAll(/<a\b[^>]*?\bhref="([^"]*)"/g), m => m[1])))
    }
  }
}
inspect(dist)
let checked = 0
for (const [file, links] of targets) {
  const page = relative(dist, file).replaceAll('\\', '/')
  if (page !== '404.html') {
    const counterpart = page.startsWith('en/') ? page.slice(3) : 'en/' + page
    const route = '/' + counterpart.replace(/(^|\/)index\.html$/, '$1')
    if (!links.has(route)) failures.add(page + ' → 缺少对应语言入口 ' + route)
  }
  for (const link of links) {
    if (!link || /^(?:[a-z][\w+.-]*:|\/\/)/i.test(link)) continue
    const [path, hash] = link.split('#', 2)
    const pathname = decodeURIComponent(path.split('?')[0])
    const raw = !pathname ? file : pathname.startsWith('/') ? resolve(dist, '.' + pathname) : resolve(dirname(file), pathname)
    const target = [raw, raw + '.html', join(raw, 'index.html')].find(p => anchors.has(p))
    if (!target) {
      if (!existsSync(raw) || !statSync(raw).isFile()) failures.add(relative(dist, file) + ' → ' + link)
    } else if (hash && !anchors.get(target)!.has(decodeURIComponent(hash))) {
      failures.add(relative(dist, file) + ' → ' + link)
    }
    checked++
  }
}
console.log(anchors.size + ' 个 HTML 页面，' + checked + ' 个页内锚点及站内目标')
if (failures.size) {
  console.error([...failures].slice(0, 40).join('\n'))
  throw Error('存在 ' + failures.size + ' 个无效目标')
}
