import alert from '@/plugins/alert'
import router from '@/router'
import api from '@/plugins/api'
import _ from 'lodash'
export default {
  namespaced: true,
  state: {
    user: null,
    jwt: null,
    profile: {},
    role: {},
    isAuthenticated: false,
  },
  actions: {
    async signIn({commit}, {identifier = '', password = ''} = {}) {
      try {
        const {data} = await api.Auth.create({identifier, password})
        commit('setUser', {user: data.user, jwt: data.jwt})
        router.push('/home')
      } catch (error) {
        console.error('signIn', error)
      }
    },
    signOut({commit}) {
      commit('reset')
      router.push('signIn')
    },
    setRole({commit}, role) {
      commit('setRole', role)
    },
    async fetchProfile() {},
    signUp() {},
    async forgotPassword(email) {
      await api.Auth.forgotPassword(email)
      alert.success('Hãy kiểm tra mail của bạn')
    },
    async resetPassword({commit}, {code, password, passwordConfirmation}) {
      const {user, jwt} = await api.Auth.resetPassword(code, password, passwordConfirmation)
      commit('setUser', {user, jwt})
      router.push('/home')
    },
  },
  mutations: {
    setUser(state, {user, jwt}) {
      state.jwt = jwt
      state.user = user
      if (user) {
        state.role = user.role
        state.isAuthenticated = true
      } else {
        state.isAuthenticated = false
        state.role = null
      }
    },
    reset(state) {
      state.jwt = null
      state.user = null
      state.profile = {}
      state.role = {}
      state.isAuthenticated = false
    },
    setRole(state, role) {
      state.role = role
    },
    setProfile(state, profile) {
      state.profile = _.get(profile, '0', {})
    },
  },
  getters: {
    jwt(state) {
      return state.jwt
    },
    user(state) {
      return !state.user ? {} : state.user
    },
    role(state) {
      return state.role || state.user.role || {}
    },
    profile(state) {
      return !state.profile ? {} : state.profile
    },
    isAuthenticated(state) {
      return state.isAuthenticated
    },
  },
}
