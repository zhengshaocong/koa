import { getUserIdCookie, getCookie } from '@/utils/auth'
import getOpenId from './getOpenId'
import store from '@/store'
import { isWeiXin } from '@/utils'
import router from '@/router'
import API from '@/api'

export default function() {
  return new Promise((resolve,reject) => {//eslint-disable-line
    if (!isWeiXin()) {
      return resolve(true)
    }
    getOpenId().then(async(res) => {
      const uuid = getUserIdCookie()
      if (uuid) {
        resolve(uuid)
      } else {
        const UserInfoByOpenId = await API.getUserInfoByOpenId({ userWechatOpenid: res })
        const uuid = UserInfoByOpenId?.data?.uuid
        if (uuid) {
          store.commit('user/SET_USERDATE', { uuid: uuid.trim() })
          resolve(uuid)
        } else {
          const url = getCookie('sourceUrl')
          router.replace({ name: 'isLogin', query: { jumpurl: url }})
        }
        // const url = getCookie('sourceUrl')
        // router.replace({ name: 'isLogin', query: { jumpurl: url }})
      }
    })
  })
}
