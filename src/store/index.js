import { createStore } from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const state = {
  playList: [
      {
        name: "22秒",
        id: 1849998058,
        al: {
          id: 128374941,
          name: "22秒",
          pic: 109951166053751860,
          picUrl: "http://p3.music.126.net/IfFINzaq3yqFSOCiCJbauw==/109951166053751852.jpg"
      }}],
  playState: false,
  playCurrentIndex: 0,
  lyric: '',
  currentTime: 0,
  intervalId: 0,
  user: {
    isLogin: false,
    account: {},
    userDeatil: {}
  }
}

export default createStore({
  state,
  actions,
  getters,
  mutations,
  modules: {
  }
})
