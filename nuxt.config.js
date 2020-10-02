require('dotenv').config()
const API_BASE_URL = process.env.API_BASE_URL ||'https://limitless-crag-46636.herokuapp.com'
const BASE_DIR = process.env.BASE_DIR || '/'
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Loverage' },
      { hid: 'og:url', property: 'og:url', content: BASE_URL + "/" },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '330308701012309' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: '~/components/atom/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/util.js',
    '@/plugins/filter.js',
    '@/plugins/routerOption.js',
    '@/plugins/clickAway.js',
    '@/plugins/vue-lazyload.js',
    { src: '@/plugins/localStorage.js', ssr: false },
  ],
  loading: {
    throttle: 300
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  moment: {
    // ここにオプションが記述できる
    locales: ['ja']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-clipboard2',
    'nuxt-purgecss'
  ],
  axios: {

  },
  /*
  ** Build configuration
  */
  build: {
    analize: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
      config.plugins.push(new HardSourceWebpackPlugin())
    }
  },
  env: {
    API_BASE_URL,
    BASE_DIR,
    BASE_URL
  }
}
