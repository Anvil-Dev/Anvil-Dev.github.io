import { defineConfig } from 'vitepress'
import { branchSidebar } from './sidebar'

const versions = ['21.1', '26.1']
const projects = [
  { slug: 'anvilcraft', name: 'AnvilCraft' },
  { slug: 'ageratum', name: 'Ageratum' },
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'AnvilCraft 开发者手册',
  description: '面向模组和整合包作者的 AnvilCraft 与 Ageratum 开发文档。',
  metaChunk: true,
  buildConcurrency: 8,
  markdown: {
    config(md) {
      const renderCode = md.renderer.rules.code_inline!
      md.renderer.rules.code_inline = (tokens, index, ...args) => {
        const html = renderCode(tokens, index, ...args)
        // Java nested array initializers contain literal Vue interpolation delimiters.
        return tokens[index].content.includes('{{') ? html.replace('<code', '<code v-pre') : html
      }
    },
  },
  vite: { css: { preprocessorOptions: { scss: { api: 'modern' } } } },
  themeConfig: {
    siteTitle: 'AnvilCraft Docs',
    nav: [...projects.map(({ name, slug }) => ({
      text: name,
      activeMatch: `^/${slug}/`,
      items: versions.map(version => ({ text: version, link: `/${slug}/${version}/` })),
    })), { text: '文档清单', link: '/checklist' }],
    sidebar: Object.fromEntries(projects.flatMap(({ slug }) => versions.map(version =>
      [`/${slug}/${version}/`, branchSidebar(slug, version)]))),
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            filter: result => {
              const branch = location.pathname.match(/\/(anvilcraft|ageratum)\/(21\.1|26\.1)\//)?.[0]
              return !branch || String(result.id).includes(branch)
            },
          },
          options: {
            tokenize: (text: string) => {
              const words = text.match(/[\p{Script=Han}]+|[\p{Script=Latin}\d_$]+/gu) ?? []
              const tokens: string[] = []
              for (const word of words) {
                if (word.length < 2 || !/^\p{Script=Han}/u.test(word)) tokens.push(word)
                else for (let i = 1; i < word.length; i++) tokens.push(word.slice(i - 1, i + 1))
              }
              return tokens
            },
          },
        },
        _render(source, env, md) {
          const html = md.render(source, env)
          if (env.frontmatter?.search === false) return ''
          const [mod, version] = env.relativePath.split('/')
          const project = projects.find(({ slug }) => mod === slug)
          if (!project || !versions.includes(version)) return html
          return html.replace(/(<h1\b[^>]*>)/, `$1${project.name} ${version} · `)
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                displayDetails: '显示详情', resetButtonTitle: '清空搜索', backButtonTitle: '返回',
                noResultsText: '没有找到相关文档',
                footer: { selectText: '打开', navigateText: '选择', closeText: '关闭' },
              },
            },
          },
        },
      },
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    sidebarMenuLabel: '文档目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳至正文',
  },
})
