<template>
  <!-- <div class="flex flex-col w-full m-auto rounded-3xl bg-gray-600  ring-gray-800 shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-90" v-for="record of cardRecords" :key="record.id" @click="handler(record.id)"> -->
  <div class="flex flex-col w-full m-auto rounded-3xl bg-gray-600  ring-gray-800 shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-90" v-for="record of cardRecords" :key="record.id" @click="handler(record.id)">  
    <div class="grid grid-rows- grid-flow-col gap-4">
      <div class="row-span-2 col-span-2 m-auto bg-green-300">
        <img :src="record.cardImages" class="rounded-l-3xl " />
      </div>
      <div class="max-w-lg row-span-2 col-span-3 mt-6">
        <div class="text-2xl font-medium">
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