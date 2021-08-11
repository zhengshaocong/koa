import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      type: 0, // 	1=教务端 0=学员端
      ...data
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      type: 0 // 	1=教务端 0=学员端
    }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

/**
 * @description 用户找回密码
 * @param phone {Number}  电话号码
 * @param password {String} 密码 需要md5加密
 * @param validCode {String} 校验码
*/
export function forgetPwd(data) {
  return request({
    url: '/forgetPwd',
    method: 'post',
    data
  })
}

