<template>
  <van-swipe class="my-swipe" :autoplay="3000" lazy-render indicator-color="white">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img :src="item.pic" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swipe",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },

}
</script>

<style>
  .van-swipe-item img{
    border-radius: 5px;
    height: auto;
    width: 100%;
  }
</style>