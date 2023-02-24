<script lang="ts" setup>
import { computed } from 'vue'
import { normalizeLink } from '../support/utils.js'
import VPIconExternalLink from './icons/VPIconExternalLink.vue'
import { EXTERNAL_URL_RE } from '../../shared.js'

const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()
const isExternal = computed(
  () => props.href && EXTERNAL_URL_RE.test(props.href)
)
function tapPath() {
  const path = props.href ? normalizeLink(props.href) : undefined
  const { pathname, hash } = window.location
  window.open(path + pathname.slice(1, pathname.length) + hash)
}
</script>

<template>
  <span @click="tapPath" class="VPLink" :class="{ link: href }">
    <slot />
    <VPIconExternalLink v-if="isExternal && !noIcon" class="icon" />
  </span>
</template>

<style scoped>
.VPLink {
  cursor: pointer;
}
.icon {
  display: inline-block;
  margin-top: -1px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  fill: var(--vp-c-text-3);
  transition: fill 0.25s;
}
</style>
