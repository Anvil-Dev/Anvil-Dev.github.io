<script lang="ts" setup>
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
  <VPTeamMembers v-if="type === 'authors'" :members="authors" size="small"/>
  <VPTeamMembers v-if="type === 'contributors'" :members="contributors" size="small"/>
  <VPTeamMembers v-if="type === 'supporters'" :members="supporters" size="small"/>
</template>

<style scoped>

</style>
