import router from '../router'
import { db } from '@/config/'
import { api } from '@/config/api'

const account = {
  state: {
    users: [],
  },
  mutations: {
    setUsers ( state, payload ) {
      state.users = payload
    },
  },
  actions: {
    getAllUsers ( { commit }, payload ) {
      return db.collection( api.USERS )
        .onSnapshot( ( doc ) => {
          const users = []
          if ( doc.size > 0 ) {
            doc.docs.forEach( item => {
              users.push( { _id: item.id, ...item.data() } )
            } )
          }
          commit( 'setUsers', users )
        }, ( error ) => {
          console.log( 'Error getting documents: ', error )
        } )
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
    deleteUserById ( { commit, getters }, id ) {
      db.collection( api.USERS ).doc( id ).delete()
        .then( () => {
          const users = getters.users
          // Delete user from local data
          users.splice( users.findIndex( ( i ) => i._id === id ), 1 )
          commit( 'setUsers', users )
          commit( 'showSnackBar', { text: 'Usuario borrado', color: 'success' } )
        } )
        .catch( ( error ) => {
          console.error( 'Error removing document: ', error )
          commit( 'showSnackBar', { text: 'Error borrando el usuario', color: 'error' } )
        } )
    },
    updateActive ( { commit }, payload ) {
      db.collection( api.USERS ).doc( payload.id )
        .update( {
          isActive: payload.isActive,
        } )
        .then( () => {
          console.log( 'Document successfully updated!' )
        } )
    },
    updatePoints ( { commit }, payload ) {
      db.collection( api.USERS ).doc( payload.id )
        .update( payload.data )
        .then( () => {
          console.log( 'Document successfully updated!' )
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
