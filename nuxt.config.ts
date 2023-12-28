// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true
  },
  devServer: {
    host: '0.0.0.0', // default: localhost
    port: 1324
  },
  "runtimeConfig": {
    "token": '',
    "public": {
      "apiUrl": '',
    }
  }, 
  "imports": {
    "dirs": ['stores']
  },
  "modules": [
    '@nuxtjs/i18n',
    '@nuxt/image',
    [
      '@pinia/nuxt',
      {
        'autoImports': ['defineStore', 'acceptHMRUpdate'],
      },
    ]
  ],
  // 'nuxt-swiper',
  "i18n": {
    "strategy": 'no_prefix',
    "locales": [
      {
        "code": 'zh-TW',
        "file": 'zh-TW.json'
      },
      {
        "code": 'en-US',
        "file": 'en-US.json'
      },
      {
        "code": 'ja-JP',
        "file": 'ja-JP.json'
      },
    ],
    "langDir": 'language',
    "defaultLocale": 'zh-TW',
    "detectBrowserLanguage": {
      "useCookie": true,
    }
  },
  image: {
    dir: 'assets/images'
  },
  // 特定組件 auto import
  // "components": {
  //   "dirs": [
  //     {
  //         "path": "~/components/global",
  //         "global": true
  //     }
  //   ]
  // },
  
  // "components": [
  //   { path: '~/calendar-module/components' },
  //   { path: '~/user-module/components', pathPrefix: false },
  //   { path: '~/components/special-components', prefix: 'Special' },
  //   '~/components'
  // ],
  css:["@/assets/scss/style.scss"],
  // css: ['element-plus/dist/index.css',],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_var.scss" as *;'
        }
      }
    }
  },
  // plugins: [
  //   { src: "~/plugins/swiper.js", ssr: true },
  // ],
  // build: {
  //   transpile: ['swiper']
  // },
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
      ],
      bodyAttrs: {
        class: 'test'
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",
          async: true,
        },
      ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
  }
})
