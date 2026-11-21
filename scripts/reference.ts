import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'

const { values: args } = parseArgs({ options: {
  source: { type: 'string' }, output: { type: 'string' }, upstream: { type: 'string' },
  java: { type: 'string', default: 'java' }, lombok: { type: 'string' },
  'source-root': { type: 'string', default: 'src/main/java' }, check: { type: 'boolean' }
}})
if (!args.source || !args.output || !args.upstream)
  throw new Error('node scripts/reference.ts --source <checkout> --output <branch>/api --upstream https://github.com/<org>/<repo> [--java <jdk/bin/java>] [--lombok <jar>] [--check]')
const source = resolve(args.source), output = resolve(args.output), upstream = args.upstream.replace(/\/$/, '')
const sourceRoot = args['source-root'].replace(/\/$/, '')
const git = (...params: string[]) => execFileSync('git', ['-C', source, ...params], { encoding: 'utf8', maxBuffer: 16 << 20 })
const revision = git('rev-parse', 'HEAD').trim()
if (git('status', '--porcelain', '--untracked-files=no', '--', sourceRoot).trim()) throw new Error('源码目录存在未提交的改动')
const files = git('ls-files', '-z', '--', sourceRoot).split('\0').filter(f => f.endsWith('.java'))
if (!files.length) throw new Error('该 source root 没有 Java 源文件')
const temp = mkdtempSync(join(tmpdir(), 'mod-public-surface-'))
const parser = fileURLToPath(new URL('./PublicSurface.java', import.meta.url))

