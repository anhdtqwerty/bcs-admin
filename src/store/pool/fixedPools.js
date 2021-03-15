import {Pool} from '@/plugins/api'
import alert from '@/plugins/alert'

export default {
  namespaced: true,
  state: {
    pools: [],
    pool: {},
  },
  actions: {
    async fetchPools({commit}, options) {
      try {
        commit('setPools', await Pool.fetch(options))
      } catch (error) {
        alert.error(error)
      }
    },
    async fetchPool({commit}, id) {
      try {
        commit('setPool', await Pool.fetchOne(id))
      } catch (error) {
        alert.error(error)
      }
    },
    async createPool({commit}, data) {
      try {
        commit('createPool', await Pool.create({...data}))
      } catch (e) {
        alert.error(e)
      }
    },
    async removePool({commit}, id) {
      try {
        await Pool.remove(id)
        commit('removePool', id)
      } catch (e) {
        alert.error(e)
      }
    },
    async updatePool({commit}, {id, ...pool}) {
      try {
        const res = await Pool.update(id, pool)
        commit('updatePool', {id, pool: res})
      } catch (e) {
        alert.error(e)
      }
    },
  },
  mutations: {
    setPools(state, pools) {
      state.pools = pools
    },
    setPool(state, pool) {
      state.pool = pool
    },
    updatePool(state, {pool, id}) {
      state.pools = state.pools.map((g) => {
        if (g.id === id) return pool
        else return g
      })
      state.pool = pool
    },
    createPool(state, pool) {
      state.pools = [pool, ...state.pools]
    },
    removePool(state, id) {
      state.pools = state.pools.filter((pool) => pool.id !== id)
    },
  },
}
