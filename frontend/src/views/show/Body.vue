<template>
  <div class="min-h-screen flex mt-40 mb-16 mr-16 ml-16 bg-gray-300">
    <div class="flex-grow w-8">
    <!-- This item will grow or shrink as needed -->
  </div>
   <div class="flex-shrink w-5/6 justify-self-center">
    <b-card-container :cardRecords="homeCardRecords"  @handler="handler" ></b-card-container>
   </div>
   <div class="flex-grow w-8">
    <!-- This item will grow or shrink as needed -->
  </div>
  </div>
</template>

<script>
import BCardContainer from "@b/cardContainer.vue";
import { homeCardViewConfig } from "@vp/showCard/home.js";
import http from "@u/http.js"
import { watchEffect } from '@vue/runtime-core';
// import { useLinkedRouteParam } from "@u/route.js"
import { useWarningNotice } from "@u/notification.js"
import { useRoutePathToPage } from "@u/router.js"

export default {
  components: {
    BCardContainer,
  },
  setup() {
    const { homeCardRecords } = homeCardViewConfig
    // const pageNum = useLinkedRouteParam("pageNum")
    watchEffect(async () => {
      try {
        const res = await http.get(`/articles`)
        homeCardRecords.value = res.data.rows
        console.log(res)
      } catch (error) {
        useWarningNotice({
          message: "Get article failed!",
          description: error.reason || error.data || "unknow error"
        })
      }
    },
    {
      flush: "post"
    })

    // get handler prop from child component
    const handler = id => {
      const toPage = useRoutePathToPage(`/details/${id}`)
      toPage()
    }
    return {
      homeCardRecords,
      handler,
      // limit,
      // total
    }
  },
};
</script>