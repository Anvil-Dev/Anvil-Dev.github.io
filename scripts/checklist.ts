import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { parseArgs } from 'node:util'

const { values } = parseArgs({ options: { check: { type: 'boolean' } } })
const docs = resolve('docs')
const output = join(docs, 'checklist')
const read = (file: string) => readFileSync(file, 'utf8').replaceAll('\r\n', '\n')
const sort = new Intl.Collator('en', { numeric: true })

function title(file: string) {
  const heading = read(file).match(/^# (.+)$/m)?.[1].trim()
  if (!heading) throw new Error(`页面缺少一级标题：${file}`)
  return heading
}

function page(file: string) {
  const route = '/' + relative(docs, file).replaceAll('\\', '/').replace(/\/index\.md$/, '/').replace(/\.md$/, '')
  const label = title(file).replaceAll('[', '\\[').replaceAll(']', '\\]')
  return `- [x] [${label}](${route})`
}

function list(directory: string, depth = 1): { text: string; count: number } {
  const index = join(directory, 'index.md')
  const sections = [page(index)]
  let count = 1
  const entries = readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => sort.compare(a.name, b.name))
  for (const file of entries.filter(e => e.isFile() && e.name !== 'index.md' && e.name.endsWith('.md'))) {
    sections.push(page(join(directory, file.name)))
    count++
  }
  const groups = entries.filter(e => e.isDirectory() && !e.name.startsWith('.'))
  // Lead with setup and keep the long, generated symbol list below the feature guides.
  const rank = (name: string) => name === 'getting-started' ? -1 : name === 'api' ? 1 : 0
  groups.sort((a, b) => rank(a.name) - rank(b.name))
  for (const group of groups) {
    const path = join(directory, group.name)
    const child = list(path, depth + 1)
    sections.push('', '#'.repeat(Math.min(depth + 1, 6)) + ' ' + title(join(path, 'index.md')), '')
    if (group.name === 'api') {
      sections.push(`<details><summary>展开 ${child.count} 篇参考页</summary>`, '', child.text, '', '</details>')
    } else {
      sections.push(child.text)
    }
    count += child.count
  }
  return { text: sections.join('\n'), count }
}

if (!values.check) mkdirSync(output, { recursive: true })
for (const [slug, project] of [['anvilcraft', 'AnvilCraft'], ['ageratum', 'Ageratum']]) {
  for (const version of ['21.1', '26.1']) {
    const file = join(output, `${slug}-${version}.md`)
    const { text, count } = list(join(docs, slug, version))
    const expected = [
      '---', 'search: false', '---', '', `# ${project} ${version} 逐篇清单`, '',
      `勾选项对应本分册已收录的页面，共 ${count} 篇。点击标题可以核对正文。`, '', text, '',
    ].join('\n')
    if (values.check) {
      if (!existsSync(file) || read(file) !== expected) {
        throw new Error(`${relative(docs, file)} 与分册目录或标题不符，请执行 node scripts/checklist.ts`)
      }
    } else {
      writeFileSync(file, expected, 'utf8')
    }
    console.log(`${project} ${version} · ${count} 篇`)
  }
}
