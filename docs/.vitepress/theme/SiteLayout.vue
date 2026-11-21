<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue'
import { dataSymbol, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import UserMenu from './components/user-menu.vue'

const data = useData()
const libraryUrl = ref('https://anvil-dev.github.io/anvil-lib-docs/')

onMounted(() => {
  if (window.location.hostname === 'www.anvilcraft.dev') {
    libraryUrl.value = 'https://lib.anvilcraft.dev/'
  }
})

const theme = computed(() => ({
  ...data.theme.value,
  nav: [
    ...(data.theme.value.nav ?? []),
    { text: data.lang.value === 'en' ? 'AnvilLib' : '铁砧库', link: libraryUrl.value },
  ],
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
