import VPTheme from 'metaapp-prodigytech-doc-theme'
import { useRoute } from 'vitepress'
import { watch, onMounted } from 'vue'
import mediumZoom, { Zoom } from 'medium-zoom'
import './index.css'

export default {
  ...VPTheme,
  setup() {
    const route = useRoute()
    let zoom: Zoom | undefined
    watch(route, () => {
      zoom?.detach()
      setTimeout(() => {
        zoom = mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
      })
    })

    onMounted(() => {
      zoom = mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    })
  }
}
