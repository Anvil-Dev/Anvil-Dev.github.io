<script setup lang="ts">
import { createFromIconfontCN } from '@ant-design/icons-vue';
import { UserFilled } from '@element-plus/icons-vue';
import { computed, onMounted, ref } from 'vue';

type Info = {
  name: string;
  avatar: string;
  link: string;
  uid?: string;
  work?: string;
};

const props = defineProps<{
  info: Info;
  color: string;
  work?: string;
}>();

const ribbonText = computed(() => {
  if (props.work) {
    return props.work;
  }
  return props.info.work;
});

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4583291_sbz536mbo0k.js'
});

const container = ref<HTMLElement | undefined>();

function updateNarrowState() {
  const vw = window.visualViewport?.width;
  if (!vw || !container.value) return;
  const narrow = vw <= 450;
  if (narrow) {
    container.value.classList.add('narrow');
  } else {
    container.value.classList.remove('narrow');
  }
}

addEventListener('resize', () => {
  updateNarrowState();
});

onMounted(() => {
  updateNarrowState();
});
</script>

<template>
  <a :href="props.info.link" target="_blank" ref="container" class="container">
    <a-badge-ribbon :text="ribbonText" :color="props.color">
      <a-card hoverable bordered style="margin: 8px 0">
        <template #extra>
          <a
            v-if="props.info.uid"
            :href="`https://space.bilibili.com/${props.info.uid}`"
            target="_blank"
            class="extra">
            <icon-font class="icon" type="icon-bilibili" />
          </a>
        </template>
        <template #title>
          <a-avatar :src="props.info.avatar" size="large" class="avatar">
            <template #icon>
              <UserFilled />
            </template>
          </a-avatar>
          <a-typography-text class="name" style="font-size: 15px">
            {{ props.info.name }}
          </a-typography-text>
        </template>
      </a-card>
    </a-badge-ribbon>
  </a>
</template>

<style scoped>
.container {
  .extra {
    display: block;
    margin-right: 70px;
    font-size: 24px;
  }
  .avatar {
    margin: 4px;
  }
  .name {
    //display: inline-block;
  }
}
.narrow.container {
  .extra {
    margin-right: 0;
    margin-top: 26px;
  }
  .avatar {
    margin: 18px 4px;
  }
  .name {
    //margin-top: 30px;
  }
}
</style>
