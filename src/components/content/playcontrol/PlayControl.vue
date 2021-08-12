<template>
  <div class="play-control">
    <div class="left" @click="show=!show">
      <div class="record">
        <img :src="playList[playCurrentIndex].al.picUrl" alt="">
      </div>
      <div class="music-info">
        <div class="m-top">{{playList[playCurrentIndex].name}}</div>
        <div class="m-bottom">橫滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <div class="pc-btn">
      <span class="play">
        <svg v-show="!playState" class="icon" aria-hidden="true" @click="play">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg v-show="playState" class="icon" aria-hidden="true" @click="play">
          <use xlink:href="#icon-zanting"></use>
        </svg>
      </span>
        <span class="music-list">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofangliebiao"></use>
        </svg>
      </span>
      </div>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playCurrentIndex].id}.mp3`"></audio>
    <play-music :play="play" @back="show=!show" v-show="show" :playDetail="playList[playCurrentIndex]"></play-music>
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex"
import PlayMusic from "../playmusic/PlayMusic";
export default {
  name: "PlayControl",
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['playState', 'playList', 'playCurrentIndex'])
  },
  mounted() {
    this.$store.dispatch('reqLyric', this.playList[this.playCurrentIndex].id)
  },
  updated() {
    this.$store.dispatch('reqLyric', this.playList[this.playCurrentIndex].id)
  },
  components: {
    PlayMusic
  },
  methods: {
    play() {
      if(!this.playState) {
        this.$refs.audio.play()
        this.$store.commit('setPlayState', true)
        this.UpdateTime()
      }else{
        this.$refs.audio.pause()
        this.$store.commit('setPlayState', false)
        clearInterval(this.$store.state.id)
      }
    },
    UpdateTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
      }, 1000)
    }
  },

}
</script>

<style scoped lang="scss">
  .play-control {
    padding: 0 8px;
    background: #FFFFFF;
    box-shadow: #666666 ;
    display: flex;
    width: 100vw;
    height: 45px;
    z-index: 9;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
    }
    .record {
      height: 40px;
      width: 40px;
      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
    }
    .music-info {
      margin-left: 6px;
      font-size: 13px;
    }
    .pc-btn {
      .play {
        margin-right: 8px;
      }
      .icon {
        width: 25px;
        height: 25px;
      }
    }
  }
</style>