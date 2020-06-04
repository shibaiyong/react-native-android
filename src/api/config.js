
import axios from 'axios'

let instance = axios.create({
  //baseURL: 'http://t.weather.sojson.com'
  baseURL: 'http://localhost:8081'
})

//请求的全局拦截器
instance.interceptors.request.use(
  config => {
//    config.headers.Authorization = sessionStorage.getItem('RyxToken')
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
    response => {
        if (response.data.code === 2002) {
        }
        return response
    },
    error => {

        return Promise.reject(error)
    }
)

export default instance
