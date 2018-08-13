// import { db } from '@/config/'
// import router from '../router'

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
      // return auth.signInWithEmailAndPassword( payload.email, payload.password )
      //   .then( ( res ) => {
      //     console.debug( '<<<<< Log In >>>>>' )
      //     console.log( res )
      //     commit( 'setUser', { email: payload.email } )
      //     router.push( { name: 'Admin' } )
      //   } )
      //   .catch( ( err ) => {
      //     const data = {
      //       text: err.message,
      //     }
      //     commit( 'showSnackBar', data )
      //     console.log( 'err:' )
      //     console.log( err )
      //   } )
      //   .finally( () => {
      //     commit( 'setLoading', false )
      //   } )
    },
  },
  getters: {
    users ( state ) {
      return state.users
    },
  },
}
export default account
