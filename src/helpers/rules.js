const rules = {
  required: ( v ) => v => !!v || 'Field required',
  email: ( v ) => v => /.+@.+/.test( v ) || 'E-mail must be valid',
}

export default rules
