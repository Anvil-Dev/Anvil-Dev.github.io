import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

const docsRoot = fileURLToPath(new URL('../', import.meta.url))
const names: Record<string, string> = {
  'getting-started': '快速开始', setup: '快速开始', quickstart: '快速开始',
  api: '公开 API', reference: 'API 参考', packs: '数据包与资源包', datapack: '数据包', datapacks: '数据包',
  resourcepack: '资源包', resources: '资源包', events: '事件', recipes: '配方',
}

function title(file: string, fallback: string) {
  if (!existsSync(file)) return fallback
  const markdown = readFileSync(file, 'utf8')
  const metadata = /^---\r?\n([\s\S]*?)\r?\n---/.exec(markdown)?.[1]
  return metadata?.match(/^sidebarTitle:\s*([^\r\n]+)/m)?.[1].trim().replace(/^['"]|['"]$/g, '')
    || markdown.match(/^#\s+(.+)$/m)?.[1].trim().replaceAll('`', '')
    || fallback
}

function children(directory: string, route: string): DefaultTheme.SidebarItem[] {
  if (!existsSync(directory)) return []
  const entries = readdirSync(directory, { withFileTypes: true })
    .filter(item => !item.name.startsWith('.') && item.name !== 'index.md')
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN', { numeric: true }))
  const items: DefaultTheme.SidebarItem[] = []
  for (const entry of entries) {
    const fullPath = join(directory, entry.name)
    if (entry.isDirectory()) {
      const groupRoute = route + entry.name + '/'
      const index = join(fullPath, 'index.md')
      // The API index already links every package. Repeating those links would
      // render hundreds of hidden sidebar entries in every HTML document.
      if (entry.name === 'api' && existsSync(index)) {
        items.push({ text: title(index, names.api), link: groupRoute })
        continue
      }
      const pages = children(fullPath, groupRoute)
      if (pages.length || existsSync(index)) {
        items.push({
          text: title(index, names[entry.name] ?? entry.name),
          link: existsSync(index) ? groupRoute : undefined,
          collapsed: true,
          items: pages,
        })
      }
    } else if (entry.name.endsWith('.md')) {
      const slug = basename(entry.name, '.md')
      items.push({ text: title(fullPath, slug), link: route + slug })
    }
  }
  return items
}

export function branchSidebar(mod: string, version: string) {
  const route = `/${mod}/${version}/`
  const position = (item: DefaultTheme.SidebarItem) => {
    if (item.link === route + 'packs/') return -1
    if (item.link === route + 'api/') return 1
    return 0
  }
  const sections = children(join(docsRoot, mod, version), route)
  return [
    { text: `${mod === 'anvilcraft' ? 'AnvilCraft' : 'Ageratum'} · ${version}`, link: route },
    ...sections.sort((a, b) => position(a) - position(b)),
  ]
}
