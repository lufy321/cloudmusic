<template>
  <div class="icon-item">
    <div class="top">
      <slot class="item-top" name="icon"></slot>
    </div>
    <div class="bottom">
      <slot class="item-bottom" name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconItem"
}
</script>

<style scoped>
  .icon-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
</style>