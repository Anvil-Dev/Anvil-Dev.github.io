<script setup lang="ts">
import ContributorCard from '@/components/ContributorCard.vue';
import { UserFilled } from '@element-plus/icons-vue';
import Supporters from '@/assets/supporters.json';
import Authors from '@/assets/authors.json';
import Contributors from '@/assets/contributors.json';
import { createFromIconfontCN } from '@ant-design/icons-vue';

Supporters.sort((a, b) => b.money - a.money);

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4583291_sbz536mbo0k.js'
});
</script>

<template>
  <a v-for="author in Authors" :href="author.link" target="_blank">
    <a-badge-ribbon :text="author.work">
      <a-card class="main-card" hoverable bordered>
        <template #title>
          <a-avatar size="large" :src="author.avatar">
            <template #icon>
              <UserFilled />
            </template>
          </a-avatar>
          {{ author.name }}
        </template>
        <template #extra>
          <a
            v-if="author.uid"
            :href="'https://space.bilibili.com/' + author.uid"
            target="_blank"
            style="margin-right: 80px; font-size: 32px">
            <icon-font class="icon" type="icon-bilibili" />
          </a>
        </template>
        <p v-for="desc in author.desc">
          {{ desc }}
        </p>
        <p class="copy" v-if="author.copyright">
          ——引自
          <a :href="author.copyright.link" target="_blank">{{ author.copyright.name }}</a>
        </p>
      </a-card>
    </a-badge-ribbon>
  </a>

  <a-card class="main-card" hoverable bordered>
    <template #title>贡献者</template>
    <ContributorCard
      v-for="contributor in Contributors"
      :info="contributor"
      color="green" />
  </a-card>

  <a-card class="main-card" hoverable bordered>
    <template #title>赞助榜</template>
    <ContributorCard
      v-for="supporter in Supporters"
      :info="supporter"
      color="pink"
      work="实力富哥💵" />
  </a-card>
</template>

<style scoped>
.copy {
  text-align: right;
}

.main-card {
  margin: 8px 0;
}
</style>
