<template>
  <div class="btn-list">
    <btn-item class="sl-btn">
      <template v-slot:bi-icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-pinglun"></use>
        </svg>
      </template>
      <template v-slot:default>
        {{ count.commentCount }}
      </template>
    </btn-item>

    <btn-item class="sl-btn">
      <template v-slot:bi-icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </template>
      <template v-slot:default>
        {{ count.shareCount }}
      </template>
    </btn-item>

    <btn-item class="sl-btn">
      <template v-slot:bi-icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
      </template>
      <template v-slot:default>
        下载
      </template>
    </btn-item>

    <btn-item class="sl-btn">
      <template v-slot:bi-icon>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuanxuanze"></use>
        </svg>
      </template>
      <template v-slot:default>
        多选
      </template>
    </btn-item>
  </div>
</template>

<script>
import btnItem from "./btnItem";
export default {
  name: "btnList",
  components: {
    btnItem
  },
  props: {
    count: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .btn-list {
    display: flex;
    justify-content: space-evenly;
    color: white;
    margin-top: 20px;
  }
</style>