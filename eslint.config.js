import ygConfig from '@yourgoods/eslint-flat-vue/config'
import unocss from '@unocss/eslint-config/flat'

export default [
  ...ygConfig,

  // unocss
  unocss,

  // custom
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]

