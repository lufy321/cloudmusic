import {request} from "./request";

export function searchMusic(keyword) {
  return request({
    url: `/search?keywords=${keyword}`
  })
}