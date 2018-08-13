import Vue from 'vue'
import Vuex from 'vuex'

import account from './account'
import snackbar from './snackbar'
import users from './users'

Vue.use( Vuex )

const store = new Vuex.Store( {
  state: {
    loading: false,
  },
  mutations: {
    setLoading ( state, payload ) {
      state.loading = payload
    },
  },
  actions: {
    setLoading ( { commit }, payload ) {
      commit( 'setLoading', payload )
    },
  },
  getters: {
    loading: ( state ) => state.loading,
  },
  modules: {
    account,
    snackbar,
    users,
  },
} )

export default store
