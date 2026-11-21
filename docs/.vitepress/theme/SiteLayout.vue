<script setup lang="ts">
import { computed, provide } from 'vue'
import { dataSymbol, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import UserMenu from './components/user-menu.vue'

const data = useData()
const theme = computed(() => ({
  ...data.theme.value,
  // The public site is bilingual. The four technical handbooks are published in Chinese.
  i18nRouting: !data.page.value.isNotFound && !/^(anvilcraft|ageratum|checklist)\//.test(data.page.value.relativePath),
}))
provide(dataSymbol, { ...data, theme })
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after><UserMenu /></template>
  </DefaultTheme.Layout>
</template>
