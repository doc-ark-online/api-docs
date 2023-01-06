import { PandoraSDKInterface } from 'metaapp-pandora-sdk'
import { onMounted, ref, watch, provide, computed } from 'vue'
import { detect } from 'detect-browser'
import { useData, useRoute, inBrowser } from 'vitepress'
const browser = detect()

let initPandora: undefined | PandoraSDKInterface
let cacheQuest: { key: string; value: Record<string, any> }[] = []

async function loadPandora() {
  ;(window as any)._API_HOST = () => {}
  initPandora = (await import(
    'metaapp-pandora-sdk'
  )) as unknown as PandoraSDKInterface

  initPandora.send(
    'config',
    {
      index_type: 'wl',
      selfpackagename: 'com.metaverse.creator.api',
      send_interval: 100,
      debug: false,
      env: 'prod',
      collectErrors: false,
      enableBridge: false,
      browser_name: browser?.name,
      browser_version: browser?.version,
      os_type: browser?.os,
      api_version: '020'
    } as any,
    {
      appkey: 'cDEwMTE2',
      zone: 'zh'
    }
  )
  initPandora.send('start')
  if (cacheQuest.length) {
    cacheQuest.forEach((i) => {
      pandora.send(i.key, i.value)
    })
  }
}

if (inBrowser) {
  loadPandora()
}

export const pandora = {
  send: (key: string, obj: Record<string, any>) => {
    if (initPandora) {
      initPandora.send(key, {
        ...obj,
        url: window.location.href
      })
    } else {
      cacheQuest.push({ key, value: obj })
    }
  }
}

export function usePandoraParams() {
  const { page } = useData()
  const pandoraParams = computed(() => {
    const [type, name] = page.value.relativePath.replace('.md', '').split('/')
    return {
      name,
      type
    }
  })
  return {
    name: pandoraParams.value.name,
    type: pandoraParams.value.type
  }
}

/** 处理 */
export function usePandoraView() {
  let hash = ref<string>()
  let timeer = ref(0)
  const route = useRoute()
  const pandoraParams = usePandoraParams()
  watch(
    () => route.path,
    (v, o) => {
      pandora.send('page_view_api', {
        name: pandoraParams.name,
        type: pandoraParams.type
      })
    }
  )
  watch(hash, (v, o) => {
    clearInterval(timeer.value)
    timeer.value = window.setTimeout(() => {
      pandora.send('page_view_api', {
        name: pandoraParams.name,
        type: pandoraParams.type,
        page_hash: v?.replace('#', '')
      })
    }, 3000)
  })

  onMounted(async () => {
    history.custorReplaceState = (data: any, unused: string, url?: string) => {
      history.replaceState(data, unused, url)
      hash.value = url
    }
    pandora.send('page_view_api', {
      name: pandoraParams.name,
      type: pandoraParams.type
    })
  })
}
