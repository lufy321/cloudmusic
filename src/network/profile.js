import {request} from "./request";

// 手机登录
export function phoneLogin(phone, password) {
  return request({
    url: `/login/cellphone/?phone=${phone}&password=${password}`
  })
}

// 获取用户的详情
export function userDetail(uid) {
  return request({
    url: `/user/detail?uid=${uid}`
  })
}