<template>
  <div class="min-h-screen flex flex-col gap-12 mb-16 mt-32 lg:mr-16 lg:ml-16">
    <div class="place-self-center font-medium text-2xl lg:text-5xl">
      {{ article.title }}
    </div>
    <div class="text-sm flex space-x-8 place-self-center text-gray-400">
      <div class="mt-1">{{ article.createdAt }}</div>
      <div class="border-2 rounded-full py-1 px-2 border-gray-400">{{ article.type }}</div>
    </div>
    <div class="place-self-center sm:w-full lg:w-1/2">
      <img :src="article.cardImages" class="rounded-3xl" />
    </div>
    <div class="grid grid-cols-1  w-full lg:w-3/5 place-self-center rounded-3xl ring-gray-800 shadow-2xl">
      <div class="w-5/6 place-self-center pt-16 pb-16 sm:text-base lg:text-xl">
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