module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'max-len': ['error', { code: 120 }],
  },
};