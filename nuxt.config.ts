// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  experimental: {

    inlineSSRStyles: false
  },

  build: {
    transpile: [
      'tslib',

    ],
  },
  modules: ["@nuxt/ui", '@nuxt/content', '@nuxtjs/apollo', "@nuxt/image", 'nuxt-icon'],


  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://mainportfolio.hasura.app/v1/graphql',
      }
    },
  },
  image: {
    format: ['avif', 'webp'],
    quality: 80,
    cloudinary: {
      // baseURL: 'https://res.cloudinary.com/doifglnsi/image/upload'
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }

      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
})