interface Entry {
  pkg: string; owner: string; kind: string; name: string; sig: string; result: string;
  file: string; line: string; doc: string; tags: string; facts: string; lombok?: boolean; usage?: Entry
}
function readSurface(base: string, paths: string[], withUsages = false): Entry[] {
  writeFileSync(join(temp, 'files.txt'), paths.join('\n'))
  const stdout = execFileSync(args.java, ['-Xmx2g', '-Dfile.encoding=UTF-8', parser, base, join(temp, 'files.txt'), ...(withUsages ? ['uses'] : [])],
    { encoding: 'utf8', maxBuffer: 512 << 20 })
  return stdout.trimEnd().split(/\r?\n/).filter(Boolean).map(row => {
    const [pkg, owner, kind, name, sig, result, file, line, doc = '', tags = '', facts = ''] =
      row.split('\t').map(s => Buffer.from(s, 'base64').toString('utf8'))
    return { pkg, owner, kind, name, sig, result, file, line, doc, tags, facts }
  })
}
function key(e: Entry) {
  const params = e.facts.split('\n').filter(f => f.startsWith('param\t')).map(f => f.split('\t')[2]?.replace(/java\.lang\./g, ''))
  return [e.pkg, e.owner, e.kind, e.name, ...params].join(':')
}
function expand(entries: Entry[]) {
  const annotated = files.filter(f => /(?:import\s+(?:static\s+)?lombok\.|@lombok\.)/.test(readFileSync(join(source, f), 'utf8')))
  if (!annotated.length) return entries
  if (!args.lombok) throw new Error('此分支使用 Lombok，请通过 --lombok 指定分支所用版本的 jar')
  const input = join(temp, 'input'), expanded = join(temp, 'expanded')
  for (const f of [...annotated, ...git('ls-files', '-z', '--', '*lombok.config').split('\0').filter(Boolean)]) {
    mkdirSync(dirname(join(input, f)), { recursive: true })
    copyFileSync(join(source, f), join(input, f))
  }
  // These handlers derive the public surface from source fields and declared types.
  // Handlers that require resolved external types must use the project's build classpath.
  for (const f of annotated) {
    if (/\b(?:lombok\.experimental\.)?Delegate\b/.test(readFileSync(join(source, f), 'utf8')))
      throw new Error('发现需要依赖类型解析的 Lombok Delegate，需提供编译后成员清单：' + f)
  }
  execFileSync(args.java, ['-Xmx2g', '-Dfile.encoding=UTF-8', '-jar', resolve(args.lombok), 'delombok',
    '--encoding', 'UTF-8', '--format', 'pretty', '--target', expanded, input],
    { encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'pipe'] })
  const annotations = new Set(annotated)
  const parsed = readSurface(expanded, annotated)
  const original = new Map(entries.map(e => [key(e), e]))
  const typeMap = new Map(entries.filter(e => e.kind === 'type').map(e => [e.pkg + '.' + e.owner, e]))
  const result = entries.filter(e => !annotations.has(e.file))
  for (const e of parsed) {
    const prev = original.get(key(e))
    if (prev) {
      result.push({ ...prev, sig: e.kind === 'type' ? e.sig : prev.sig, facts: e.facts })
      continue
    }
    const parts = e.owner.split('.')
    let anchor: Entry | undefined
    while (parts.length && !anchor) {
      anchor = typeMap.get(e.pkg + '.' + parts.join('.'))
      parts.pop()
    }
    if (!anchor) throw new Error('找不到 Lombok 生成成员的源码位置：' + key(e))
    result.push({ ...e, file: anchor.file, line: anchor.line, lombok: true })
  }
  return result
}
function literal(text: string): string {
  const fence = '`'.repeat(Math.max(0, ...(text.match(/`+/g) ?? []).map(m => m.length)) + 1)
  return fence + ' ' + text.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim() + ' ' + fence
}
function prose(raw: string): string {
  return raw.replace(/\\u([0-9A-Fa-f]{4})/g, (_, hex: string) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/\{@(?:code|literal)\s+([^}]*)\}/g, '$1').replace(/\{@link(?:plain)?\s+([^}]*)\}/g, '$1')
    .replace(/\{@inheritDoc\}/gi, '').replace(/<\/?(?:p|pre|code|em|strong|ul|li|br|ol|a|b|i|h\d)(?:\s+[^>]*)?\/?\s*>/gi, ' ')
    .replace(/\s+/g, ' ').trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/([\\`*_\[\]|])/g, '\\$1').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
}
function sourceLink(e: Entry) { return upstream + '/blob/' + revision + '/' + e.file + '#L' + e.line }
function attachUsages(entries: Entry[], uses: Entry[]) {
  const declarations = new Map<string, Entry[]>()
  for (const e of entries) {
    if (e.kind !== 'method' && e.kind !== 'ctor') continue
    const arity = e.facts.split('\n').filter(f => f.startsWith('param\t')).length
    if (e.facts.includes('record-ctor') || e.facts.includes('enum-valueOf') || e.facts.includes('record-equals')) continue
    const name = e.kind === 'ctor' ? '<init>' : e.name
    const id = [e.pkg + '.' + e.owner, name, arity].join(':')
    const cluster = declarations.get(id) ?? []
    cluster.push(e)
    declarations.set(id, cluster)
  }
  for (const use of uses) {
    const candidates = use.result.split('\t').flatMap(c => declarations.get([c, use.name, use.sig].join(':')) ?? [])
    if (candidates.length !== 1) continue
    const [target] = candidates
    if (!target.usage || target.usage.file === target.file && use.file !== target.file)
      target.usage = use
  }
}
// Only attach engine callback contracts to explicit overrides with the corresponding signature.
const callbacks: Record<string, [RegExp, string]> = {
  getStateForPlacement: [/BlockPlaceContext/, '放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。'],
  newBlockEntity: [/BlockPos/, '为指定位置和状态创建方块实体。'],
  getShape: [/CollisionContext/, '方块查询选取轮廓时调用。返回方块局部坐标中的 VoxelShape。'],
  getRenderShape: [/BlockState/, '客户端选择方块的渲染路径时调用。'],
  saveAdditional: [/HolderLookup|ValueOutput|CompoundTag/, '写入方块实体的持久化数据时调用。'],
  loadAdditional: [/HolderLookup|ValueInput|CompoundTag/, '从存档恢复方块实体附加数据时调用。'],
  getUpdateTag: [/HolderLookup|RegistryAccess/, '构造区块发往客户端时附带的方块实体同步数据。'],
  registerRecipes: [/IRecipeRegistration/, 'JEI 收集配方条目时调用，用传入的注册对象提交展示内容。'],
  registerRecipeCatalysts: [/IRecipeCatalystRegistration/, 'JEI 注册配方催化物时调用，建立物品和配方类别之间的对应关系。'],
  setRecipe: [/IRecipeLayoutBuilder/, 'JEI 为一条配方构建界面时调用，通过布局构建器设置槽位。'],
}
function detail(e: Entry) {
  const sections: string[] = [], doc = prose(e.doc)
  if (doc) sections.push(doc)
  if (e.kind === 'method') {
    const event = /@(?:[\w.]+\.)?SubscribeEvent\b/.test(e.sig) && e.facts.split('\n').find(f => f.startsWith('param\t'))
    if (event) sections.push('事件总线派发 ' + literal(event.split('\t')[2]) + ' 时调用。')
    const callback = Object.hasOwn(callbacks, e.name) ? callbacks[e.name] : undefined
    if (callback && /@Override\b/.test(e.sig) && callback[0].test(e.sig)) sections.push(callback[1])
  }
  for (const tag of e.tags.split(/\n(?=@)/)) {
    const match = /^@(param|return|throws|exception|deprecated|see|since|implNote|apiNote)\s+([\s\S]+)/.exec(tag)
    if (!match) continue
    const [, kind, body] = match
    if (kind === 'param' || kind === 'throws' || kind === 'exception') {
      const [, name, text] = /^(\S+)\s*([\s\S]*)$/.exec(body.trim())!
      sections.push((kind === 'param' ? '参数 ' : '异常 ') + literal(name) + ' ' + prose(text))
    } else {
      const label: Record<string, string> = { return:'返回', deprecated:'已弃用', see:'参见', since:'引入版本', implNote:'实现约定', apiNote:'使用约定' }
      sections.push(label[kind] + ' ' + prose(body))
    }
  }
  const fixed: Record<string,string> = {
    'record-ctor':'按声明顺序接收所有 record 分量。', 'implicit-ctor':'Java 提供的无参构造器。',
    'record-equals':'比较相同 record 类型的各个分量。', 'record-hash':'根据各个分量计算哈希值。',
    'record-string':'返回包含分量名和值的字符串。', 'enum-values':'返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。',
    'enum-valueOf':'按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。'
  }
  for (const f of e.facts.split('\n')) {
    const [op, a, b] = f.split('\t')
    if (fixed[op]) sections.push(fixed[op])
    if (op === 'return') sections.push(a === 'this' ? '返回当前实例，可继续链式调用。' : '末尾返回 ' + literal(a))
    if (op === 'guard') sections.push(literal(a) + ' 成立时抛出 ' + literal(b))
    if (op === 'early') sections.push(literal(a) + ' 成立时提前返回 ' + literal(b))
    if (op === 'call') sections.push('执行 ' + literal(a))
    if (op === 'invoke') sections.push((b ? '分支 ' + literal(b) + ' 内调用 ' : '实现调用 ') + literal(a))
    if (op === 'empty') sections.push('当前实现的方法体为空。')
    if (op === 'factory') sections.push('由 ' + literal(a) + ' 初始化。')
    if (op === 'value' || op === 'default') sections.push((op === 'value' ? '初值 ' : '默认值 ') + literal(a))
    if (op === 'record-get') sections.push('读取 record 分量 ' + literal(a))
  }
  if (e.lombok) sections.push('由 Lombok 生成。')
  if (e.usage) {
    const use = e.usage, name = use.doc === '<init>' ? '构造器' : use.doc
    sections.push('[调用处 ' + (use.owner + (name ? '.' + name : '')).replace(/_/g, '\\_') + '](' + sourceLink(use) + ')')
  }
  if (!sections.length && e.kind === 'method') {
    if (e.facts.includes('param\t') && /(^|\s)(abstract|default)\s/.test(e.sig) || !e.sig.includes('public') && !e.facts.includes('return\t'))
      sections.push('实现该接口时使用签名中的参数顺序和返回类型。')
    else if (e.result === 'void') sections.push('返回类型为 void。')
    else sections.push('返回 ' + literal(e.result))
  }
  if (!sections.length && e.kind === 'field') sections.push('字段类型为 ' + literal(e.result))
  if (!sections.length && e.kind === 'enum') sections.push('声明于枚举 ' + literal(e.owner))
  if (!sections.length && e.kind === 'ctor') sections.push('构造 ' + literal(e.owner) + ' 实例。')
  return sections.join('<br>')
}
const kinds: Record<string, string> = { field:'字段', method:'方法', ctor:'构造器', enum:'枚举值' }
function renderType(entries: Entry[]) {
  const t = entries.find(e => e.kind === 'type')!
  const text = ['## ' + t.owner, '', literal(t.sig), '', '[类型声明](' + sourceLink(t) + ')', '']
  const intro = detail(t)
  if (intro) text.push(intro, '')
  if (t.facts.startsWith('@')) text.push('类型注解 ' + t.facts.split('\n').map(literal).join('、'), '')
  const members = entries.filter(e => e.kind !== 'type')
  if (members.length) text.push('| 成员签名 | 实现与调用约定 | 源码 |', '| --- | --- | --- |')
  for (const e of members) {
    text.push('| ' + literal(e.sig) + ' | ' + detail(e) + ' | [' + kinds[e.kind] + '](' + sourceLink(e) + ') |')
  }
  return text.join('\n')
}
function generate(entries: Entry[]) {
  const seen = new Set<string>()
  const packages = new Map<string, Map<string, Entry[]>>()
  for (const e of entries) {
    const id = key(e)
    if (seen.has(id)) throw new Error('重复成员标识：' + id)
    seen.add(id)
    const types = packages.get(e.pkg) ?? new Map<string, Entry[]>()
    if (!packages.has(e.pkg)) packages.set(e.pkg, types)
    const values = types.get(e.owner) ?? []
    if (!types.has(e.owner)) types.set(e.owner, values)
    values.push(e)
  }
  const pages = new Map<string,string>()
  const totalTypes = entries.filter(e => e.kind === 'type').length
  const totalMembers = entries.length - totalTypes
  const index = ['# Java 公开 API', '', '按完整包名查找类型。方法重载分别列出。源码链接固定在 [' + revision.slice(0,12) + '](' + upstream + '/tree/' + revision + ')。', '',
    '本分支收录 ' + packages.size + ' 个包、' + totalTypes + ' 个可公开访问的类型和 ' + totalMembers + ' 个成员，包含 Java 隐式成员及 Lombok 展开的公开成员。继承的 API 在声明它的类型下查阅。', '']
  for (const pkg of [...packages.keys()].sort()) {
    const types = packages.get(pkg)!
    const chunks: Entry[][][] = [[]]
    let count = 0
    for (const name of [...types.keys()].sort()) {
      const group = types.get(name)!
      if (count && count + group.length > 130) { chunks.push([]); count = 0 }
      chunks.at(-1)!.push(group)
      count += group.length
    }
    const links: string[] = []
    for (const [i, chunk] of chunks.entries()) {
      const slug = pkg.replace(/\./g, '-') + (chunks.length > 1 ? '-' + (i + 1) : '')
      const first = chunk[0][0].owner, last = chunk.at(-1)![0].owner
      const range = chunks.length === 1 ? '' : '（' + first + ' 至 ' + last + '）'
      pages.set(slug + '.md', ['# ' + pkg + range, '', ...chunk.map(renderType)].join('\n\n').trimEnd() + '\n')
      links.push('[' + (chunks.length === 1 ? pkg : first + ' 至 ' + last) + '](./' + slug + ')')
    }
    index.push('- ' + (chunks.length > 1 ? literal(pkg) + ' · ' : '') + links.join('、'))
  }
  pages.set('index.md', index.join('\n') + '\n')
  mkdirSync(output, {recursive:true})
  const unexpected = readdirSync(output).filter(f => f.endsWith('.md') && !pages.has(f))
  if (unexpected.length) throw new Error('目录含有本次清点未产生的文件：' + unexpected.join(', '))
  for (const [name, text] of pages) {
    const path = join(output, name)
    if (args.check) {
      if (!existsSync(path) || readFileSync(path, 'utf8').replace(/\r\n/g, '\n') !== text) throw new Error('页面需要更新：' + path)
    } else writeFileSync(path, text, 'utf8')
  }
  console.log(JSON.stringify({revision, sources:files.length, packages:packages.size, types:totalTypes, members:totalMembers, lombok:entries.filter(e => e.lombok).length, pages:pages.size}))
}
try {
  const raw = readSurface(source, files, true)
  const entries = expand(raw.filter(e => e.kind !== 'use'))
  attachUsages(entries, raw.filter(e => e.kind === 'use'))
  generate(entries)
}
finally { rmSync(temp, { recursive:true, force:true }) }
