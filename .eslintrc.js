module.exports = {
  root: true,
  // env: {
  //   node: true,
  //   browser: true,
  // },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // rules: {
  //   'prettier/prettier': 'error',
  //   'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   quotes: ['error', 'single'],
  //   'vue/html-self-closing': [
  //     'error',
  //     {
  //       html: {
  //         void: 'always',
  //         normal: 'always',
  //         component: 'always',
  //       },
  //       svg: 'always',
  //       math: 'always',
  //     },
  //   ],
  //   'vue/require-default-prop': 'off',
  //   'vue/no-v-html': 'off',
  // },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
