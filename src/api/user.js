import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: '/api/getUserInfo',
    method: 'get',
  })
}


export function getAuthResult(code) {
  return request({
    url: '/api/getAuthResult',
    method: 'get',
    params: {
      code
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
