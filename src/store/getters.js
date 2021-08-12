const getters = {
  lyricList(state) {
    let arr
    if(!state.lyric) {
      arr = [{lyric: '暂无歌词'}]
    }else {
      arr = state.lyric.split(/\n/igs).map(item => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));
        let mill = parseInt(item.slice(7, 10));

        return {
          min, sec, mill,
          lyric: item.slice(11, item.length),
          content: item,
          time: mill + sec * 1000 + min * 60 * 1000
        }
      })

      arr.forEach((item, i) => {
        if(i < arr.length-1) {
          item.next = arr[i+1].time
        }
      })
    }

    return arr
  }
}

export default getters