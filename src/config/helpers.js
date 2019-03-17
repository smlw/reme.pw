import axios from 'axios'
// import store from '../store/user'

// ГЛОБАЛЬНО ПЕРЕД КАЖДЫМ ЗАПРОСОМ ПРОВЕРЯЕТ И УСТАНАВЛИВАЕТ -HEADERS-
export default function setup () {
  axios.interceptors.request.use(function (config) {
    const token = this.$cookie.get('session')
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers.Accept = 'application/json'
    }
    return config
  }, function (err) {
    return Promise.reject(err)
  })
}
