<template>
  <div class="list-item">
    <div class="l-left">
      <slot name="l-icon"></slot>
    </div>

    <div class="l-right">
      <div class="left">
        <slot class="text" name="l-text"></slot>
      </div>
      <div class="right">
        <slot class="mv" name="l-mv"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem"
}
</script>

<style scoped>
  .list-item {
    margin-top: 8px;
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
  }
  .left {
    display: flex;
    height: 50px;
    flex-direction: column;
    justify-content: space-between;
  }
  .l-left {
    display: flex;
    margin-right: 8px;
  }
  .l-right {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
</style>