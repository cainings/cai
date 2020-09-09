"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beforeRouteEnter = beforeRouteEnter;

function beforeRouteEnter(to, from, next) {
  var user = sessionStorage.getItem('user');

  if (user == null) {
    next('/login');
  } else if (user == 'admin') {
    next();
  } else {
    next(false);
  }
}