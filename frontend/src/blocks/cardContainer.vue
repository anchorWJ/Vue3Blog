<template>
  <div class="flex flex-wrap gap-8">
    <!-- <a-card
      hoverable
      style="width: 240px"
      :extra="record.time"
      v-for="record of cardRecords"
      :key="record.id"
      @click="handler(record.id)"
    >
      <template #cover>
        <img alt="example" :src="record.image" />
      </template>
      <a-card-meta :title="record.title">
        <template #description>{{ record.synopsis }}</template>
      </a-card-meta>
    </a-card> -->
    <div class="flex flex-col gap-2 mb-24" v-for="record of cardRecords" :key="record.id">
      <div class="box-border h-80 w-96 p-4 border-4 rounded-t-lg bg-blue-400">

      </div>
      <div class="box-border h-36 w-96 p-4 border-4 rounded-b-lg flex-col bg-blue-400">
        <div class="text-xl font-extrabold">
          {{ record.title }}
        </div>
        <div class="text-lg">
          {{ record.synopsis }}
        </div>
        
          <div class="container mx-auto bg-green-500">
            {{ record.type }}
      
         
            {{ record.createdAt }}
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