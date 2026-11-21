import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { resolve, join, dirname, relative, sep } from 'node:path'
import { parseArgs } from 'node:util'

const { values: options } = parseArgs({ options: { root: { type: 'string', default: 'docs' } } })
const docs = resolve(options.root)
const errors: string[] = []
const decoder = new TextDecoder('utf-8', { fatal: true })
const read = (path: string) => decoder.decode(readFileSync(path)).replaceAll('\r\n', '\n')
function pagesIn(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).filter(entry => !entry.name.startsWith('.'))
    .flatMap(entry => {
      const path = join(dir, entry.name)
      return entry.isDirectory() ? pagesIn(path) : path.endsWith('.md') ? [path] : []
    })
}

for (const project of ['anvilcraft', 'ageratum']) {
  for (const version of ['21.1', '26.1']) {
    const root = join(docs, project, version)
    const index = read(join(root, 'index.md'))
    const sha = index.match(/\/tree\/([a-f0-9]{40})/)?.[1]
    if (!sha) throw Error('缺少取材提交 ' + root)
    const pages = pagesIn(root)
    let json = 0
    for (const page of pages) {
      const contents = read(page)
      const fail = (message: string) => errors.push(relative(docs, page) + ' · ' + message)
      if (!/^# [^\n]+/m.test(contents)) fail('缺少标题')
      for (const found of contents.matchAll(/^```json[ \t]*\n([\s\S]*?)^```/gm)) {
        try { JSON.parse(found[1]); json++ } catch { fail('JSON 示例无法解析') }
      }
      const prose = contents.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$/gm, '').replace(/(`+)[^\n]*?\1/g, '')
      const filler = prose.match(/赋能|抓手|总而言之|综上所述|在现代 Minecraft 开发中|让我们深入探索|不仅[^。\n]{0,120}而且|无缝集成|优雅地解决/)
      if (filler) fail('正文含有禁用措辞 ' + filler[0])
      const source = project === 'anvilcraft' ? 'AnvilCraft' : 'Ageratum'
      const pins = new RegExp('github\\.com/Anvil-Dev/' + source + '/(?:tree|blob)/([a-f0-9]{40})','g')
      for (const match of prose.matchAll(pins)) if (match[1] !== sha) fail('交叉引用其他源码快照 ' + match[1])
      for (const m of prose.matchAll(/\]\(([^)\s]+)\)/g)) {
        const link = m[1].split(/[?#]/)[0]
        if (!link || /^(?:[a-z]+:|\/\/)/i.test(link)) continue
        const path = link.startsWith('/') ? resolve(docs, '.' + link) : resolve(dirname(page), link)
        const [linkedProject, linkedVersion] = relative(docs, path).split(sep)
        if (['anvilcraft', 'ageratum'].includes(linkedProject) && ['21.1', '26.1'].includes(linkedVersion) && linkedVersion !== version) {
          fail('分册正文链接指向其他版本 ' + link)
        }
        const targets = [path, path + '.md', join(path, 'index.md'), join(docs, 'public', link)]
        if (!targets.some(target => existsSync(target) && statSync(target).isFile())) fail('无效链接 ' + link)
      }
    }
    console.log(project + '/' + version + ' · ' + pages.length + ' 页，' + json + ' 个 JSON 示例')
  }
}
if (errors.length) {
  console.error(errors.slice(0, 60).join('\n'))
  throw new Error('检测到 ' + errors.length + ' 个问题')
}
