import {request} from "./request";

export function getBanner(type = 1) {
  return request({
    url: `/banner?type=${type}`
  })
}

export function getMusicList(limit=4) {
  return request({
    url: `/personalized?limit=${limit}`
  })
}
