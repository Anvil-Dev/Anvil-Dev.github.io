<script setup lang="ts">
import {
  RedEnvelopeOutlined,
  LinkOutlined
} from '@ant-design/icons-vue';
</script>

<template>
  <a-card>
    <a-typography>
      <a-typography-title>铁砧工艺：空岛附加</a-typography-title>
      <a-divider/>
      <a-typography-title :level="2">描述</a-typography-title>
      <a-divider/>
      <a-typography-title :level="2">作者</a-typography-title>
      <a-divider/>
      <div style="display: flex; align-items: stretch; justify-content: start; flex-wrap: wrap">
          <a-card class="author-card">
            <template #title>
              <a-avatar shape="square" size="large" src="https://avatars.githubusercontent.com/u/46415647"/>
              Cjsah
            </template>
          </a-card>
          <a-card class="author-card">
            <template #title>
              <a-avatar shape="square" size="large"
                        src="https://camo.githubusercontent.com/c25ba057048d086a2de613f9b273c7f8ba2f403b7608c303412d20c6e8c0407d/68747470733a2f2f69312e6864736c622e636f6d2f6266732f666163652f343832626662383039633666356137656661613131366436663562393836333864656535646136332e6a7067"/>
              朽白zz
            </template>
          </a-card>
          <a-card class="author-card">
            <template #title>
              <a-avatar shape="square" size="large" src="https://avatars.githubusercontent.com/u/34372427"/>
              古镇天Gugle
              <a-typography-link href="/#/support" target="_blank">
                <red-envelope-outlined/>
              </a-typography-link>
            </template>
          </a-card>
      </div>
      <a-typography-title :level="2">介绍</a-typography-title>
      <a-divider/>
      <a-typography-title :level="2">相关</a-typography-title>
      <a-divider/>
      <a-card>
        <a-list>
          <a-list-item>
            <a-typography>
              <a-typography-link href="https://github.com/Cjsah/Skyland/actions/workflows/ci.yml" target="_blank">
                <link-outlined/>
                下载地址
              </a-typography-link>
            </a-typography>
          </a-list-item>
          <a-list-item>
            <a-typography-link href="https://github.com/Cjsah/Skyland" target="_blank">
              <link-outlined/>
              仓库地址
            </a-typography-link>
          </a-list-item>
          <a-list-item>
            <a-typography-link href="https://github.com/Cjsah/Skyland/issues" target="_blank">
              <link-outlined/>
              反馈和建议
            </a-typography-link>
          </a-list-item>
        </a-list>
      </a-card>
    </a-typography>
  </a-card>
</template>

<style scoped>
.author-card {
  margin: 5px;
}
</style>