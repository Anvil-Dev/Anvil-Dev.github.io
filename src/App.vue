@ -1,68 +1,98 @@
<script setup lang="ts">
import { theme } from 'ant-design-vue';
import { computed, h, onMounted, reactive, ref } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  PicLeftOutlined,
  InfoCircleOutlined,
  RedEnvelopeOutlined,
  AppstoreOutlined,
  CloudOutlined
} from '@ant-design/icons-vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
import Urls from '@/assets/urls.json';
import Icon from '@/assets/icon.svg';
import router from '@/router/index.ts';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4583291_rt4yqubcpzs.js'
});

const items = ref([
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页'
  },
  {
    key: 'view',
    icon: () => h(PicLeftOutlined),
    label: '概览',
    title: '概览'
  },
  {
    key: 'about',
    icon: () => h(InfoCircleOutlined),
    label: '关于',
    title: '关于'
  },
  {
    key: 'support',
    icon: () => h(RedEnvelopeOutlined),
    label: '支持我们',
    title: '支持我们'
  },
  {
    key: 'additional',
    icon: () => h(AppstoreOutlined),
    label: '附加包',
    title: '附加包',
    children: [
      {
        key: 'skyland',
        icon: () => h(CloudOutlined),
        label: '空岛附加',
        title: '空岛附加'
      }
    ]
  }
]);

let hrefs = window.location.href.split('/');
let temp: any = '';
let keys: string[] = [];

hrefs.pop();
while (temp !== '#') {
  temp = hrefs.pop();
  if (temp !== '#') keys.push(temp);
}

const state = reactive({
  collapsed: false,
  selectedKeys: [window.location.href.split('/').pop() || 'home'],
  openKeys: keys,
  darkTheme: true,
  narrow: false
});

const antTheme = computed(() => {
  if (state.darkTheme) {
    return {
      algorithm: theme.darkAlgorithm
    };
  } else {
    return {
      algorithm: theme.defaultAlgorithm
    };
  }
});

function toggleDarkTheme(dark?: boolean) {
  if (dark === undefined) {
    state.darkTheme = !state.darkTheme;
  } else {
    state.darkTheme = dark;
  }

  localStorage.setItem('darkTheme', state.darkTheme ? 'true' : 'false');

  updateDarkThemeStyles();
}

function updateDarkThemeStyles() {
  const root = document.documentElement;
  if (state.darkTheme) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

function initDarkTheme() {
  const isStoredDark = localStorage.getItem('darkTheme');
  let isDark: boolean;
  if (isStoredDark === null) {
    isDark = matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('darkTheme', isDark ? 'true' : 'false');
  } else {
    isDark = isStoredDark == 'true';
  }
  toggleDarkTheme(isDark);
}

function toggleCollapsed() {
  state.collapsed = !state.collapsed;
}

function select(page: any) {
  let path: string = '';
  for (let p of page.keyPath) {
    path += '/' + p;
  }
  path = path === '/home' ? '/' : path;
  router.push(path);
  console.log(state);
}

function updateNarrowState() {
  const vw = window.visualViewport?.width;
  if (!vw) return;
  state.narrow = vw <= 650;

  state.collapsed = state.narrow;
  const root = document.documentElement;
  if (state.narrow) {
    root.style.setProperty('--app-header-height', '116px');
  } else {
    root.style.setProperty('--app-header-height', '80px');
  }
}

addEventListener('resize', () => {
  updateNarrowState();
});

onMounted(() => {
  updateNarrowState();
  initDarkTheme();
});
</script>

<template>
  <a-config-provider :theme="antTheme">
    <a-page-header
      class="app-header"
      title="铁砧工艺"
      sub-title="一个原版风科技模组"
      @back="toggleCollapsed"
      :avatar="{ src: Icon }">
      <template #backIcon>
        <MenuUnfoldOutlined v-if="state.collapsed" />
        <MenuFoldOutlined v-else />
      </template>
      <template #extra>
        <a-space class="url-list" v-if="!state.narrow">
          <a-tooltip v-for="url in Urls" placement="left">
            <template #title>
              <span>{{ url.tip }}</span>
            </template>
            <a :href="url.url" target="_blank">
              <icon-font class="icon" :type="'icon-' + url.icon" />
            </a>
          </a-tooltip>
          <div />
          <a-tooltip placement="left">
            <template #title>
              <span>
                切换暗色模式
                <br />
                //todo: 改成 icon button
              </span>
            </template>
            <a-switch v-model:checked="state.darkTheme" @click="toggleDarkTheme" />
          </a-tooltip>
        </a-space>
      </template>
      <div
        v-if="state.narrow"
        style="display: flex; align-items: center; justify-content: space-between"
      >
        <a-space class="url-list">
          <a-tooltip v-for="url in Urls" placement="right">
            <template #title>
              <span>{{ url.tip }}</span>
            </template>
            <a :href="url.url" target="_blank">
              <icon-font class="icon" :type="'icon-' + url.icon" />
            </a>
          </a-tooltip>
        </a-space>

        <a-tooltip placement="left">
          <template #title>
            <span>
              切换暗色模式
              <br />
              //todo: 改成 icon button
            </span>
          </template>
          <a-switch v-model:checked="state.darkTheme" @click="toggleDarkTheme" />
        </a-tooltip>
      </div>
    </a-page-header>

    <a-layout class="app-layout">
      <a-layout-sider class="app-sider" :collapsed="state.collapsed" :trigger="null" collapsible>
        <a-menu
          v-model:selectedKeys="state.selectedKeys"
          v-model:open-keys="state.openKeys"
          mode="inline"
          class="app-menu"
          :items="items"
          @select="select" />
      </a-layout-sider>

      <a-layout-content class="app-scrollbar">
        <div class="app-content">
          <router-view />
        </div>

        <div class="app-footer">
          <span>
            ©
            <a href="https://github.com/Anvil-Dev" target="_blank">Anvil-Dev</a>
          </span>
        </div>
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>

<style lang="scss">
html {
  --app-content-margin: 16px;
  --app-header-height: 80px;
  --app-footer-height: 80px;

  --app-header-color: #fff;
  --app-border-color: rgba(5, 5, 5, 0.06);
  --app-scrollbar-color: #8b8b8b;
}
html.dark {
  --app-header-color: #141414;
  --app-border-color: rgba(253, 253, 253, 0.12);
  --app-scrollbar-color: #555;
}

.app-header {
  max-height: var(--app-header-height);
  border-bottom: 1px solid var(--app-border-color);
  background-color: var(--app-header-color) !important;
}

.app-sider {
  height: calc(100vh - var(--app-header-height));
}

.app-menu {
  height: 100%;
  max-width: 280px;
}

.app-scrollbar {
  height: calc(100vh - var(--app-header-height));
  overflow: auto;
  scrollbar-color: var(--app-scrollbar-color) transparent;
}

.app-footer {
  height: var(--app-footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-content {
  margin: var(--app-content-margin);
  min-height: calc(
    100vh - var(--app-header-height) - var(--app-footer-height) - 2 * var(--app-content-margin)
  );
}

.url-list {
  font-size: 24px;
  text-align: center;
  max-height: 24px;
}
</style>
