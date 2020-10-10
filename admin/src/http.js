import axios from 'axios'
import Vue from 'vue'
import router from './router';

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// 将token添加到请求头中
http.interceptors.request.use(function (config) {
  // 在前端，这个Authorization需要大写，在后端需要小写
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }

  return config
}, function (error) {
  return Promise.reject(error);
});


// 增加一个拦截器，这个是一个axios的api
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})

export default http