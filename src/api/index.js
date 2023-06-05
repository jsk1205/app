import http from "../utils/request";


// 定义接口
// 请求首页数据
export function getData(query){
    return http({
        url:'/home/getData',
        method:'get',
        params:query
    })
}