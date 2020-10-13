require('dotenv').config()
const axios = require('axios')
const redirectSSL = require('redirect-ssl')
const { API_BASE_URL}  = process.env ||'https://limitless-crag-46636.herokuapp.com'
const { BASE_DIR } = process.env || '/'
const { BASE_URL }  = process.env || 'http://localhost:3000'

module.exports = {
  ssr: true,
  telemetry: false,
  head: {
    title: "",
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
  css: [
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
     }),
  ],
  plugins: [
    '@/plugins/util.js',
    '@/plugins/filter.js',
    '@/plugins/routerOption.js',
    '@/plugins/clickAway.js',
    '@/plugins/vue-lazyload.js',
    { src: '@/plugins/localStorage.js', ssr: false },
  ],
  loading: '~/components/atom/loading.vue',
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-clipboard2',
    'nuxt-purgecss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  robots: {
    UserAgent: '*',
    // クローリングしないパスを記述
    // Disallow: '/preview',
    // sitemap.xmlのURLを記述
    Sitemap: `${BASE_URL}/sitemap.xml`,
  },

  manifest: {
    name: 'Loverage|2択の恋愛コミュニティ',
    lang: 'ja',
    background_color: '#ffffff',
    short_name: 'Loverage',
    title: 'Loverage|2択の恋愛コミュニティ',
    'og:title': 'Loverage|2択の恋愛コミュニティ',
    description: '2択の恋愛相談コミュニティ『Loverage』／日々の恋愛の中で誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。そんなあなたの恋愛にまつわる相談事を、2択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。',
    'og:description': '2択の恋愛相談コミュニティ『Loverage』／日々の恋愛の中で誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。そんなあなたの恋愛にまつわる相談事を、2択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。',
    icons: [
      {
        src: "static/icon.png",
        sizes: "512x512",
        type: "image/png",
      }
    ]
  },
  workbox: {
    swDest: 'static/sw.js',
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
      layouts: false,
      pages: true,
      commons: true,
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
