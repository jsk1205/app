import axios  from "axios";

// axios的二次封装
const http = axios.create({
    baseURL:'/api',
    timeout:10000,//超时（ms）
})

// 请求拦截器
axios.interceptors.request.use(config=>{
    //在发送请求之前做些什么
    // 1.是否需要设置token
    // 2.get请求映射params参数

    return config;
},
error=>{
    return Promise.reject(error)
})

//响应拦截器
axios.interceptors.response.use(response=>{
    //对响应数据做些什么
    // 1.未设置状态码
    // 2.获取错误信息
    return response;
},
error=>{
    return Promise.reject(error)
})
export default http;