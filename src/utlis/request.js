import axios from 'axios'

//创建一个axios的对象
const instance =axios.create({
    baseURL:'https://www.fastmock.site/mock/075cfb4bd0ce8938fe95fdd9a8855471/guanli/',  //会在发送请求的时候拼接在url参数前面 
    timeout:5000        //请求超时时间
})
//请求拦截
//所有的网络请求都会先走这个方法
// instance.interceptors.request.use(
//     function(config){
//         return config
//     },function(err){
//         return Promise.reject(err)
//     }
// )

//响应链接
//所有的网络请求返回数据之后都会先执行此方法
// instance.interceptors.response.use(
//     function(response){
//         console.log("全局响应拦截")
//         return response;
//     },function(err){
//         return Promise.reject(err)
//     }
// )



export function get(url,params){
    return instance.get(url,{
        params
    })
}

export function post(url,data){
    return instance.post(url,data)
}