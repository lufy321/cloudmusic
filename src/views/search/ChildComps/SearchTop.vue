<template>
  <div class="search-top">
    <div class="search-navbar">
      <div class="left" @click="$router.back(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantoufanhui"></use>
        </svg>
      </div>
      <div class="center">
        <input type="text" class="find" v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyWord">
      </div>
    </div>

    <div class="history" v-show="searchSongs.length==0">
      <div class="history-title">
        历史:
      </div>
      <div class="history-list">
        <div @click="historySearch(item)" class="keywordItem" v-for="(item,i) in keywordList" :key="item">{{item}}</div>
        <div @click="delectKeyWord" class="all-delect">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shanchu"></use>
          </svg>
        </div>
      </div>
    </div>

    <div class="search-list" v-show="searchSongs.length!=0">
      <div class="play-btn">
        <span class="play">
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
          </svg>
          <span>播放全部(共{{searchSongs.length}}首)</span>
        </span>
        <span class="collect">+ 收藏全部</span>
      </div>
      <song-list-item v-for="(item, index) in searchSongs" :key="item.id" class="list-item" @click="setPlay(item)">
        <template v-slot:number>
          {{index + 1}}
        </template>
        <template v-slot:songName>
          {{item.name}}
        </template>
        <template v-slot:songInfo>
          {{(item.album.name ? (item.artists[0].name + "-" + item.album.name) : item.artists[0].name)}}
        </template>
        <template v-slot:mv v-if="item.mvid">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mv"></use>
          </svg>
        </template>
      </song-list-item>
    </div>

  </div>
</template>

<script>
import {searchMusic} from "network/search";
import SongListItem from "../../songlist/childComps/SongListItem";
export default {
  name: "SearchTop",
  components: {
    SongListItem
  },
  data() {
    return {
      placeholder: "陈奕迅",
      keywordList: [],
      searchKeyword: '',
      searchSongs: [],
    }
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.getItem('keywordList')) : []
  },
  methods: {
    saveKeyWord() {
      this.keywordList.push(this.searchKeyword)
      this.keywordList = Array.from(new Set(this.keywordList))
      // 限制搜索记录为10个，不保存之后的记录
      if(this.keywordList.length>10) {
        this.keywordList = this.keywordList.slice(1)
      }
      localStorage.setItem('keywordList', JSON.stringify(this.keywordList))
      searchMusic(this.searchKeyword).then(res => {
        this.searchSongs = res.result.songs
      })
      this.show = true;
    },
    delectKeyWord() {
      localStorage.removeItem("keywordList")
    },
    historySearch(keyword) {
      this.searchKeyword = keyword
      this.saveKeyWord()
    },
    setPlay(item) {
      item.al = item.album;
      item.al.picUrl = item.album.artist.img1v1Url
      this.$store.commit('pushPlayList', item)
      this.$store.commit('setPlayIndex', this.$store.state.playList.length-1)
    }
  }
}
</script>

<style scoped>
  .search-navbar {
    height: 45px;
    align-items: center;
    display: flex;
    text-align: center;
  }
  .search-navbar .left {
    width: 45px;
    height: auto;
  }
  .search-navbar .left .icon {
    width: 20px;
    height: 20px;
  }
  .search-navbar .center {
    text-align: left;
    flex: 1;
  }
  .search-navbar .center input {
    border: none;
    /*outline 属性在一个声明中设置所有轮廓属性*/
    outline: none;
    border-bottom: 1px solid #666;
  }
  .search-navbar .find {
    width: 255px;
  }
  .history {
    display: flex;
    margin: 8px;
  }
  .history .history-title {
    width: 40px;
    height: 30px;
    font-weight: bold;
    line-height: 30px;
    margin: 8px 8px;
  }
  .history-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
  }
  .history .keywordItem {
    font-size: 14px;
    border-radius: 10px;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    background: #F3F3F3;
    margin: 8px 8px;
  }
  .history .all-delect {
    position: absolute;
    right: 0;
    bottom: 15px;
  }

  /*列表样式*/

  .play-btn {
    padding: 10px;
    background: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: space-between;
  }
  .play-btn .play {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .play-btn .play .icon {
    margin-right: 8px;
  }
  .play-btn .collect {
    color: white;
    font-size: 12px;
    background: red;
    padding: 8px;
    border-radius: 30px;
  }

  .list-item {
    margin-bottom: 15px;
  }
</style>