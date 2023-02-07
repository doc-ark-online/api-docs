import { useTextSelection, useMousePressed } from '@vueuse/core'
import { computed } from 'vue'

export function useSelectText() {
  const { pressed } = useMousePressed()
  const state = useTextSelection()

  const isShow = computed(() => {
    return !pressed.value && state.text.value.length > 0
  })

  return {
    selectText: state.text,
    textSelection: state,
    isShow
  }
}
