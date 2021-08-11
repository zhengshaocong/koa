import axios from 'axios'
import { Notify } from 'vant'
import { getToken } from '@/utils/auth'
import store from '@/store'
// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // withCredentials: true, // 当跨域请求时发送cookie
  timeout: process.env.NODE_ENV === 'production' ? 15000 : 15000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做些什么
    if (store.getters.token && !store.getters.register && !config.noToken) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // 请求错误怎么办
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  /**
   * 如果您想要获取http信息，如头信息或状态信息
   * Please return  response => response
  */

  /**
    *通过自定义代码确定请求状态
    *这里只是一个例子
    *你也可以通过HTTP状态码判断状态
   */
  response => {
    const res = response.data
    if (response.config.noError) {
      return res
    } else {
      if (Number(res.code) === 200 || (response.config.accident && res.code === '')) {
        return res
      } else {
        Notify({
          message: res.message,
          type: 'danger',
          duration: 2 * 1000
        })
        return Promise.reject(res)
      }
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
      Notify({
        message: '呀！网络开小差了。刷新一下试试吧',
        type: 'danger',
        duration: 2 * 1000
      })
      return Promise.reject(error) // reject这个错误信息
    } else {
      Notify({
        message: error.message,
        type: 'danger',
        duration: 2 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
