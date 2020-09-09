import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    setIsLogin(state,_boolean){
      state.isLogin = _boolean
    }
  },
  actions: {
  },
  modules: {
  }
})
