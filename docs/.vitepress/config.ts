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
  vite: { css: { preprocessorOptions: { scss: { api: 'modern' } } } },
  themeConfig: {
    siteTitle: 'AnvilCraft Docs',
    nav: projects.map(({ name, slug }) => ({
      text: name,
      activeMatch: `^/${slug}/`,
      items: versions.map(version => ({ text: version, link: `/${slug}/${version}/` })),
    })),
    sidebar: Object.fromEntries(projects.flatMap(({ slug }) => versions.map(version =>
      [`/${slug}/${version}/`, branchSidebar(slug, version)]))),
    search: {
      provider: 'local',
      options: {
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
