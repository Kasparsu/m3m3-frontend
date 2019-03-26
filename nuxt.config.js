const pkg = require('./package')


//const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      class: 'has-navbar-fixed-top'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    //'~/assets/style/app.styl',
    //'bulma',
    '@/assets/style/app.scss'
  ],
  styleResources: {
    scss: [
      "@/assets/style/app.scss"
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //'@/plugins/vuetify',
    '@/plugins/api',
    '@/plugins/touchEvents',
    '@/plugins/bodyScroll',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
      '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/moment'
  ],
  axios: {
      browserBaseURL: 'http://localhost',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      //'vuetify/lib'
    ],
    plugins: [
      //new VuetifyLoaderPlugin()
    ],
    loaders: {

    },
    extractCss: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
