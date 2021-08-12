<template>
  <div class="find">
    <find-nav-bar class="find-nav-bar"/>
    <div class="wrapper">
      <swipe class="find-swipe" :banners="banners"/>
      <icon-list/>
      <recommend class="recommend" :musicList="musicList"/>
      <on-recommend class="on-recommend"/>
    </div>
  </div>
</template>

<script>
import {getMusicList} from "network/find";
import FindNavBar from "components/content/findnavbar/FindNavBar";
import Plate from "components/content/plate/Plate";
import Recommend from "./ChildComps/Recommend";
import OnRecommend from "./ChildComps/OnRecommend";
import {getBanner} from "network/find";
import Swipe from "components/common/swipe/Swipe";
import IconList from "components/content/iconbtn/IconList";
import List from "components/content/list/List";
import {provide, ref} from "vue";
export default {
  name: "Find",
  components: {
    FindNavBar,
    Swipe,
    IconList,
    Recommend,
    OnRecommend,
    List,
    Plate
  },
  setup() {
    let banners = ref([]);
    let musicList = ref([]);
    getBanner().then(res => {
      banners.value = res.banners;
    })
    getMusicList().then(res => {
      musicList.value = res.result;
    })
    return {
      banners,
      musicList
    };
  },
}
</script>

<style>
  .wrapper {
    margin-bottom: 45px;
  }
  .find-nav-bar {
    background: white;
    z-index: 9;
    position: sticky;
    top: 0;
    left: 0;
  }
  .find-swipe {
    margin: 8px;
  }
  .recommend {
    margin-top: 10px;
  }
</style>