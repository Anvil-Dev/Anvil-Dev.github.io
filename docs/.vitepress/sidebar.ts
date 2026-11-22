import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

const docsRoot = fileURLToPath(new URL('../', import.meta.url))
const names: Record<string, string> = {
  'getting-started': '快速开始', setup: '快速开始', quickstart: '快速开始',
  reference: 'API 参考', packs: '数据包与资源包', datapack: '数据包', datapacks: '数据包',
  resourcepack: '资源包', resources: '资源包', events: '事件', recipes: '配方',
}
const enNames: Record<string, string> = {
  'getting-started': 'Getting Started', setup: 'Getting Started', quickstart: 'Getting Started',
  reference: 'API Reference', packs: 'Data & Resource Packs', datapack: 'Data Packs', datapacks: 'Data Packs',
  resourcepack: 'Resource Packs', resources: 'Resource Packs', events: 'Events', recipes: 'Recipes',
}

function title(file: string, fallback: string) {
  if (!existsSync(file)) return fallback
  const markdown = readFileSync(file, 'utf8')
  const metadata = /^---\r?\n([\s\S]*?)\r?\n---/.exec(markdown)?.[1]
  return metadata?.match(/^sidebarTitle:\s*([^\r\n]+)/m)?.[1].trim().replace(/^['"]|['"]$/g, '')
    || markdown.match(/^#\s+(.+)$/m)?.[1].trim().replaceAll('`', '')
    || fallback
}

function children(directory: string, route: string, english = false): DefaultTheme.SidebarItem[] {
  if (!existsSync(directory)) return []
  const fallbackNames = english ? enNames : names
  const entries = readdirSync(directory, { withFileTypes: true })
    .filter(item => !item.name.startsWith('.') && item.name !== 'index.md')
    .sort((a, b) => a.name.localeCompare(b.name, english ? 'en' : 'zh-CN', { numeric: true }))
  const items: DefaultTheme.SidebarItem[] = []
  for (const entry of entries) {
    const fullPath = join(directory, entry.name)
    if (entry.isDirectory()) {
      const groupRoute = route + entry.name + '/'
      const index = join(fullPath, 'index.md')
      const pages = children(fullPath, groupRoute, english)
      if (pages.length || existsSync(index)) {
        items.push({
          text: title(index, fallbackNames[entry.name] ?? entry.name),
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

export function branchSidebar(mod: string, version: string, english = false) {
  const route = `${english ? '/en' : ''}/${mod}/${version}/`
  const directory = english ? join(docsRoot, 'en', mod, version) : join(docsRoot, mod, version)
  const packsFirst = (item: DefaultTheme.SidebarItem) => Number(item.link === route + 'packs/')
  const sections = children(directory, route, english)
  return [
    { text: `${mod === 'anvilcraft' ? 'AnvilCraft' : 'Ageratum'} · ${version}`, link: route },
    ...sections.sort((a, b) => packsFirst(b) - packsFirst(a)),
  ]
}
