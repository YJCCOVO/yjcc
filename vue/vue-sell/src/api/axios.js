import axios from 'axios'

const baseUrl = ''

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl+url, {
      params
    }).then(res => {
      const { errno, data } = res.data //对象的解构
      if (errno === 0) {
        return data
      }
    })
  }
}



// export default get

// let resFn = get('/seller')
// resFn().then(data => {

// })