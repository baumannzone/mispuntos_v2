const position = {
  x: {
    right: 'right',
    left: 'left',
  },
  y: {
    top: 'top',
    bottom: 'bottom',
  },
}

const colors = {
  default: 'cyan lighten-1',
}

const snackBar = {
  state: {
    showSnack: false,
    color: colors.default,
    text: '',
    timeout: 0,
    x: position.x.right,
    y: position.y.top,
  },
  mutations: {
    showSnackBar ( state, payload ) {
      state.showSnack = false
      state.showSnack = true
      if ( payload.text ) {
        state.text = payload.text
      }
      if ( payload.color ) {
        state.color = payload.color
      }
    },
    closeSnackBar ( state ) {
      state.showSnack = false
      state.color = colors.default
    },
  },
  actions: {
    showSnackBar ( { commit }, payload ) {
      commit( 'showSnackBar', payload )
    },
    closeSnackBar ( { commit } ) {
      commit( 'closeSnackBar' )
    },
  },
  getters: {
    showSnack: state => state.showSnack,
    snackBar ( state ) {
      return {
        color: state.color,
        timeout: state.timeout,
        text: state.text,
        x: state.x,
        y: state.y,
      }
    },
  },
}

export default snackBar
