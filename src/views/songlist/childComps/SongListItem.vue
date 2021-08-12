<template>
  <div class="song-list-item">
    <div class="l-index">
      <slot name="number"></slot>
    </div>
    <div class="l-center">
      <div class="l-top">
        <slot name="songName"></slot>
      </div>
      <div class="l-bottom">
        <span>
          <slot name="songLabel"></slot>
        </span>
        <span>
          <slot name="songInfo"></slot>
        </span>
      </div>
    </div>
    <div class="l-btn">
      <div class="mv-slot">
        <slot name="mv"></slot>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo1"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongListItem"
}
</script>
<style scoped>
  .song-list-item {
    display: flex;
    align-items: center;
  }
  .song-list-item .l-center {
    width: 70%;
  }
  .song-list-item .l-index {
    text-align: center;
    flex: 1;
  }
  .song-list-item .l-bottom {
    margin-top: 5px;
    font-size: 12px;
  }
  .song-list-item .l-btn {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .song-list-item .l-btn .mv-slot {
    width: 20px;
    height: 20px;
  }
</style>