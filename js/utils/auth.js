import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'
const TokenKey = 'userToken'
const UserId = 'UserId'

export function getCookie(key) {
  return Cookies.get(Base64.encode(key))
}

export function setCookie(key, val) {
  return Cookies.set(Base64.encode(key), val)
}

export function removeCookie(key) {
  return Cookies.remove(Base64.encode(key))
}

// /
// /
// /
// /-----token start------/
export function getToken() {
  // return window.sessionStorage[TokenKey]
  return getCookie(TokenKey)
}

export function setToken(token) {
  // window.sessionStorage[TokenKey] = token
  // return token
  return setCookie(TokenKey, token)
}

export function removeToken() {
  // return window.sessionStorage.removeItem(TokenKey)
  return removeCookie(TokenKey)
}
// /-----token end------/

// /-----userid start------/
export function getUserIdCookie() {
  return getCookie(UserId)
}

export function setUserIdCookie(id) {
  return setCookie(UserId, id)
}

export function removeUserIdCookie() {
  return removeCookie(UserId)
}

// /-----userid end------/
