import { Configuration } from '@nuxt/types'

import i18n from './nuxt-i18n.config'

const nuxtConfig: Configuration = {
  modules: [['nuxt-i18n', i18n], 'bootstrap-vue/nuxt'],

  buildModules: ['@nuxt/typescript-build'],

  build: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config: any, ctx: any) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}

module.exports = nuxtConfig
