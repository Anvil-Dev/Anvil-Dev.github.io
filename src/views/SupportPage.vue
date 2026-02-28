<script setup lang="ts">
import { onMounted, ref } from 'vue';

const qrcodes = [
  {
    name: '支付宝',
    value: 'https://qr.alipay.com/fkx189991xm3pdujnw1mxb0'
  },
  {
    name: '微信',
    value: 'wxp://f2f0-fpSqA1Q3ig3rSGlxpZzq5HfND8n5JYnqJK1ecp29scXBlRx2gKE_9JLIaJL4_Di'
  }
];

const qrSize = ref(300);

function updateQrSize() {
  const vw = window.visualViewport?.width;
  if (!vw) return;
  if (vw > 500) {
    qrSize.value = 300;
  } else {
    qrSize.value = 200;
  }
}

onresize = () => {
  updateQrSize();
};

onMounted(() => {
  updateQrSize();
});
</script>

<template>
  <div class="qrcode-container">
    <a-card hoverable bordered class="qr-code-card" v-for="qrcode in qrcodes">
      <template #title>
        <a-typography-text style="font-size: 50px">
          {{ qrcode.name }}
        </a-typography-text>
        <br />
        <a-typography-text style="color: darkgray">请备注称呼、游戏ID和B站UID</a-typography-text>
      </template>
      <a-qrcode :size="qrSize" :value="qrcode.value" class="qrcode" />
    </a-card>
  </div>
</template>

<style scoped>
.qrcode-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.qr-code-card {
  margin: 8px;
}

.ant-qrcode {
  margin: auto;
}
</style>
