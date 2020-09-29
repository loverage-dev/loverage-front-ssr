require('dotenv').config()
const { API_BASE_URL } = process.env;

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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Loverage' },
      { hid: 'og:url', property: 'og:url', content: 'https://loverage-front-ssr.herokuapp.com/'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { name: 'twitter:card', content: 'summary' }
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
    { src: '@/plugins/localStorage.js', ssr: false }
  ],
  loading: {
    throttle: 300
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    // ここにオプションが記述できる
    locales: ['ja']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
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
    }
  },
  env: {
    API_BASE_URL
  }
}
