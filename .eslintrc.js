module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    es5: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      js: true,
    },
  },
  rules: {
    semi: 'error',
  },
};
