import { readdirSync, readFileSync } from 'node:fs'
import { join, posix } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { MarkdownRenderer } from 'vitepress'

type Guide = { title: string; path: string }
const docs = fileURLToPath(new URL('../', import.meta.url))

function indexGuides(branch: string) {
  const references = new Map<string, Guide[]>()
  function add(key: string, guide: Guide) {
    const guides = references.get(key) ?? []
    if (!guides.includes(guide)) guides.push(guide)
    references.set(key, guides)
  }
  function visit(folder: string) {
    const entries = readdirSync(join(docs, folder), { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    for (const entry of entries) {
      const path = posix.join(folder, entry.name)
      if (entry.isDirectory()) {
        if (entry.name !== 'api' && !entry.name.startsWith('.')) visit(path)
        continue
      }
      if (!path.endsWith('.md')) continue
      const source = readFileSync(join(docs, path), 'utf8').replaceAll('\r\n', '\n')
      const title = source.match(/^# (.+)$/m)?.[1].trim()
      if (!title) continue
      const guide = { path, title }
      const prose = source.replace(/^```([^\n]*)\n([\s\S]*?)^```[ \t]*$/gm, (_, language: string, body: string) => {
        if (language.trim() === 'java') {
          const java = body.replace(/\/\*[\s\S]*?\*\//g, '')
          for (const match of java.matchAll(/^\s*import\s+([\w$.]+);/gm)) add(match[1], guide)
        }
        return ''
      }).replace(/`[^`\n]*`/g, '')
      for (const link of prose.matchAll(/\]\(([^\s)#]+)#([^\s)]+)\)/g)) {
        if (/^(?:\w+:|\/\/)/.test(link[1])) continue
        const dest = posix.resolve('/', posix.dirname(path), link[1]).slice(1).replace(/\.(?:md|html)$/, '')
        if (dest.startsWith(branch + '/api/')) add(dest + '#' + link[2], guide)
      }
    }
  }
  visit(branch)
  return references
}

export function apiGuideLinks(md: MarkdownRenderer) {
  const branches = new Map<string, ReturnType<typeof indexGuides>>()
  const close = md.renderer.rules.heading_close
  md.renderer.rules.heading_close = (tokens, i, options, env, renderer) => {
    const html = close?.(tokens, i, options, env, renderer) ?? renderer.renderToken(tokens, i, options)
    const file: string = env.relativePath?.replaceAll('\\', '/') ?? ''
    const branch = file.match(/^((?:anvilcraft|ageratum)\/(?:21\.1|26\.1))\/api\//)?.[1]
    if (!branch || tokens[i].tag !== 'h2') return html
    const packageHeading = tokens.findIndex(token => token.type === 'heading_open' && token.tag === 'h1')
    const pkg = tokens[packageHeading + 1]?.content.match(/^([\w$.]+)/)?.[1]
    if (!pkg) return html
    const type = tokens[i - 1].content
    const anchor = tokens[i - 2].attrGet('id')
    if (!branches.has(branch)) branches.set(branch, indexGuides(branch))
    const guides = branches.get(branch)!
    const examples = [...new Set([
      ...(guides.get(pkg + '.' + type) ?? []),
      ...(guides.get(file.replace(/\.md$/, '') + '#' + anchor) ?? []),
    ])].slice(0, 3)
    if (!examples.length) return html
    const links = examples.map(guide => {
      const path = posix.relative(posix.dirname(file), guide.path)
        .replace(/\/index\.md$/, '/').replace(/\.md$/, env.cleanUrls ? '' : '.html')
      return `<a href="${md.utils.escapeHtml(path)}">${md.utils.escapeHtml(guide.title)}</a>`
    })
    return html + '<p>相关用法 · ' + links.join(' · ') + '</p>\n'
  }
}
