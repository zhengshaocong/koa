import { getCookie } from '@/utils/auth'
import { isWeiXin } from '@/utils'
import API from '@/api'

async function getCodeUrl(appId, url) {
  const res = await API.buildWebLoginUrl({
    'appId': appId,
    'callbackUrl': 'https://wechat.beejeen.com/api/v1/auth/loginCallback', // https://wechat.beejeen.com/api/v1/auth/loginCallback
    'isQuiteMode': 0,
    'nextUrl': url,
    'state': '123'
  })
  const ren = res.data
  return ren
}

function gotoOpenIdPage() {
  const url = window.location.origin + '/codeShunt?jumpurl=' + window.location.href
  const appId = 'wx33a64336ebf6af75'
  getCodeUrl(appId, url).then(res => {
    location.replace(res)
  })
}

export default function() {
  return new Promise((resolve) => {//eslint-disable-line
    if (!isWeiXin()) {
      return resolve(true)
    }

    // 从cookie中获取openId
    const openId = getCookie('user_OpenId')
    if (!openId) {
      return gotoOpenIdPage()
    }
    resolve(openId)
  })
}
