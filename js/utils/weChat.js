/*
 * @Author: your name
 * @Date: 2021-02-06 14:03:16
 * @LastEditTime: 2021-04-12 16:27:14
 * @LastEditors: Please set LastEditors
 * @Description:微信分享相关
 * @FilePath: \app-bj\src\utils\weChat.js
 */
import wx from 'weixin-js-sdk' // 微信sdk依赖
import API from '@/api'
// 引用全局
/* eslint-disable */
const jsApiList = [
  'checkJsApi',
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'hideOptionMenu',
  'showOptionMenu',
  'shareTimeline' //不存在
];
 
// 要用到微信API
export function getJSSDK(data, dataForWeixin) {
  // 调用后台接口换取参数
  API.wxauthWxSign(data).then((res) => {
    let isData=res.data.data
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: isData.appId, // 必填，公众号的唯一标识
      timestamp: isData.timestamp, // 必填，生成签名的时间戳
      nonceStr:isData.nonceStr, // 必填，生成签名的随机串
      signature: isData.signature, // 必填，签名
      jsApiList, // 必填，需要使用的JS接口列表
    });
    wx.ready(() => {
      wx.onMenuShareAppMessage({
        title: dataForWeixin.title,
        desc: dataForWeixin.desc,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.imgUrl,
        trigger: function trigger(res) {},
        success: function success(res) {
          console.log('已分享');
        },
        cancel: function cancel(res) {
          console.log('已取消');
        },
        fail: function fail(res) {
          console.log(JSON.stringify(res), 123456);
        },
      });
      // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareTimeline({
        title: dataForWeixin.title,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.imgUrl,
        trigger: function trigger(res) {
          // alert('用户点击分享到朋友圈');
        },
        success: function success(res) {
          // alert('已分享');
        },
        cancel: function cancel(res) {
          // alert('已取消');
        },
        fail: function fail(res) {
          alert(JSON.stringify(res));
        },
      });
      // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareQQ({
        title: dataForWeixin.title,
        desc: dataForWeixin.desc,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.imgUrl,
        trigger: function trigger(res) {
          // alert('用户点击分享到QQ');
        },
        complete: function complete(res) {
          alert(JSON.stringify(res));
        },
        success: function success(res) {
          // alert('已分享');
        },
        cancel: function cancel(res) {
          // alert('已取消');
        },
        fail: function fail(res) {
          // alert(JSON.stringify(res));
        },
      });
      // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareWeibo({
        title: dataForWeixin.title,
        desc: dataForWeixin.desc,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.imgUrl,
        trigger: function trigger(res) {
          // alert('用户点击分享到微博');
        },
        complete: function complete(res) {
          // alert(JSON.stringify(res));
        },
        success: function success(res) {
          // alert('已分享');
        },
        cancel: function cancel(res) {
          // alert('已取消');
        },
        fail: function fail(res) {
          // alert(JSON.stringify(res));
          console.log(JSON.stringify(res));
        },
      });
    });
    wx.error((res) => {
      console.log(`${JSON.stringify(res)}微信验证失败`, 456);
      // alert(JSON.stringify(res)+"微信验证失败");
    });
  });
}
export default {
  // 获取JSSDK
  getJSSDK,
}