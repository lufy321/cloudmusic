<template>
  <div class="play-music">
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <svg class="icon" aria-hidden="true" @click="$emit('back')">
          <use xlink:href="#icon-jiantoufanhui-copy"></use>
        </svg>
      </template>
      <template v-slot:default>
        <div class="top-text">
          <marquee width="200" behavior="scroll" direction="left">{{playDetail.name}}</marquee>
        </div>
      </template>
      <template v-slot:right>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </template>
    </nav-bar>

    <div class="background" :style="{backgroundImage: `url(${playDetail.al.picUrl})`}"/>

    <div class="view" v-show="!show">
      <img class="needle" :class="{active: playState}" src="~assets/image/needle-ab.png" alt="">

      <div class="discContainer" @click="show=!show" :class="{discAnimation: $store.state.playState}">
        <img class="disc" src="~assets/image/disc.png" alt="">
        <img class="music-img" :src="playDetail.al.picUrl" alt="">
      </div>
    </div>
    <div class="lyric" v-show="show" @click="show=!show" ref="playLyric">
      <p :class="{activeCurrent: (currentTime * 1000 >= item.time && currentTime * 1000 < item.next)}" v-for="(item, index) in $store.getters.lyricList" :key="item">{{item.lyric}}</p>
    </div>

    <div class="btnlist" v-show="!show">
      <div class="btn">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang-o"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dashang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun-copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo2-copy"></use>
        </svg>
      </div>
    </div>
    <div></div>
    <div class="playcontrol">
      <div class="control">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-ziyuan4"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
          <use xlink:href="#icon-a-ziyuan16"></use>
        </svg>
        <svg class="icon music-play" @click="play" v-show="!($store.state.playState)" aria-hidden="true">
          <use xlink:href="#icon-a-ziyuan7"></use>
        </svg>
        <svg class="icon music-play" @click="play" v-show="($store.state.playState)" aria-hidden="true">
          <use xlink:href="#icon-a-ziyuan6"></use>
        </svg>
        <svg class="icon" aria-hidden="true"  @click="goPlay(1)">
          <use xlink:href="#icon-a-ziyuan17"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-ziyuan10"></use>
        </svg>
      </div>

    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {mapState, mapMutations} from 'vuex'
export default {
  name: "PlayMusic",
  components: {
    NavBar
  },
  data() {
    return {
      show: false,
      default() {
        return false
      }
    }
  },
  props: {
    playDetail: {
      type: Object,
      default() {
        return {}
      }
    },
    play: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goPlay(num) {
      let index = this.playCurrentIndex + num
      if(index<0) {
        index = this.playList.length -1
      }else if(index==this.playList.length) {
        index = 0
      }
      this.$store.commit('setPlayIndex', index)
    }
  },
  computed: {
    ...mapState(["playCurrentIndex", "playState",'lyric', 'currentTime', "playList"])
  },
  watch: {
    currentTime(newValue) {
      let p = document.querySelector('p.activeCurrent')
      if(p) {
        let offsetTop = p.offsetTop;
        this.$refs.playLyric.scrollTop = offsetTop - (18.4 + 5) * 11
      }
    }
  }
}
</script>

<style scoped>
  .play-music {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
  }
  .nav-bar {
    color: white;
  }
  .background {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    filter: blur(20px);
  }
  .view {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .needle {
    position: relative;
    width: 66px;
    height: 106px;
    left: 23px;
    z-index: 9;
    /*旋转*/
    transform: rotate(-25deg);
    transform-origin: 13px 13px;
    transition: transform 1s;
  }
  .active {
    transform: rotate(0deg);
  }
  .discContainer {
    position: relative;
    top: -49px;
    width: 210px;
    height: 210px;
  }
  .discAnimation {
    animation: disc 5s linear infinite;
  }
  /*
    @keyframes: 设置动画帧
      1) from to
      - 使用于简单的动画，只有起始帧和结束帧
      2) 百分比
      - 多用于复杂的动画，动画不止两帧
      - 0%~100% 可以任意拆分
   */
  @keyframes disc {
    from {
     transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .disc {
    position: relative;
    width: 207px;
    height: 207px;
  }
  .music-img {
    position: absolute;
    width: 130px;
    height: 130px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .lyric {
    text-align: center;
    height: 445px;
    width: 100vw;
    overflow: scroll;
    overflow-x: hidden;
  }
  .lyric p {
    margin-bottom: 5px;
  }
  .activeCurrent {
    color: white;
  }
  .btn {
    margin: auto;
    width: 300px;
    height: 20px;
    display: flex;
    justify-content: space-evenly;
  }
  .btnlist .icon {
    width: 20px;
    height: 20px;
  }
  .playcontrol {
    position: fixed;
    width: 100vw;
    bottom: 20px;
    left: 0;
  }
  .control {
    width: 320px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .control .icon {
    width: 20px;
    height: 20px;
  }
  .control .music-play {
    width: 40px;
    height: 40px;
  }
</style>