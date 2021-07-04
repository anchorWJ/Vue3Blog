<template>
  <div class="flex flex-col mt-48 rounded-3xl ring-gray-800 shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-90" v-for="record of cardRecords" :key="record.id" @click="handler(record.id)">
    <div class="px-8 py-8">
      <div class="max-w-screen-sm">
        <img :src="record.cardImages" class="rounded-3xl" />
      </div>
      <div class="max-w-screen-sm flex-col mt-6">
        <div class="text-3xl font-medium">
          {{ record.title }}
        </div>
        <div class="text-xs flex space-x-4 mt-4 text-gray-400">
          <div class="mt-1.5">{{ record.createdAt }}</div>
          <div class="border-2 rounded-full py-1 px-2 border-gray-400">{{ record.type }}</div>
        </div>
        <div class="mt-4 text-base text-gray-600">
          {{ record.synopsis }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardRecords: {
      type: Array,
      default: () => []
    },
  },

  // pass handler prop to super component
  setup(props, { emit }){
    const handler = (id) => emit("handler", id)
    return {
      handler
    }
  }
};
</script>