<template>
  <div class="recommend">
    <plate>
      <template v-slot:p-left>
        <h3>推荐歌单</h3>
      </template>
      <template v-slot:p-right>
        <span class="more">更多&gt;</span>
      </template>
      <template v-slot:p-content>
        <pane v-for="item in musicList" :key="item.id"  @click="goTo(item.id)">
          <template v-slot:p-icon>
            <img class="icon" :src="item.picUrl" alt="">
          </template>
          <template v-slot:view-counts>
            {{ changeValue(item.playCount) }}
          </template>
          <template v-slot:title>
            {{item.name}}
          </template>
        </pane>
      </template>
    </plate>
  </div>
</template>

<script>
import Pane from "components/content/pane/Pane";
import Plate from "components/content/plate/Plate";
import {useRouter} from "vue-router"
import {ref} from "vue";

export default {
  name: "Recommend",
  components: {
    Plate,
    Pane
  },
  props: {
    musicList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const router = useRouter()
    const goTo = (id) => {
      router.push({path: "/songlist", query: {id}})
    }
    const changeValue = (num) => {
      let res = ref(0)
      if(num >= 100000000) {
        res = num/100000000
        res = res.toFixed(2) + '亿'
      }else if(num > 10000) {
        res = num/10000
        res = res.toFixed(2) + '万'
      }
      return res
    }

    return {
      changeValue,
      goTo
    }
  }
}
</script>

<style scoped>
  .recommend {
    width: 100vw;
  }
  .icon {
    width: 100%;
    height: auto;
  }
  .more {
    font-size: 12px;
    border-radius: 5px;
    padding: 3px;
    border: 1px solid #ccc;
  }
</style>