<template>
  <div class="list">
    <list-item v-for="item in 4">
      <template v-slot:l-icon>
        <img class="icon" src="~assets/image/test.jpg" alt="">
      </template>
      <template v-slot:l-text>
        <div>Message - 家人</div>
        <div>流过泪后 便会变得坚强</div>
      </template>
        <template v-slot:l-mv>
          <svg class="a-icon" aria-hidden="true">
            <use xlink:href="#icon-mv"></use>
          </svg>
      </template>
    </list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "List",
  components: {
    ListItem
  }
}
</script>

<style scoped>
  .list {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .icon {
    width: 100px;
    height: auto;
    border-radius: 5px;
  }
  .a-icon {
    width: 20px;
    height: 20px;
  }
</style>