<template>
  <div style="float: right; display: flex; gap: 30px">
    <span
      :style="{
        color: status === '赞' ? 'var(--vp-c-brand)' : '#676D77',
        cursor: 'pointer'
      }"
      @click="praiseHandler"
      ><VPIconPraise></VPIconPraise
    ></span>
    <span
      @click="treadHandler"
      :style="{
        color: status === '踩' ? 'var(--vp-c-brand)' : '#676D77',
        cursor: 'pointer'
      }"
      ><VPIconTread></VPIconTread
    ></span>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { pandora, usePandoraParams } from '../composables/pandora-view'
import VPIconPraise from './icons/VPIconPraise.vue'
import VPIconTread from './icons/VPIconTread.vue'
const props = defineProps<{
  text: string
}>()
const pandoraParams = usePandoraParams()
// const { status, statusChange } = useScoreStorage(key)
const status = ref()
function treadHandler() {
  if (status.value === '踩') {
    statusChange(undefined)
    pandora.send('thumbs_up_click_api', {
      button: '取消踩',
      name: pandoraParams.name,
      type: pandoraParams.type,
      title: props.text
    })
  } else {
    statusChange('踩')
    pandora.send('thumbs_up_click_api', {
      button: status.value,
      name: pandoraParams.name,
      type: pandoraParams.type,
      title: props.text
    })
  }
}
function praiseHandler() {
  if (status.value === '赞') {
    statusChange(undefined)
    pandora.send('thumbs_up_click_api', {
      button: '取消赞',
      name: pandoraParams.name,
      type: pandoraParams.type,
      title: props.text
    })
  } else {
    statusChange('赞')
    pandora.send('thumbs_up_click_api', {
      button: status.value,
      name: pandoraParams.name,
      type: pandoraParams.type,
      title: props.text
    })
  }
}

function statusChange(s?: string) {
  status.value = s
}
</script>
