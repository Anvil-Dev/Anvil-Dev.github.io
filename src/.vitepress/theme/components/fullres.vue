<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const fullres = document.createElement('script');
  fullres.async = true;
  fullres.src = 'https://t.fullres.net/anvilcraft.js?' + (new Date() - new Date() % 43200000);
  document.head.appendChild(fullres);
});
</script>

<template>
  <div class="fullres"></div>
</template>

<style scoped>
.fullres {
  display: none;
}
</style>