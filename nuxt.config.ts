// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"; //svg
import path from "path"; //svg

// 把設定放在 config
// const config = {
//   vite: {
//     server: {
//       proxy: {},
//     },
//   },
// }

// if (process.env.NODE_ENV === 'development') {
//   config.vite.server.proxy = {
//     '/VsWeb/api': {
//       target: 'https://www.vscinemas.com.tw/',
//       changeOrigin: true,
//     },
//   }
// }

// export default defineNuxtConfig(config)

// const apiSecret = process.env.NUXT_API_SECRET;
// const apiBase = process.env.NUXT_PUBLIC_API_BASE;

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  devServer: {
    host: "0.0.0.0", // default: localhost
    port: 1324,
    // https: {
    //   key: "./https/localhost+3-key.pem",
    //   cert: "./https/localhost+3.pem",
    // },
  },
  server: {
    host: "localhost", // 或者 'localhost'
    port: 4000,
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
    },
  },
  // server/db 設置
  nitro: {
    plugins: ["~/server/db/index.js"],
    // preset: "node-server", //指定伺服器的監聽位址和連接埠
  },
  // prerender: {
  //   routes: ["/user/1", "/user/2"],  // 指定路由進行預渲染
  //   ignore: ["/dynamic"], // 忽略特定路由不進行預渲染
  // },
  imports: {
    dirs: ["stores"],
  },
  // "@element-plus/nuxt",
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "zh-TW",
        file: "zh-TW.json",
      },
      {
        code: "en-US",
        file: "en-US.json",
      },
      {
        code: "ja-JP",
        file: "ja-JP.json",
      },
    ],
    langDir: "language",
    defaultLocale: "zh-TW",
    detectBrowserLanguage: {
      useCookie: true,
    },
  },
  image: {
    dir: "assets/images",
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
  css: ["@/assets/scss/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_var.scss" as *;',
        },
      },
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "assets/icons")], //所有 svg 都放這
        symbolId: "[dir]/[name]",
        customDomId: "__svg__icons__dom__",
      }),
    ],
    server: {
      proxy: {
        "/VsWeb/api": {
          target: "https://www.vscinemas.com.tw/",
          changeOrigin: true,
        },
      },
    },
  },
  // plugins: [
  //   { src: "~/plugins/swiper.js", ssr: true },
  // ],
  // build: {
  //   transpile: ['swiper']
  // },
  app: {
    head: {
      title: "NUXT3-DEMO",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "description", content: "全域 - meta tag 設定" },
        { name: "format-detection", content: "telephone=no" },
        { property: "og:title", content: "NUXT3-DEMO" },
        { property: "og:description", content: "全域 - meta tag 設定" },
      ],
      bodyAttrs: {
        class: "test",
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
  },
});
