<template>
  <plate>
    <template v-slot:p-left>
      <h3>根据。。推荐</h3>
    </template>
    <template v-slot:p-right>
      <span class="play">&gt;播放</span>
    </template>
    <template v-slot:p-content>
      <list></list>
    </template>
  </plate>
</template>

<script>
import Plate from "components/content/plate/Plate";
import List from "components/content/list/List";
export default {
  name: "OnRecommend",
  components: {
    Plate,
    List
  }
}
</script>

<style scoped>
  .play {
    font-size: 12px;
    border-radius: 5px;
    padding: 3px;
    border: 1px solid #ccc;
  }
</style>