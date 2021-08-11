/*
 * @Author: your name
 * @Date: 2021-01-18 14:25:58
 * @LastEditTime: 2021-07-21 13:51:10
 * @LastEditors: Please set LastEditors
 * @Description: 用户相关
 * @FilePath: \app-bj\src\api\modules\user.js
 */
import request from '@/utils/request'
/**
 * @description 获取验证码
 * @param phone {Number}  电话号码
*/
export function getCode(data) {
  return request({
    url: '/getCode',
    method: 'post',
    headers: { ClientType: '103' },
    data
  })
}

export function register(data, noError = false) { // 用户领取礼包//与注册相同 但不限是否注册过
  return request({
    url: '/register',
    method: 'post',
    data,
    noError: noError
  })
}

/**
 * @description: 上传文件
 * @param {*} data
 * @param {*} noError
 * @return {*}
 */
export function goUpload(data) { // 上传文件
  return request({
    url: 'https://api.beejeen.com/upload',
    method: 'post',
    data
  })
}

/**
 * @description: 通过微信openid获取用户信息
 * @param {string} userWechatOpenid
 * @return {*}
 */
export function getUserInfoByOpenId(data) {
  return request({
    url: '/app/wechat/getUserInfoByOpenId',
    method: 'post',
    accident: true, // 专门解决当code是空时 不要报错
    data
  })
}
