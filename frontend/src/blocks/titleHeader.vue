<template>
  <div class="bg-white h-28 grid grid-cols-2 gap-4 shadow-xl">
    <div>
      <img :src="avatar.src" alt="blog title image" class="max-h-24 pt-4 lg:pl-24 ">
    </div>
    <div class="justify-self-end pt-12 pr-36 max-h-20 flex gap-6 invisible sm:invisible md:invisible xl:visible">
      <div v-for="item of menu" @click="item.handle" :key="item.text" class="pl-4 text-base font-medium cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        {{ item.text }}
      </div>
      <div class="pt-3 pl-6">
        <hr width=50>
      </div>
      <div>
        <a href="https://twitter.com/oukacou" >
          <img :src="avatar.twitter" alt="twitter image" class="max-h-6 cursor-pointer">
        </a>
      </div>
      <div>
        <a href="https://github.com/anchorWJ" >
          <img :src="avatar.github" alt="github image" class="max-h-5 cursor-pointer">
        </a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
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