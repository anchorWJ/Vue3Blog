<template>
  <div class="grid grid-cols-2 gap-8 justify-items-center">
    <a-card
      hoverable
      style="width: 240px"
      :extra="record.time"
      v-for="record of cardRecords"
      :key="record.id"
    >
      <template #cover>
        <img alt="example" :src="record.image" />
      </template>
      <a-card-meta :title="record.title">
        <template #description>{{ record.content }}</template>
      </a-card-meta>
    </a-card>
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
};
</script>