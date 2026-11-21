<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QRCode from 'qrcode'
import methods from '../data/support_us.json'

const props = withDefaults(defineProps<{ lang?: 'zh' | 'en' }>(), { lang: 'zh' })
const canvases = ref<HTMLCanvasElement[]>([])
const failed = ref<string[]>([])
const labels: Record<string, string> = { '支付宝': 'Alipay', '微信': 'WeChat Pay' }
const label = (name: string) => props.lang === 'en' ? (labels[name] ?? name) : name

onMounted(async () => {
  await Promise.all(canvases.value.map(async canvas => {
    const url = canvas.dataset.value
    if (!url) return
    try {
      await QRCode.toCanvas(canvas, url, { width: 200, margin: 2 })
    } catch {
      failed.value.push(url)
    }
  }))
})
</script>

<template>
  <div class="support-us-container">
    <div v-for="method in methods" :key="method.value" class="support-item">
      <h3>{{ label(method.name) }}</h3>
      <canvas v-show="!failed.includes(method.value)" ref="canvases" :data-value="method.value"
        width="200" height="200" role="img" :aria-label="label(method.name) + (lang === 'en' ? ' QR code' : '付款码')" />
      <a v-if="failed.includes(method.value)" :href="method.value">{{ label(method.name) }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.support-us-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  .support-item {
    text-align: center;
    h3 { margin-bottom: 1rem; }
  }
  canvas { border: 1px solid #ddd; border-radius: 4px; }
}
</style>
