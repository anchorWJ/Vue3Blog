<template>
  <div class="min-h-screen mt-40 mb-16 mr-16 ml-16 bg-gray-300">
    <b-card-container :cardRecords="homeCardRecords" ></b-card-container>
  </div>
</template>

<script>
import BCardContainer from "@b/cardContainer.vue";
import { homeCardViewConfig } from "@vp/showCard/home.js";
export default {
  components: {
    BCardContainer,
  },
  setup() {
    const { homeCardRecords } = homeCardViewConfig
    return {
      homeCardRecords
    }
  },
};
</script>