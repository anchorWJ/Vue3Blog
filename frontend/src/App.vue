<template>
  <div class="flex flex-col">
    <div class="fixed  z-20 min-w-full">
      <titleHeader :config="appViewConfig" />
    </div>
    <div class="z-10">
      <router-view />
    </div>
    <div>
      <titleFooter />
    </div> 
  </div>
</template>

<script>
import titleHeader from "@b/titleHeader.vue";
import { appViewConfig } from "@vp/showHeader/header.js";
import titleFooter from "@b/titleFooter.vue";

export default {
  name: "App",
  components: {
    titleHeader,
    titleFooter,
  },
  setup() {
    return {
      appViewConfig,
    };
  },
};
</script>