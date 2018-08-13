import { db } from '@/config/'
import router from '../router'
import api from '@/config/api'

const account = {
  state: {
    users: [],
  },
  mutations: {
    setUsers ( state, payload ) {
      state.user = payload
    },
  },
  actions: {
    getUsers ( { commit }, payload ) {
      commit( 'setLoading', true )
    },
    createUser ( { commit }, payload ) {
      commit( 'setLoading', true )
      db.collection( api.USERS ).add( payload )
        .then( ( docRef ) => {
          console.log( 'Document written with ID: ', docRef.id )
          commit( 'showSnackBar', { text: 'Usuario creado', color: 'success' } )
          router.push( { name: 'Admin' } )
        } )
        .catch( ( error ) => {
          commit( 'showSnackBar', { text: 'Error creando el usuario', color: 'error' } )
          console.error( 'Error adding document: ', error )
        } )
        .finally( () => {
          commit( 'setLoading', false )
        } )
    },
  },
  getters: {
    users ( state ) {
      return state.users
    },
  },
}
export default account
