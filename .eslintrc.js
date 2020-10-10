module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-extra-semi': 'error', // 余分なセミコロンを禁止する
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ]
  }
}
