<template>
  <div class="song-list">
<!--    navbar部分-->
    <nav-bar>
      <template v-slot:left>
        <svg class="icon" aria-hidden="true" @click="$router.back(-1)">
          <use xlink:href="#icon-jiantoufanhui-copy"></use>
        </svg>
      </template>
      <template v-slot:default>
        <div class="gd-title">歌单</div>
      </template>
      <template v-slot:right>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bangzhu-copy"></use>
        </svg>
      </template>
    </nav-bar>

    <div class="bg">
      <img :src="playlist.coverImgUrl" alt="">
    </div>
    <div class="sl-head">
      <div class="left-img">
        <img :src="playlist.coverImgUrl" alt="">
        <div class="view-count">{{ changeValue(playlist.playCount) }}</div>
      </div>
      <div class="right-text">
        <h4 class="title">{{playlist.name}}</h4>
        <div class="user">
          <img :src="playlist.creator?.avatarUrl" alt="">
          <span>{{playlist.creator?.nickname}}&gt;</span>
        </div>
        <div class="info">
          {{playlist.description}}
        </div>
      </div>
    </div>

<!--    按钮部分-->
    <btn-list :count="count"></btn-list>

<!--    列表部分-->
    <div class="list">
      <div class="vip">
        <span class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yu"></use>
          </svg>
          <span>含6首VIP专享歌曲</span>
        </span>
        <span class="right">首开VIP仅5元&gt;</span>
      </div>

      <div class="play-btn">
        <span class="play">
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
          </svg>
          <span>播放全部(共{{playlist.tracks.length}}首)</span>
        </span>
        <span class="collect">{{"+ 收藏(" + changeValue(playlist.subscribedCount) + ")"}}</span>
      </div>
      <div class="list">
        <song-list-item v-for="(item, index) in playlist.tracks" :key="item.id" class="list-item" @click="play(index)">
          <template v-slot:number>
            {{index + 1}}
          </template>
          <template v-slot:songName>
            {{item.name}}
          </template>
          <template v-slot:songLabel>
            <span class="song-label" v-for="tag in playlist.tags" :key="tag">{{tag}}</span>
          </template>
          <template v-slot:songInfo>
            {{(item.alia[0] ? (item.ar[0].name + "-" + item.alia[0]) : item.ar[0].name)}}
          </template>
          <template v-slot:mv v-if="item.mv">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mv"></use>
            </svg>
          </template>
        </song-list-item>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import btnList from "components/content/btnlist/btnList";
import SongListItem from "./childComps/SongListItem";
import {getPlaylistDetail} from "network/songList";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {onMounted} from "vue";
import {ref, reactive, toRefs} from "vue";
export default {
  name: "SongList",
  components: {
    NavBar,
    btnList,
    SongListItem
  },
  methods: {
    play() {
      this.$refs.audio.play()
    }
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      playlist: {
        tracks: {}
      },
    })
    const count = reactive({
      commentCount: 0,
      shareCount: 0
    })
    const changeValue = (num) => {
      let res = num
      if(num >= 100000000) {
        res = num/100000000
        res = res.toFixed(2) + '亿'
      }else if(num > 10000) {
        res = num/10000
        res = res.toFixed(2) + '万'
      }
      return res
    }
    const play = (index) => {
      store.commit('setPlayIndex', index)
    }
    //生命函数
    onMounted(async () => {
      // 获取歌单详情
      const result = await getPlaylistDetail(route.query.id)
      state.playlist = result.playlist
      count.commentCount = result.playlist.commentCount
      count.shareCount = result.playlist.shareCount
      store.commit('setPlayList', state.playlist.tracks)
    })

    return {
      changeValue,
      ...toRefs(state),
      count,
      play
    }
  }
}
</script>

<style scoped>
  .song-list {
    margin-bottom: 50px;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
  .gd-title {
    color: white;
  }
  .bg img {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;
    filter: blur(20px); /* 模糊度 */
  }
  .sl-head {
    display: flex;
    color: white;
    margin: 20px 20px 0px 20px;
  }
  .sl-head .left-img {
    position: relative;
    margin-right: 20px;
  }
  .sl-head .left-img img {
    width: 120px;
    height: auto;
  }
  .sl-head .left-img .view-count {
    font-size: 13px;
    position: absolute;
    top: 2px;
    right:2px;
  }
  .sl-head .right-text .user {
    display: flex;
    font-size: 10px;
    height: 30px;
    align-items: center;
  }
  .sl-head .right-text img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .sl-head .right-text .info {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .list {
    font-size: 14px;
    margin-top: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: rgba(225, 225, 223, 0.8);
  }
  .list .vip {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list .vip .left {
    display: flex;
    align-items: center;
  }
  .list .vip .left .icon {
    margin-right: 8px;
  }
  .list .play-btn {
    padding: 10px;
    background: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: space-between;
  }
  .song-list .play-btn .play {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .song-list .play-btn .play .icon {
    margin-right: 8px;
  }
  .song-list .play-btn .collect {
    color: white;
    font-size: 12px;
    background: red;
    padding: 8px;
    border-radius: 30px;
  }
  .song-list .list {
    background: white;
  }
  .song-list .list .list-item {
    margin-bottom: 15px;
  }
  .song-list .list .list-item .song-label {
    border: 1px solid red;
    color: red;
  }
</style>