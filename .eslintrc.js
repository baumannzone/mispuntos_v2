module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    'computed-property-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'always'],
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
