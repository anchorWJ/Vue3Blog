<template>
  <div class="min-h-screen mt-32 mb-16 mr-16 ml-16 bg-gray-300">
    <h1>{{ article.title }}</h1>
    <a-tag color="#42A5F5">{{ article.type }}</a-tag>
    <a-alert :message="article.synopsis" type="info" class="synopsis" v-if="article.synopsis"></a-alert>
    <main v-html="article.content"></main>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue"
import { Alert } from "ant-design-vue"
import { useLinkedRouteParam } from "@u/route.js"
import http from "@u/http.js"
import { useWarningNotice } from "@u/notification.js"

export default {
  components: {
    AAlert: Alert
  },
  setup() {
    const id = useLinkedRouteParam("id")
    const article = ref({})

    watchEffect(async () => {
      try {
        const res = await http.get(`/articles/${id.value}`)
        article.value = res.data
      } catch (error) {
        useWarningNotice({
          message: "get article failed!",
          description: error.data || error.reason || "unkown error"
        })
      }
    })

    return {
      article
    }
  }
};
</script>