<template>
  <div
    v-if="isShow"
    class="feedback"
    :style="[style]"
    style="z-index: var(--vp-z-index-sidebar)"
    @click="tapGithub"
  >
    <VPIconEdit class="edit-link-icon" />
    <span>反馈</span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useSelectText } from '../composables/select-text'
import VPIconEdit from './icons/VPIconEdit.vue'
const { selectText, isShow, textSelection } = useSelectText()
const style = computed(() => {
  const { x, y, width } = textSelection.rects.value[0]
  return {
    left: x + width + 10 + 'px',
    top: y - 40 + 'px'
  }
})

function tapGithub() {
  window.open()
}
</script>
<style scoped>
.feedback {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100px;
  color: var(--vp-c-brand);
  cursor: pointer;
}

.edit-link-icon {
  margin-right: 8px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}
</style>
