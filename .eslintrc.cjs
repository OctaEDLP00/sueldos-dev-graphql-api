const RULES = {
  ON: 'on',
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  extends: [
    'standard'
  ],
  rules: {
    'no-tabs': RULES.OFF,
    ident: RULES.OFF,
    'space-before-function-paren': RULES.OFF
  }
}
