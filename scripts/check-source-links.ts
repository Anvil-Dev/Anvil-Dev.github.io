import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const [checkout, handbook] = process.argv.slice(2).map(path => resolve(path))
if (process.argv.length !== 4) throw new Error('用法：node scripts/check-source-links.ts <上游检出目录> <分册目录>')
const index = readFileSync(join(handbook, 'index.md'), 'utf8')
const baseline = index.match(/https:\/\/github\.com\/([^\s)]+?)\/tree\/([a-f0-9]{40})\b/)
if (!baseline) throw new Error('分册首页缺少上游基线')
const [, repository, revision] = baseline
const git = (...args: string[]) => execFileSync('git', ['-C', checkout, ...args], { encoding: 'utf8', maxBuffer: 32 << 20 })
if (git('rev-parse', 'HEAD').trim() !== revision) throw new Error('上游检出与分册基线不一致')
if (git('status', '--porcelain', '--untracked-files=no').trim()) throw new Error('上游检出有改动，无法核对固定的行号')

const tracked = new Set(git('ls-tree', '-r', '--name-only', '-z', revision).split('\0'))
const lineCounts = new Map<string, number>()
let links = 0
const errors: string[] = []

function verify(directory: string) {
  for (const file of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, file.name)
    if (file.isDirectory()) { verify(path); continue }
    if (!file.name.endsWith('.md')) continue
    for (const match of readFileSync(path, 'utf8').matchAll(/https:\/\/github\.com\/([^/\s]+\/[^/\s]+)\/blob\/([a-f\d]{40})\/([^#)\s]+)(?:#L(\d+)(?:-L(\d+))?)?/g)) {
      if (match[1] !== repository) continue
      links++
      const [, , pinned, source, first, last] = match
      if (pinned !== revision || !tracked.has(source)) {
        errors.push(path + ' · ' + match[0])
        continue
      }
      if (!first) continue
      let length = lineCounts.get(source)
      if (length === undefined) {
        const contents = readFileSync(join(checkout, source), 'utf8')
        length = contents.split('\n').length - Number(contents.endsWith('\n'))
        lineCounts.set(source, length)
      }
      if (Number(first) < 1 || Number(last ?? first) > length || Number(last ?? first) < Number(first))
        errors.push(path + ' · ' + match[0])
    }
  }
}
verify(handbook)
if (errors.length) throw new Error(errors.slice(0, 15).join('\n') + '\n无效源码引用数 ' + errors.length)
console.log(repository + ' @ ' + revision.slice(0, 12) + ' · ' + links + ' 个源码引用通过文件与行号校验')
