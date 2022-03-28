import axios from "axios"

const request = axios.create({
  timeout: 5000,
  // baseURL: "http://127.0.0.1:8080", //前端已设置proxy代理 不需要
})

// 前置拦截器，设置统一请求前缀
request.interceptors.request.use((config) => {
  config.url = "/api" + config.url
  return config
})

//拦截器 统一处理响应数据
request.interceptors.response.use((res) => {
  // 正常的应该根据状态码判断
  if (res.status === 200) {
    return res
  } else {
    console.log(res.statusText)
  }
})

export default request
