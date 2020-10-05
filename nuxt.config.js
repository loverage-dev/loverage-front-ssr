require('dotenv').config()
const axios = require('axios')
const { API_BASE_URL}  = process.env ||'https://limitless-crag-46636.herokuapp.com'
const { BASE_DIR } = process.env || '/'
const { BASE_URL }  = process.env || 'http://localhost:3000'

module.exports = {
  ssr: true,
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
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
  loading: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-clipboard2',
    'nuxt-purgecss',
    '@nuxtjs/sitemap'
  ],
  axios: {

  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: [
      '/terms',
      '/privacy-policy',,
      '/search',
    ],
    routes() {
      return Promise.all([
        axios.get(`${ API_BASE_URL }/api/v1/articles?limit=10000`),
        axios.get(`${ API_BASE_URL }/api/v1/category_list`),
      ])
      .then(([res1, res2]) => {
        let exp01 = res1.data.articles.map(post => '/article/' + post.id)
        let exp02 = res2.data.categories.map(category => '/category/' + category.name)
        let array = [exp01, exp02]
        let flattened = array.reduce(
          (accumulator, currentValue) => accumulator.concat(currentValue),
          []
        )
        return flattened
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    splitChunks: {
      layouts: true,
      vendor: ['axios'],
      pages: true,
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'initial'
      }
    },
    analize: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes() {
      return axios.get(`${ process.env.API_BASE_URL }/api/v1/articles?limit=10000`)
      .then(res => {
        return res.data.articles.map(entry => {
          return {
            route: `article/${entry.id}`,
            payload: entry
          }
        })
      })
    }
  },
  env: {
    API_BASE_URL,
    BASE_DIR,
    BASE_URL
  }
}
