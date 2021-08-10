<template>
  <div class="grid grid-cols-2 w-3/5 m-auto mt-64 mb-24">
    <div class="max-w-lg flex flex-col">
      <div>
        <img :src="image" class="rounded-3xl" />
      </div>
      <div class="text-gray-400 text-base place-self-center mt-2"> 
        <p>屋久岛- 2020.11</p>
      </div>
    </div>
    <div class="max-w-3xl">
      <img :src="text" />
    </div>
  </div>
</template>

<script>

export default {
    setup() {
      const image = "https://myblogimage.s3.ap-northeast-1.amazonaws.com/AboutPage/AboutPageCover.png"
      const text = "https://myblogimage.s3.ap-northeast-1.amazonaws.com/AboutPage/AboutPageText.png"
      return {
        image,
        text
      }
    }
}
</script>