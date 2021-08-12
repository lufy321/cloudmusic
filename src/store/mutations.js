const mutations = {
  setPlayList(state, value) {
    state.playList = value
  },
  pushPlayList(state, value) {
    state.playList.push(value)
  },
  setPlayIndex(state, value) {
    state.playCurrentIndex  = value
  },
  setPlayState(state, value) {
    state.playState = value
  },
  setLyric(state, value) {
    if(value.lrc?.lyric) {
      state.lyric = value.lrc.lyric
    }else {
      state.lyric = ''
    }
  },
  setCurrentTime(state, value) {
    state.currentTime = value
  },
  setUser(state, value) {
    state.user = value
  },
}

export default mutations;