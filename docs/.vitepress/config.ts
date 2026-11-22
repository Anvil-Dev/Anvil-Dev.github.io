import { defineConfig } from 'vitepress'
import { branchSidebar } from './sidebar'
import { projects, siteNavigation, versions } from './navigation'

const chinese = siteNavigation()
const english = siteNavigation(true)

export default defineConfig({
  lang: 'zh-CN',
  title: 'AnvilCraft',
  description: '以铁砧为核心的原版生存拓展。铁砧工艺与藿香的模组介绍、社区和开发文档。',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: {
      label: 'English', lang: 'en',
      description: 'A vanilla survival expansion centered around the anvil. Project information, community and developer documentation.',
      themeConfig: {
        ...english,
        sidebar: {
          ...english.sidebar,
          ...Object.fromEntries(projects.flatMap(({ slug }) => versions.map(version =>
            [`/en/${slug}/${version}/`, branchSidebar(slug, version, true)]))),
        },
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        sidebarMenuLabel: 'Menu', returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance', lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme', skipToContentLabel: 'Skip to content',
        langMenuLabel: 'Change language',
      },
    },
  },
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
  vite: {
    define: { 'import.meta.env.VITE_ANVIL_API_BASE': JSON.stringify(process.env.ANVIL_API_BASE || '') },
    css: { preprocessorOptions: { scss: { api: 'modern' } } },
  },
  themeConfig: {
    siteTitle: 'AnvilCraft',
    logo: '/icon.png',
    nav: chinese.nav,
    socialLinks: chinese.socialLinks,
    langMenuLabel: '切换语言',
    footer: {
      message: 'Released under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA 4.0 License</a>.',
      copyright: 'Copyright © 2024-present Gugle',
    },
    sidebar: {
      ...chinese.sidebar,
      ...Object.fromEntries(projects.flatMap(({ slug }) => versions.map(version =>
        [`/${slug}/${version}/`, branchSidebar(slug, version)]))),
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            filter: result => {
              const branch = location.pathname.match(/^(?:\/en)?\/(anvilcraft|ageratum)\/(21\.1|26\.1)\//)
              if (!branch) return true
              const id = String(result.id)
              const isEn = location.pathname.startsWith('/en/')
              return id.startsWith('/en/') === isEn && id.includes(`/${branch[1]}/${branch[2]}/`)
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
          const parts = env.relativePath.split('/')
          const [mod, version] = parts[0] === 'en' ? parts.slice(1) : parts
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
