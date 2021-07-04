<template>
  <div class="bg-white h-28 grid grid-cols-2 gap-4 shadow-xl">
    <div>
      <img :src="avatar.src" class="max-h-24 pl-24 pt-4">
    </div>
    <div class="justify-self-end pt-12 pr-36 max-h-20 flex gap-6">
      <div v-for="item of menu" @click="item.handle" :key="item.text" class="pl-4 text-base font-medium cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        {{ item.text }}
      </div>
      <div class="pt-3 pl-6">
        <hr width=50>
      </div>
      <div>
        <a href="https://twitter.com/oukacou" >
          <img :src="avatar.twitter" class="max-h-6 cursor-pointer">
        </a>
      </div>
      <div>
        <a href="https://github.com/anchorWJ" >
          <img :src="avatar.github" class="max-h-5 cursor-pointer">
        </a>
      </div>
    </div>

    <!-- <a-page-header class="">
      <template #title class="pr-16 pb-10">
        <img :src="avatar.src" class="max-h-52">
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
    </a-page-header> -->
  </div>
</template>

<script>


export default {
  components: {

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