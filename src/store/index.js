import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import fixedPools from '@/store/pool/fixedPools.js'
import upload from '@/store/upload.js'
import {axiosPlugin} from '@/plugins/axios'
Vue.use(Vuex)
import auth from './auth'
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'bcs',
      paths: ['auth.user', 'auth.isAuthenticated', 'auth.jwt'],
    }),
    axiosPlugin,
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    fixedPools,
    upload,
  },
})
