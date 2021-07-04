<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="fixed z-20 min-w-full">
      <titleHeader :config="appViewConfig" />
    </div>
    <div class="z-10">
      <transition name="fade" mode="out-in" appear>
      <router-view />
      </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>