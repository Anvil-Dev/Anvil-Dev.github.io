<script setup lang="ts">
import {VPTeamMembers} from 'vitepress/theme'
import authors from '../data/authors.json'
import contributors from '../data/contributors.json'
import supporters from '../data/supporters.json'
import {ref} from "vue";

const props = defineProps({
  type: {type: String, required: true}
})

const type = ref(props.type)
</script>

<template>
  <VPTeamMembers v-if="type === 'authors'" size="small" :members="authors"/>
  <VPTeamMembers v-if="type === 'contributors'" size="small" :members="contributors"/>
  <VPTeamMembers v-if="type === 'supporters'" size="small" :members="supporters"/>
</template>

<style scoped>

</style>
