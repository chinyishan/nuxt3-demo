// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true
  },
  "imports": {
    "dirs": ['stores']
  },
  "modules": [
      [
          '@pinia/nuxt',
          {
              'autoImports': ['defineStore', 'acceptHMRUpdate'],
          },
      ]
  ],
  "components": [
    { path: '~/calendar-module/components' },
    { path: '~/user-module/components', pathPrefix: false },
    { path: '~/components/special-components', prefix: 'Special' },
    '~/components'
  ],
  app: {
    head: {
      title: 'NUXT3-DEMO',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: '全域 - meta tag 設定' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: "og:title", content: "NUXT3-DEMO" },
        { property: "og:description", content: "全域 - meta tag 設定" },
        // { property: "og:url", content: "http://localhost:3000/" },
      ],
      bodyAttrs: {
        class: 'test'
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
          async: true,
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  }
})
