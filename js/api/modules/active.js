/*
 * @Author: your name
 * @Date: 2021-01-29 17:37:23
 * @LastEditTime: 2021-07-22 10:11:03
 * @LastEditors: Please set LastEditors
 * @Description: 活动相关内容
 * @FilePath: \app-bj\src\api\modules\active.js
 */
import request from '@/utils/request'
/**
 * @description 查询分享有奖配置
*/
export function settingsShare() {
  return request({
    url: '/settings/share',
    method: 'GET',
    baseURL: 'https://api.beejeen.com/'
  })
}

/**
 * @description 获取学员分享二维码
*/
export function getMyInviteShareQRCode(data) {
  return request({
    url: '/app/userapp/getMyInviteShareQRCode',
    method: 'POST',
    data
  })
}
/**
 * @description 获取用户邀请记录列表
 * @param {num} pageIndex
 * @param {num} pageSize
*/
export function getMyInviteList(data) {
  return request({
    url: '/app/userapp/getMyInviteList',
    method: 'POST',
    data
  })
}

/**
 * @description 获取微信签名
 * @param {num} url
*/
export function wxauthWxSign(data) {
  return request({
    url: '/app/wxauth/wxSign',
    method: 'POST',
    // baseURL: 'https://api.beejeen.com/',
    data
  })
}

/**
 * @description 构造微信网页登录URL
 * @param {string} appId
 * @param {string} callbackUrl  //后台中转用地址
 * @param {num} isQuiteMode //是否静默授权 0 否 1是
 * @param {string} nextUrl  //后台通过中转地址获取数据后 回调跳回的地址
 * @param {string} state //用于区分请求数据
*/
export function buildWebLoginUrl(data) {
  return request({
    url: '/api/v1/auth/buildWebLoginUrl',
    method: 'POST',
    baseURL: 'https://wechat.beejeen.com',
    data
  })
}

/**
 * @description 根据临时授权码查询微信用户信息
 * @param {string} appId
 * @param {string} code
*/
export function getUserInfoByCode(data) {
  return request({
    url: '/api/v1/auth/getUserInfoByCode',
    method: 'POST',
    baseURL: 'https://wechat.beejeen.com', // https://wechat.beejeen.com
    data
  })
}
