import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000', // 根路径，网关统一入口路径
    timeout: 5000 //请求超时时间，请求达到5秒，不让请求
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    // 如果有一个接口需要认证才可以访问，就在这里统一设置
    return config;
  }, error => {

  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data ? res.data : res;
  }, error => {

  })

  return instance(config)
}

