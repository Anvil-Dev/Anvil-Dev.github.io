import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import SiteLayout from './SiteLayout.vue'
import './style.scss'

export default { extends: DefaultTheme, Layout: SiteLayout } satisfies Theme
