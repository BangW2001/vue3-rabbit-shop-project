//实例化axios对象，设置基地址和超时时间
import axios from "axios";

const httpInstance = axios.create({
  baseURL:"https://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout:5000
})

//配置拦截器
// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  return Promise.reject(error);
});


export default httpInstance