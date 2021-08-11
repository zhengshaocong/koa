/**
 * Created by PanJiaChen on 16/11/18.
 */
import { setToken, getToken, removeToken } from './auth'
// import { getUrlParam } from './public'
import md5 from 'js-md5'
import store from '@/store'
import router from '@/router'
/**
 * @param {Date,string,number} date
 */
export function NewDate(date) {
  if (date) {
    if (date instanceof Date || !isNaN(date * 1)) {
      return new Date(date)
    } else {
      return new Date(date.replace(/-/g, '/'))
    }
  } else {
    return new Date()
  }
}

/**
 * @description: app与h5 交互 获取token
 * @param {*} name 在token过期时 跳转的位置
 * @param {*} callback 获得token后的回调
 * @return {*}
 */
export function appGetInfo(name, callback) {
  if (!window.getInfo) {
    window.getInfo = function(token, uuid) {
      const oldToken = getToken()
      let time = 50
      if (oldToken !== token && oldToken && token) { // 验证token过期时回跳
        router.replace({ name: name })
        time = 300
      }
      removeToken()
      setTimeout(() => {
        if (token && uuid) {
          setToken(token.trim())
          store.commit('user/SET_USERDATE', { uuid: uuid.trim() })
          store.commit('user/SET_TOKEN', token.trim())

          if (oldToken === token && !store.getters.hasJurisdiction) { // 判断他有没有正常约课权限
            callback ? callback() : ''
          }
        } else {
          store.commit('user/SET_USERDATE', {})
          store.commit('user/SET_TOKEN', '')

          store.commit('app/SET_ISLOADING', true)
          store.dispatch('user/gologin', { userName: 13521047363, password: md5(888888 + 'pwd') }).finally(() => {
            if (!store.getters.hasJurisdiction && getToken()) { // 判断他有没有正常约课权限 若有则不用执行 若没有则执行
              callback ? callback() : ''
            }
          })
        }
      }, time)
    }
  }
}

/**
 * @description: 微信服务号 获取userid
 * @param {*}
 * @return {*}
 */
export function getWeChatOpenIdtoUserData() {
  console.log('微信')
}
// 是否是微信
export function isWeiXin() {
  const ua = window.navigator.userAgent.toLowerCase()
  return /microMessenger/ig.test(ua)
}
