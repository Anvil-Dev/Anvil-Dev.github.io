import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { parseArgs } from 'node:util'

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    standalone: { type: 'boolean' },
    'upstream-classpath': { type: 'boolean' },
    offline: { type: 'boolean' },
  },
})
if (positionals.length !== 2 || (values.standalone && values['upstream-classpath'])) {
  throw new Error('用法：node scripts/verify-examples.ts <上游检出目录> <分支手册目录> [--standalone | --upstream-classpath] [--offline]')
}
const [upstream, handbook] = positionals.map(path => resolve(path))
const revision = readFileSync(join(handbook, 'index.md'), 'utf8').match(/\/tree\/([a-f0-9]{40})\b/)?.[1]
const current = execFileSync('git', ['-C', upstream, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
if (revision !== current) throw new Error(`手册源码基线为 ${revision ?? '未知'}，当前检出为 ${current}`)

const root = mkdtempSync(join(tmpdir(), 'mod-handbook-examples-'))
const sources = join(root, 'src/main/java')
const origins = new Map<string, string>()

function writeFile(path: string, data: string) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, data, 'utf8')
}

function codeBlocks(file: string, language: string) {
  const markdown = readFileSync(file, 'utf8').replaceAll('\r\n', '\n')
  const fence = new RegExp('^```' + language + '[ \\t]*\\n([\\s\\S]*?)^```[ \\t]*$', 'gm')
  return Array.from(markdown.matchAll(fence), match => match[1])
}

function extractJava(directory: string) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name)
    if (entry.isDirectory()) {
      extractJava(file)
      continue
    }
    if (!entry.name.endsWith('.md')) continue
    for (const code of codeBlocks(file, 'java')) {
      const packageName = code.match(/^package (dev\.example(?:\.[\w$]+)*);/m)?.[1]
      if (!packageName) continue
      const name = code.match(/^public\s+(?:(?:final|abstract|sealed|non-sealed)\s+)*(?:class|interface|record|enum|@interface)\s+([\w$]+)/m)?.[1]
      if (!name) throw new Error(`${file} 中的 Java 示例缺少公开顶级类型`)
      const path = join(sources, ...packageName.split('.'), name + '.java')
      if (existsSync(path) && readFileSync(path, 'utf8') !== code) {
        throw new Error(`${packageName}.${name} 在 ${file} 与 ${origins.get(path)} 中内容冲突`)
      }
      writeFile(path, code)
      origins.set(path, file)
    }
  }
}

try {
  extractJava(handbook)
  if (!origins.size) throw new Error('手册中未找到 dev.example 包的完整 Java 示例')

  let cwd = root
  let tasks = ['classes']
  if (values['upstream-classpath']) {
    const init = join(root, 'compile.gradle')
    writeFile(init, `
gradle.projectsEvaluated {
    def project = gradle.rootProject
    project.tasks.register('compileHandbookExamples', JavaCompile) {
        dependsOn project.tasks.named('compileJava')
        source = project.fileTree(System.getenv('HANDBOOK_EXAMPLE_SOURCES'))
        classpath = project.sourceSets.main.compileClasspath + project.sourceSets.main.output
        destinationDirectory.set(project.file(System.getenv('HANDBOOK_EXAMPLE_OUTPUT')))
        javaCompiler.set(project.tasks.named('compileJava').get().javaCompiler)
        options.encoding = 'UTF-8'
        options.compilerArgs.add('-proc:none')
    }
}
`)
    cwd = upstream
    tasks = ['-I', init, 'compileHandbookExamples']
  } else {
    const gradle = codeBlocks(join(handbook, 'getting-started/gradle.md'), 'groovy')
    const metadata = codeBlocks(join(handbook, 'getting-started/launch.md'), 'toml')
    if (gradle.length !== 2 || metadata.length !== 1) throw new Error('快速开始应包含两个 Groovy 文件和一份 TOML 元数据')
    writeFile(join(root, 'settings.gradle'), gradle[0])
    writeFile(join(root, 'build.gradle'), gradle[1])
    writeFile(join(root, 'src/main/resources/META-INF/neoforge.mods.toml'), metadata[0])
  }

  const java = process.env.JAVA_HOME
    ? join(process.env.JAVA_HOME, 'bin', process.platform === 'win32' ? 'java.exe' : 'java')
    : 'java'
  const wrapperJar = join(upstream, 'gradle/wrapper/gradle-wrapper.jar')
  console.log(`编译 ${origins.size} 个 Java 示例，源码基线 ${revision}`)
  execFileSync(java, ['-classpath', wrapperJar, 'org.gradle.wrapper.GradleWrapperMain',
    '--console=plain', ...tasks, ...(values.offline ? ['--offline'] : [])], {
    cwd, stdio: 'inherit',
    env: { ...process.env, HANDBOOK_EXAMPLE_SOURCES: sources, HANDBOOK_EXAMPLE_OUTPUT: join(root, 'classes') },
  })
} finally {
  rmSync(root, { recursive: true, force: true, maxRetries: 4 })
}
