import type { DefaultTheme } from 'vitepress'
import { MCMOD } from './mcmod-icon'

export const versions = ['21.1', '26.1']
export const projects = [
  { slug: 'anvilcraft', name: 'AnvilCraft' },
  { slug: 'ageratum', name: 'Ageratum' },
]

export function siteNavigation(english = false) {
  const home = english ? '/en/' : '/'
  const info = home + 'posts/base-info/'
  const infoTitle = english ? 'Basic Info' : '基本信息'
  const nav: DefaultTheme.NavItem[] = [
    { text: english ? 'Home' : '首页', link: home, activeMatch: english ? '^/en/$' : '^/$' },
    { text: infoTitle, link: info, activeMatch: '^' + info },
    ...projects.map(({ slug }) => ({
      text: slug === 'ageratum' ? (english ? 'Ageratum' : '藿香') : (english ? 'Developer Docs' : '开发文档'),
      activeMatch: slug === 'ageratum' ? '^/ageratum/' : '^/(?:anvilcraft/|(?:en/)?posts/docs/)',
      items: versions.map(version => ({ text: version, link: `/${slug}/${version}/` })),
    })),
  ]
  const infoSidebar = [{
    text: infoTitle,
    items: [
      { text: infoTitle, link: info },
      { text: english ? 'Overview' : '概览', link: info + 'info' },
      { text: english ? 'Special Thanks' : '特别鸣谢', link: info + 'members' },
      { text: english ? 'Support Us' : '支持我们', link: info + 'support_us' },
    ],
  }]
  const socialLinks: DefaultTheme.SocialLink[] = [
    { icon: 'github', link: 'https://github.com/Anvil-Dev/AnvilCraft', ariaLabel: 'GitHub' },
    { icon: 'qq', link: 'https://qm.qq.com/q/OO9MeRbPIm', ariaLabel: english ? 'Tencent QQ' : '腾讯QQ' },
    { icon: 'discord', link: 'https://discord.gg/gAnWeZNKGh', ariaLabel: 'Discord' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/5930630/lists/2530932', ariaLabel: english ? 'BiliBili' : '哔哩哔哩' },
    { icon: { svg: MCMOD }, link: 'https://www.mcmod.cn/class/14068.html', ariaLabel: english ? 'MCMOD' : '模组百科' },
    { icon: 'curseforge', link: 'https://www.curseforge.com/minecraft/mc-mods/anvilcraft', ariaLabel: 'CurseForge' },
    { icon: 'modrinth', link: 'https://modrinth.com/mod/anvilcraft', ariaLabel: 'Modrinth' },
  ]
  return { nav, socialLinks, sidebar: { [info]: infoSidebar } }
}
