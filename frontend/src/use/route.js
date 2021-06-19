import { ref, watchEffect } from "vue"
import { useRoute } from "vue-router"

export const useLinkedRouteParam = (type, isNum = true) => {
  const route = useRoute()
  const currentParam = ref("")
  watchEffect(() => {
    const param = route.params[type]
    currentParam.value = isNum ? Number(param) : param
  })
  return currentParam
}

export const useRouteQuery = type => {
  const route = useRoute()
  return route.query[type]
}