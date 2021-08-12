<template>
  <div class="pane">
    <div class="icon">
      <slot name="p-icon"></slot>
      <div class="icon-position">
        <slot name="view-counts"></slot>
      </div>

    </div>
    <div class="text">
      <slot name="title"></slot>
    </div>

  </div>
</template>

<script>

export default {
  name: "Pane",

}
</script>

<style scoped>
  .pane {
    display: flex;
    width: 23%;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: auto;
  }
  .icon-position {
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 0;
    color: white;
  }
  .text {
    font-size: 13px;
    width: 100%;
    /* 多行文本隐藏 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical; /* 设置对齐模式 */
    -webkit-line-clamp: 2; /* 设置盒子行数 */
  }
</style>