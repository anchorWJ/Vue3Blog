<template>
  <div class="min-h-screen grid grid-cols-2 gap-24 mt-20 mb-24 w-2/3 m-auto">
    <div>
      <b-card-container :cardRecords="homeCardLeftRecords"  @handler="handler" ></b-card-container>
    </div>
    <div>
       <b-card-container :cardRecords="homeCardRightRecords"  @handler="handler" ></b-card-container>
    </div>
  </div>
</template>

<script>
import BCardContainer from "@b/cardContainer.vue";
import { homeCardLeftViewConfig, homeCardRightViewConfig } from "@vp/showCard/home.js";
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
    const { homeCardLeftRecords } = homeCardLeftViewConfig
    const { homeCardRightRecords } = homeCardRightViewConfig
    // const pageNum = useLinkedRouteParam("pageNum")
    watchEffect(async () => {
      try {
        const res = await http.get(`/articles`)
        const homeCardLeft = new Array();
        const homeCardRight = new Array();
        for (var i = 0; i < res.data.rows.length; i=i+2) {
          homeCardLeft.push(res.data.rows[i])  
        }

        for (var j = 1; j < res.data.rows.length; j=j+2) {
          homeCardRight.push(res.data.rows[j])  
        }

        homeCardLeftRecords.value = homeCardLeft
        homeCardRightRecords.value = homeCardRight

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
      homeCardLeftRecords,
      homeCardRightRecords,
      handler,
      // limit,
      // total
    }
  },
};
</script>