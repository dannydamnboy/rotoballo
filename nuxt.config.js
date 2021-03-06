export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rotoballo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/amplify.js',
    mode: 'client'
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ["@nuxtjs/prismic", {
      "endpoint": "https://prumotti.cdn.prismic.io/api/v2",
    }],
    ["nuxt-sm"]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },

  storybook: {
    stories: ["~/slices/**/*.stories.js"]
  },

  ignore: ["**/*.stories.js"],

  generate: {

    routes: function (callback) {

      let staticRoutes = [
        '/',
        '/about'
      ];

      for (let index = 0; index < 1000; index++) {
        staticRoutes.push('/product/' + index);
      }

      callback(null, staticRoutes);
    }
  }
}
