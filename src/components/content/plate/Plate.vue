<template>
  <div class="plate">
    <div class="p-top">
      <slot name="p-left"></slot>
      <slot name="p-right"></slot>
    </div>
    <div class="p-bottom">
      <slot name="p-content"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "Plate",
  components: {

  }
}
</script>

<style scoped>
  .plate {
    margin: 8px;
  }
  .p-top {
    display: flex;
    justify-content: space-between;
  }
  .p-bottom {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
</style>