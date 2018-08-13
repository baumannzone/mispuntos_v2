const rules = {
  required: ( v ) => v => !!v || 'Field required',
  email: ( v ) => v => /.+@.+/.test( v ) || 'E-mail must be valid',
  min3: ( v ) => v => ( !v || v.length >= 3 ) || 'Must have more than 2 characters',
}

export default rules
