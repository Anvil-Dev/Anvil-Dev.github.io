<script setup lang="ts">
import Banner from '@/assets/banner.png';
</script>

<template>
  <a-card hoverable bordered>
    <div style="width: 100%; text-align: center">
      <a-image style="max-width: 100%" :src="Banner"/>
    </div>
    <a-divider />
    <a-typography-paragraph>
      铁砧工艺是一个以铁砧下落砸到方块、物品或生物触发效果的模组
    </a-typography-paragraph>
    <a-typography-paragraph>铁砧下方放置不同方块会触发不同效果</a-typography-paragraph>
    <a-typography-paragraph>有利于实现一些原版难以实现的自动化生产</a-typography-paragraph>
    <a-typography-paragraph>可以再生一些原版不可再生物品</a-typography-paragraph>
    <a-typography-paragraph>
      为了方便将铁砧上抬，增加了磁铁，此部分完全可以使用原版红石机械代替，但较为繁琐
    </a-typography-paragraph>
    <a-typography-paragraph>模组后期发展有独特的科技部分</a-typography-paragraph>
    <a-typography-paragraph>提高了原版附魔的上限，包含一些魔法性质的玩法</a-typography-paragraph>
  </a-card>
</template>

<style scoped></style>
