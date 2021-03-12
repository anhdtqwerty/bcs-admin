import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
import auth from './auth'
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'bcs',
      paths: ['auth.user', 'auth.isAuthenticated', 'auth.jwt'],
    }),
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
})
