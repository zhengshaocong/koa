import { dateMoment, timeMoment } from '@/filters'
import { NewDate } from './index'
/**
 * @description 获取该周第一天/最后一天（周日/周六）的时间戳
 * @param {Date} Nowdate 该周的任何一天
 */
export function showWeekFirstDay(Nowdate, type = 'start', mode = '') {
  if (!(Nowdate instanceof Date)) {
    Nowdate = NewDate(Nowdate)
  }
  let time = 0
  if (type === 'end') time += 86400000 * 6
  let WeekFirstDay
  if (Nowdate.getDay() === 0) {
    WeekFirstDay = NewDate(Nowdate.getTime() - 6 * 86400000 + time)
  } else {
    WeekFirstDay = NewDate(Nowdate.getTime() - (Nowdate.getDay() - 1) * 86400000 + time)
  }

  const M = Number(WeekFirstDay.getMonth()) + 1
  let run
  if (type === 'end') {
    run = NewDate(WeekFirstDay.getFullYear() + '-' + M + '-' + WeekFirstDay.getDate() + ' 23:59:59')
  } else {
    run = NewDate(WeekFirstDay.getFullYear() + '-' + M + '-' + WeekFirstDay.getDate())
  }

  if (mode) {
    return dateMoment(NewDate(run), mode)
  } else {
    return timeMoment(run)
  }
}

/**
 * @description 获取该月第一天（最后一天）的时间戳
 * @param {Date} Nowdate 该月的任何一天
 */
export function showMonthFirstDay(Nowdate, type = 'start', mode = '') {
  let time = 0
  if (type === 'end') time = 1
  const day = NewDate(Nowdate)
  let M
  let Y
  let run
  if (time) {
    M = Number(day.getMonth()) + 1 + 1
    Y = Number(day.getFullYear())
    if (M > 12) { M = 1; Y += 1 }
    if (M < 10) M = '0' + M.toString()
    run = timeMoment(Y + '-' + M + '-01') - 1
  } else {
    M = Number(day.getMonth()) + 1
    Y = Number(day.getFullYear())
    if (M < 10) M = '0' + M.toString()
    run = NewDate(Y + '-' + M + '-01')
  }
  if (mode) {
    return dateMoment(NewDate(run), mode)
  } else {
    return timeMoment(run)
  }
}

/**
 * @description 获取当前是手机还是平板还是pc
 */
export function getEnvironment() {
  var ua = navigator.userAgent
  var us = ua.toLowerCase()
  var isWindowsPhone = /(?:Windows Phone)/.test(ua)
  var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  var isAndroid = /(?:Android)/.test(ua)
  var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  var isFireFox = /(?:Firefox)/.test(ua)
  // var isChrome = /(?:Chrome|CriOS)/.test(ua)
  var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))// 平板
  var isPhone = /(?:iPhone)/.test(ua) && !isTablet
  var isPc = !isPhone && !isAndroid && !isSymbian
  var isWeiXin = /micromessenger/.test(us)
  var isDingTalk = /dingtalk/.test(us)

  var isAppIos = /platform:ios/.test(us)
  var isAppAndroid = /platform:android/.test(us)
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isiOS,
    isPc: isPc,
    isWeiXin,
    isDingTalk,
    isAppIos,
    isAppAndroid
  }
}

/**
 * @description 获取参数url上的某个参数
 */
export function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  // console.log(reg);
  var r = decodeURI(window.location.search).substr(1).match(reg) // 匹配目标参数
  // console.log(window.location.search.substr(1).match(reg));
  if (r != null) return unescape(r[2])
  return null // 返回参数值
}
