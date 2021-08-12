import {request} from "./request";

export function getPlaylistDetail(id) {
  return request({
    url: `/playlist/detail?id=${id}`
  })
}

// 获取歌词
export function getLyric(id) {
  return request({
    url: `/lyric?id=${id}`
  })
}