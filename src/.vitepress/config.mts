import {defineConfig} from 'vitepress'
import {MCMOD} from './theme/components/icons'

// @ts-ignore
import fs from 'node:fs'
// @ts-ignore
import path from 'node:path'
// @ts-ignore
import matter from 'gray-matter'

function getFileTitle(filePath: string) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8')
        const {data} = matter(content)
        if (data.title) return data.title

        const h1Match = content.match(/^#\s+(.*)/m)
        if (h1Match) return h1Match[1].trim()

        return path.basename(filePath, '.md')
    } catch (e) {
        return path.basename(filePath, '.md')
    }
}

function getSidebar(filePath: string) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8')
        const {data} = matter(content)
        if (data.sidebar) return data.sidebar
        else if (data.title) return data.title

        const h1Match = content.match(/^#\s+(.*)/m)
        if (h1Match) return h1Match[1].trim()

        return path.basename(filePath, '.md')
    } catch (e) {
        return path.basename(filePath, '.md')
    }
}

/**
 * 自动生成导航和侧边栏
 */
function getAutoConfig(lang: string = 'zh', homeName = '首页') {
    const nav: any[] = [];
    if (lang === 'zh') {
        nav.push({text: homeName, link: '/'})
    } else {
        nav.push({text: homeName, link: `/${lang}/`})
    }
    const sidebar: any = {}

    const postsPath = lang === 'zh' ? path.resolve(__dirname, '../posts') : path.resolve(__dirname, `../${lang}/posts`)
    // 读取 posts 目录下的所有第一级子目录
    if (!fs.existsSync(postsPath)) return {nav, sidebar}

    const categories = fs.readdirSync(postsPath).filter(f =>
        fs.statSync(path.join(postsPath, f)).isDirectory()
    )

    categories.forEach((cat: any) => {
        const catPath = path.join(postsPath, cat)
        const indexPath = path.join(catPath, 'index.md')

        // 1. 生成 Nav: 获取该分类 support_us.md 的标题
        const catTitle = fs.existsSync(indexPath) ? getFileTitle(indexPath) : cat
        nav.push({
            text: catTitle,
            link: lang === 'zh' ? `/posts/${cat}/index` : `/${lang}/posts/${cat}/index`
        })

        // 2. 生成 Sidebar: 扫描该目录下所有 md
        const items = fs.readdirSync(catPath)
            .filter((f: string) => f.endsWith('.md'))
            .map((f: string) => {
                return {
                    text: getSidebar(path.join(catPath, f)),
                    link: lang === 'zh' ? `/posts/${cat}/${f.replace('.md', '')}` : `/${lang}/posts/${cat}/${f.replace('.md', '')}`
                }
            })
            // 让 support_us.md 始终在最前面
            .sort((a: { link: string }) => (a.link.endsWith('index') ? -1 : 1))

        sidebar[lang === 'zh' ? `/posts/${cat}/` : `/${lang}/posts/${cat}/`] = [
            {
                text: catTitle, // 侧边栏大标题使用该分类的 support_us.md 标题
                items: items
            }
        ]
    })

    return {nav, sidebar}
}

export default defineConfig({
    title: "AnvilCraft",
    description: "以铁砧为核心的原版生存拓展",
    lastUpdated: true,
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    themeConfig: {
        ...getAutoConfig(),
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Anvil-Dev/AnvilCraft'},
            {icon: 'qq', link: 'https://qm.qq.com/q/OO9MeRbPIm'},
            {icon: 'discord', link: 'https://discord.gg/gAnWeZNKGh'},
            {icon: 'bilibili', link: 'https://space.bilibili.com/5930630/lists/2530932'},
            {icon: {svg: MCMOD}, link: 'https://www.mcmod.cn/class/14068.html'},
            {icon: 'curseforge', link: 'https://www.curseforge.com/minecraft/mc-mods/anvilcraft'},
            {icon: 'modrinth', link: 'https://modrinth.com/mod/anvilcraft'}
        ],

        // carbonAds: {
        //     code: 'your-carbon-code',
        //     placement: 'your-carbon-placement'
        // },

        footer: {
            message: 'Released under the CC-BY-NC-SA 4.0 License.',
            copyright: 'Copyright © 2024-present Gugle'
        }
    },

    markdown: {
        lineNumbers: true,
    },

    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN'
        },
        en: {
            label: 'English',
            lang: 'en',
            themeConfig: getAutoConfig('en', 'Home')
        }
    }
})
