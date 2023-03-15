<template>
  <Transition>
    <div
      ref="containerRef"
      v-show="isShow"
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
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import VPIconEdit from './icons/VPIconEdit.vue'
import { pandora, usePandoraParams } from '../composables/pandora-view'
const pandoraParams = usePandoraParams()
const xy = reactive({
  x: 0,
  y: 0
})
const scrollTop = ref(0)
// 记录显示反馈按钮时候的滚动条位置
const showScrollTop = ref(0)
const containerRef = ref<HTMLDivElement>()
const selectText = ref('')
// 单击反馈的时候文案选区会消失。用来保留最后一次选中的文本
const oldSelectText = ref('')
const isShow = ref(false)

watch(selectText, (v) => {
  if (v) {
    oldSelectText.value = v
  }
})

const style = computed(() => {
  if (containerRef.value) {
    return {
      left: xy.x + 'px',
      top: xy.y - scrollTop.value + showScrollTop.value + 'px'
    }
  } else {
    return {}
  }
})

function tapGithub() {
  pandora.send('feedback_click_api', {
    name: pandoraParams.name,
    type: pandoraParams.type
  })
  window.open(
    `https://github.com/prodigytech-doc/api-docs/issues/new?assignees=&labels=documentation&template=bug_report.yml&select-content=${encodeURIComponent(
      oldSelectText.value
    )}&url=${encodeURIComponent(window.location.href)}`
  )
}

onMounted(() => {
  useEventListener(window.document, 'selectionchange', () => {
    const text = window.getSelection()?.toString() ?? ''
    if (text.length === 0) {
      selectText.value = text
      isShow.value = false
    }
  })

  useEventListener('mouseup', (event) => {
    const text = window.getSelection()?.toString() ?? ''
    // 处理单击其他地方的时候反馈按钮位置保持不动
    if (isShow.value === false && text.length > 0) {
      xy.x = event.x
      xy.y = event.y
    }

    selectText.value = text
    if (text.length > 0) {
      isShow.value = true
      showScrollTop.value = document.documentElement.scrollTop
    } else {
      isShow.value = false
    }
  })

  useEventListener('scroll', (event) => {
    scrollTop.value = document.documentElement.scrollTop
  })
})
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
  font-size: 14px;
  width: 80px;
}

.edit-link-icon {
  margin-right: 8px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
