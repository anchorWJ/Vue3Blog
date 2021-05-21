<template>
  <div class="min-h-screen mt-32 mb-16 mr-16 ml-16 bg-gray-300">
    <b-card-container :cardRecords="swiftCardRecords" ></b-card-container>
  </div>
</template>

<script>
import BCardContainer from "@b/cardContainer.vue";
import { swiftCardViewConfig } from "@vp/showCard/swift.js";
export default {
  components: {
    BCardContainer,
  },
  setup() {
    const { swiftCardRecords } = swiftCardViewConfig
    return {
      swiftCardRecords
    }
  },
};
</script>