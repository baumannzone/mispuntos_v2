import { auth } from '@/config/'
import router from '../router'

const account = {
  state: {
    user: null,
  },
  mutations: {
    setUser ( state, payload ) {
      state.user = payload
    },
  },
  actions: {
    logIn ( { commit }, payload ) {
      commit( 'setLoading', true )
      return auth.signInWithEmailAndPassword( payload.email, payload.password )
        .then( ( res ) => {
          console.debug( '<<<<< Log In >>>>>' )
          console.log( res )
          commit( 'setUser', { email: payload.email } )
          router.push( { name: 'Admin' } )
        } )
        .catch( ( err ) => {
          const data = {
            text: err.message,
          }
          commit( 'showSnackBar', data )
          console.log( 'err:' )
          console.log( err )
        } )
        .finally( () => {
          commit( 'setLoading', false )
        } )
    },
  },
  getters: {
    isAuthenticated ( state ) {
      return state.user !== null && state.user !== undefined
    },
  },
}
export default account
