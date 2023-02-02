<template>
  <Transition name="fade" mode="out-in">
    <div
      ref="container"
      v-if="isShow"
      class="feedback"
      :style="[style]"
      style="z-index: var(--vp-z-index-sidebar)"
      @click="tapGithub"
    >
      <VPIconEdit class="edit-link-icon" />
      <span>反馈</span>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useTextSelection, useMousePressed } from '@vueuse/core'
import VPIconEdit from './icons/VPIconEdit.vue'
const { pressed } = useMousePressed()
const state = useTextSelection()
const selectText = ref('')

const isShow = computed(() => {
  return !pressed.value && state.text.value.length > 0
})

const style = computed(() => {
  const { x, y, width } = state.rects.value[0]
  return {
    left: x + width - 50 + 'px',
    top: y - 40 + 'px'
  }
})

watch(state.text, (val, old) => {
  if (val) {
    selectText.value = val
  } else {
    selectText.value = old
  }
})

function tapGithub() {
  console.log(window.location.href)
  window.open(
    `https://github.com/prodigytech-doc/api-docs/issues/new?assignees=&labels=bug&template=bug_report.yml&select-content=${encodeURIComponent(
      selectText.value
    )}&url=${encodeURIComponent(window.location.href)}`
  )
}
</script>
<style scoped>
.feedback {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  position: fixed;
  display: flex;
  align-items: center;
  color: var(--vp-c-brand);
  cursor: pointer;
  padding: 4px 12px;
  background-color: white;
  border: 1px solid #dee0e3;
  border-radius: 8px;
}

.edit-link-icon {
  margin-right: 8px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
