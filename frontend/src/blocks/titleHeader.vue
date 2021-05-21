<template>
  <div class="bg-gray-100 shadow-xl">
    <a-page-header class="pt-12 ">

      <template #title class="pr-16">
        <a-avatar
          :src="avatar.src"
          :size="avatar.size || 'large'"
          :shape="avatar.square || 'square'">
        </a-avatar>
      </template>

      <template #tags class="pr-16">
        <a-tag 
          v-for="tag of tags" 
          :color="tag.color" 
          :key="tag.text">
          {{ tag.text }}
        </a-tag>
      </template>

      <template #extra > 
        <a-button class="pr-6 pl-6 font-extrabold text-gray-700"
          v-for="item of menu"
          @click="item.handle"
          :type="item.type"
          :key="item.text" >
          {{ item.text }}
        </a-button>
      </template>

    </a-page-header>
  </div>
</template>

<script>
import { PageHeader } from "ant-design-vue";

export default {
  components: {
    APageHeader: PageHeader,
  },
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { avatar = {}, tags = [], menu = [] } = props.config || {};
    return {
      avatar,
      tags,
      menu,
    };
  },
};
</script>