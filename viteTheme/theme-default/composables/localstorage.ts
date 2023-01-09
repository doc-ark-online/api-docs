import { Ref, watch, ref, ComputedRef } from 'vue'
type Status = '赞' | '踩'
export function useScoreStorage(key: Ref<string> | ComputedRef<string>) {
  const status = ref<Status>()
  const storageKey = `VitepressStore`
  const storage = dealStorage()

  watch(
    key,
    () => {
      status.value = storage.get(key.value)
    },
    { immediate: true }
  )

  return {
    status,
    statusChange
  }

  function statusChange(s: Status) {
    storage.set(key.value, s)
    localStorage.setItem(storageKey, JSON.stringify(Array.from(storage)))
    status.value = s
  }

  function dealStorage() {
    const scoreStr = localStorage.getItem(storageKey)
    let map = new Map<string, Status>()
    try {
      if (scoreStr) {
        map = new Map(JSON.parse(scoreStr) as [string, Status][])
      }
    } catch (error) {}
    return map
  }
}
