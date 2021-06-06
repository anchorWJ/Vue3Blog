import { watchEffect, ref } from "vue"

export const useLocalStorage = key => {
  const storage = ref(localStorage.getItem(key))

  const stop = watchEffect(() => {
    localStorage.setItem(key, storage.value || "")
  })
  
  return [ storage, stop ]
}