<template>
  <div class="min-h-screen flex flex-col gap-12 mt-64 mb-16 mr-16 ml-16">
    <div class="text-5xl font-medium place-self-center">
      {{ article.title }}
    </div>
    <div class="text-sm flex space-x-8 place-self-center text-gray-400">
      <div class="mt-1">{{ article.createdAt }}</div>
      <div class="border-2 rounded-full py-1 px-2 border-gray-400">{{ article.type }}</div>
    </div>
    <div class="place-self-center w-2/3">
      <img :src="article.cardImages" class="rounded-3xl" />
    </div>
    <div class="grid grid-cols-1 w-2/3 place-self-center rounded-3xl ring-gray-800 shadow-2xl">
      <div class="text-lg w-2/3 place-self-center pt-24">
        <main v-html="article.content"></main>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue"
import { useLinkedRouteParam } from "@u/route.js"
import 'highlight.js/styles/androidstudio.css';
import http from "@u/http.js"
import { useWarningNotice } from "@u/notification.js"
import "wangeditor"

export default {
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
    },
    {
      // flush表示回调调用时机 
      // post在组件更新之后，pre组件更新之前，sync同步调用
      flush: "post"
    })

    return {
      article
    }
  }
};
</script>