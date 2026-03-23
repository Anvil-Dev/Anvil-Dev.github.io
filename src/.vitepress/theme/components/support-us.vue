<script lang="ts" setup>
import SupportUSData from '../data/support_us.json'
import QRCode from 'qrcode'
import {onMounted, ref} from 'vue';

const supportData = ref(SupportUSData);

onMounted(() => {
  supportData.value.forEach((item, index) => {
    const canvas = document.getElementById(`canvas-${index}`) as HTMLCanvasElement;
    if (canvas) {
      QRCode.toCanvas(canvas, item.value, {width: 200, margin: 2}, function (error) {
        if (error) console.error(error);
      });
    }
  });
});
</script>
<template>
  <div class="support-us-container">
    <div v-for="(item, index) in supportData" :key="index" class="support-item">
      <h3>{{ item.name }}</h3>
      <canvas :id="`canvas-${index}`" height="200" width="200"/>
    </div>
  </div>
</template>

<style scoped>
.support-us-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.support-item {
  text-align: center;
}

.support-item h3 {
  margin-bottom: 1rem;
}

canvas {
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
