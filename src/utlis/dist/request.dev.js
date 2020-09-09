"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//创建一个axios的对象
var instance = _axios["default"].create({
  baseURL: '',
  //会在发送请求的时候拼接在url参数前面 
  timeout: 5000 //请求超时时间

}); //请求拦截
//所有的网络请求都会先走这个方法


instance.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
}); //响应链接
//所有的网络请求返回数据之后都会先执行此方法

instance.interceptors.response.use(function (response) {
  console.log("全局响应拦截");
  return response;
}, function (err) {
  return Promise.reject(err);
});

function get(url, params) {
  return instance.get(url, {
    params: params
  });
}

function post(url, data) {
  return instance.post(url, data);
}