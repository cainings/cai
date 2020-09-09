"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("@/views/index.vue"));

var _login = _interopRequireDefault(require("@/views/login.vue"));

var _rukou = _interopRequireDefault(require("@/components/level3/work/rukou"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/index',
  name: 'index',
  component: _index["default"],
  redirect: '/index/rukou',
  children: [{
    path: 'rukou',
    component: _rukou["default"]
  }]
}, {
  path: '/login',
  component: _login["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  //hash
  routes: routes
});
var _default = router;
exports["default"] = _default;