<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import authors from '../data/authors.json'
import contributors from '../data/contributors.json'
import supporters from '../data/supporters.json'
import { avatarColor, initials } from './member-avatar'

const lists = { authors, contributors, supporters }
const bundledAvatars = new Set(authors.map(author => author.avatar))
const props = defineProps<{ type: keyof typeof lists }>()
const { lang } = useData()
const englishRoles: Record<string, string> = {
  '创艺大师🎨🤔': 'Creative Lead 🎨🤔',
  '代码民工💻': 'Developer 💻',
  '捉虫达人🐞': 'Bug Hunter 🐞',
  '语言学家🌏': 'Translator 🌏',
  '砧艺添材➕': 'Content Contributor ➕',
  '像素工匠👾': 'Pixel Artist 👾',
  '智识学者📚': 'Researcher 📚',
  '实力富哥💵': 'Supporter 💵',
}
const members = computed(() => {
  const entries = lists[props.type]
  if (lang.value !== 'en') return entries
  return entries.map(member => ({
    ...member,
    title: member.title.split(' ').map(role => englishRoles[role] ?? role).join(' · '),
  }))
})
</script>

<template>
  <VPTeamMembers v-if="type === 'authors'" :members="members" size="small" />
  <ul v-else class="archived-members">
    <li v-for="(member, index) in members" :key="member.name + index">
      <img v-if="bundledAvatars.has(member.avatar)" class="avatar" :src="withBase(member.avatar)" alt="" loading="lazy" />
      <span v-else class="avatar" aria-hidden="true" :style="{ backgroundColor: avatarColor(member.name) }">{{ initials(member.name) }}</span>
      <div>
        <strong>{{ member.name }}</strong>
        <div>{{ member.title }}</div>
        <a v-for="social in member.links" :key="social.link" :href="social.link" target="_blank" rel="noopener">
          {{ social.icon === 'github' ? 'GitHub' : social.icon === 'bilibili' ? 'Bilibili' : social.icon }}
        </a>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.archived-members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 190px), 1fr));
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  li {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    margin: 0;
    padding-block: 0.5rem;
    border-bottom: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-2);
    font-size: 0.86rem;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }
  strong { color: var(--vp-c-text-1); }
  a + a { margin-inline-start: 0.5em; }
  .avatar {
    flex: none;
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: #27272a;
    font-weight: 700;
    object-fit: cover;
  }
}
</style>
