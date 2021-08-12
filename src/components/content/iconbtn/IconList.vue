<template>
  <div class="icon-list">
    <icon-item>
      <template v-slot:icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-meirituijian"></use>
        </svg>
      </template>
      <template v-slot:text>
        每日推荐
      </template>
    </icon-item>

    <icon-item>
      <template v-slot:icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sirenFM"></use>
        </svg>
      </template>
      <template v-slot:text>
        私人FM
      </template>
    </icon-item>

    <icon-item>
      <template v-slot:icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gedan"></use>
        </svg>
      </template>
      <template v-slot:text>
        歌单
      </template>
    </icon-item>

    <icon-item>
      <template v-slot:icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihangbang"></use>
        </svg>
      </template>
      <template v-slot:text>
        排行榜
      </template>
    </icon-item>
  </div>
</template>

<script>
import IconItem from "./IconItem";
export default {
  name: "IconList",
  components: {
    IconItem
  }
}
</script>

<style scoped>
  .icon-list {
    display: flex;
    justify-content: space-around;
  }
  .icon {
    width: 40px;
    height: 40px;
  }
</style>