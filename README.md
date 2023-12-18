# Nuxt3 Demo

## 安裝 Nuxt3
```
npx nuxi@latest init <project-name>
```

## 目錄配置
## assets 
* 樣式表（CSS、SASS 等）、字體、icon

## public
* 靜態資源，不需要過編譯的檔案
* 可以從瀏覽器通過根URL`/`獲得`public/`目錄中的文件

## composables
* nuxt3 新增的，可存放的一些公共 hooks 或者 api。
* 在 composables 目錄下模塊的同名導出會被自動引入
* 不能跨組件儲存資料，每次使用會建立新的 stores，所以需要用 pinia
* 新增其他想 auto import 的資料夾
```javascript=
"imports": {
  "dirs": ['stores']
}
```

## components 
* vue 组件，Nuxt 会自动导入 components/目錄中的所有組件
* 設定資料夾讓特定組件有 auto import 的功能
```javascript=
"components": {
  "dirs": [
    {
      "path": "~/components/global",
      "global": true
    }
  ]
}
```

## layouts 
* 全局性的佈局組件，可以應用到頁面上

## page
* 會基於文件嵌套關係生成路由
* 動態路由寫法變化
    * nuxt2 : _xxx
    * nuxt3 : pages/[id].vue

## plugins 
* 插件目錄
* Nuxt3 會自動加載。通過 .server 或 .client 後綴控制在服務器或客戶端加載
* 第一種方式 - provide，注入 plugins 前面要加 $
```javascript=
const { $hello } = useNuxtApp()
```
* 第二種方式 - directive，整合第三方插件
```javascript=
//timeformat.js
//vue3 創建模板語法，使用 directive
nuxtApp.vueApp.directive("timeformat", {
    //mounted 回傳兩參數，element(DOM元素)，binding(連接)
    mounted(el, binding) {
      const time = dayjs(binding.value).format("YYYY年MM月DD日");
      el.innerText = time;
    },
  });
```
* 第三種方式 - use，Vue3 套件掛載到nuxt
```javascript=
//calendar.js
nuxtApp.vueApp.use(VCalendar);
```
* plugins 可在檔名中間使用 .server 或 .client 來決定要 server 端或 client 端載入插件

## middleware 
* 路由中間件
* 命名路由中間件，放置在 middleware/目錄中，在頁面使用時會通過異步導入自動加載 
* 全局路由中間件，放置在 middleware/目錄中（帶.global 後綴），每次路由更改都會自動運行

## server
* 服務器路由
* Nuxt2 使用 connect 作为内置的 server 框架
* Nuxt3 使用自定義框架 h3 代替， h3 優勢
    * 兼容 connect、express 等中间件
    * Serverless , Workers ,Node.js 都可以运行

## store
* Nuxt3 不再提供Vuex，推薦使用pinia
* pinia官網 : https://pinia.vuejs.org/zh/getting-started.html

## nuxt.config.ts
* 全域配置文件


## 路由 pages

### pages
* Nuxt路由基於vue-router，根據文件名從pages/目錄中創建的每個組件生成路由
* 需要使用 pages/ 新增多個頁面，就需要使用 `<NuxtPage />` 當作網頁的進入點

### app.vue
```htmlembedded=
<template>
 <div>
   <NuxtPage />
 </div>
</template>
```

### [...slug].vue，建立404頁面
* 所有找不到頁面的網址都會進入的這頁
* 同層不能有 [] 動態路由，否則優先權會吃不到
```
<script setup>
  const route = useRoute();
  const event = useRequestEvent();
  setResponseStatus(event, 404);
</script>
<template>
  <h1>404 Not Found</h1>
  <p>{{ route.params.slug }}</p>
</template>
```

## SEO and Meta

### nuxt.config.ts
* 全域的 meta tag 設定
```javascript=
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        { name: 'description', content: '全域 - 網頁說明文字' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: "og:title", content: "My App" },
        { property: "og:description", content: "全域 - 網頁說明文字" },
      ],
    }
  }
})
```

### useHead
* 可針對單一頁面的 meta tag 進行調整
```javascript=
useHead({
 title: "About",
 meta: [
    { name: "description", content: "關於我們 - 網頁說明文字" },
    { property: "og:title", content: "About" },
    { property: "og:description", content: "關於我們 - 網頁說明文字" },
    { property: "og:url", content: "http://localhost:3000/about" },
    { property: "og:image", content: "http://localhost:3000/share.jpg" },
 ],
});

```

### useSeoMeta
* 新的處理方式，可針對單一頁面的 meta tag 進行調整。
* 將網站的 SEO meta定義為具有完整，避免常見錯誤，例如: 使用`name`代替`property`。
```javascript=
useSeoMeta({
    title: "About",
    description: "關於我們 - 網頁說明文字",
    ogTitle: "About",
    ogDescription: "關於我們 - 網頁說明文字",
    ogImage: "",
});
```

### useServerSeoMeta
* useServerSeoMeta 會讓改變初始加載 meta tag，但 client 不會有改變
* meta 不需要是響應式，搜索引擎只會掃描初始加載的內容，建議作為一個性能優化的工具
```javascript=
const res = await useFetch("https://..../seo/about");
useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});
```

## pinia 狀態管理工具
* 跨組件儲存資料，做 Composables
* 按文件拆分模塊，可使用this，actions支持同步異步，不需`action`和`mutations`

### 安裝
```
npm install pinia @pinia/nuxt
```
#### 安裝失敗
* 安裝遇到無法解析的情況在 package.json 加入以下
```
"overrides": {
   "vue": "latest"
},
```
* nuxt.config 引入 stores
```
"imports": {
       "dirs": ['stores']
   },
```

### 定義 Store
* 可以對 `defineStore()` 的返回值進行任意命名，但最好使用 store 的名字，同時以 `use` 開頭且以 `Store` 結尾。 (比如 `useUserStore`，`useCartStore`，`useProductStore`) 
* 第一個參數是你的應用中 Store 的唯一 ID。
```javascript=
import { defineStore } from "pinia";

export const useMainStore =  defineStore('main',{
  const count = ref(0)
  
  function increment() {
    count.value++
  }
  
  return { 
    count, 
    increment 
  }
}) 
```
在 Setup Store 中：
* `ref()` 就是 `state`
* `computed()` 就是 `getters`
* `function()` 就是 `actions`

### 訪問 state
setup
```javascript=
const store = useMainStore()
store.count++
```

## Components (Nuxt内置组件)
詳細: https://nuxt.com/docs/api/components/nuxt-page

### <NuxtPage>
* 需要NuxtPage 来显示位于 pages/ 目录中的顶层页面或嵌套页面。
* <NuxtPage/> 是 Vue Router <RouterView/>組件的整合，跟 <RouterView/> 一樣的使用方式。

### <NuxtLayout>
* `<NuxtLayout />`可用于覆盖 app.vue, error.vue 甚至/pages目录中的页面组件上default 布局。

### <NuxtLink>
* 處理應用中的任何類型鏈接
```
<NuxtLink to="/about">
    Nuxt website
</NuxtLink>
```
### <NuxtLoadingIndicator>
* 在頁面導航之間顯示進度條，客製化換頁 Loading
* 在 app.vue 或 layouts/ 中新增
```
<NuxtLoadingIndicator color="#02b24e" :height="10" :throttle="0">
  <p>Loagding</p>
</NuxtLoadingIndicator>
```
* 利用hook 監聽開始與結束
```
const nuxtApp = useNuxtApp();
const isLoading = ref(false);
nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
```

## Composables (Nuxt組合函式)

### useAsyncData
在頁面、組件和插件中，可使用useAsyncData來訪問異步解析的數據。
```javascript=
import axios from "axios";

const { data } = await useAsyncData("banner", async () => {
   const res = await axios.get("https://api.github.com/orgs/nuxt");
   return res.data;
});
```
### useRouter
* 提供許多函式讓你操作網址像是push、replace、go等方法，再換頁上面更加方便
```javascript=
const router = useRouter();

const gotoAndPage = (path) => {
 router.push(path);
};
```

### useRoute 
* useRoute 可以取得所有跟 route 網址有關的所有參數資訊
```javascript=
const route = useRoute();
```

## Nuxt 環境變數
* 使用環境變數切割不同環境所需要的參數。
* production、staging、develop....

### Runtime Config 的設定
* runtimeConfig 底下只能在 server 端取得
* 一般 API URL 等環境差異有關的變數放 public，可在 client 端取得
* 要重複使用的 API 要寫在 public
```
export default defineNuxtConfig({
 "runtimeConfig": {
   "token": '1234567890',
   "public": {
     "apiUrl": 'https://www.test.com',
   }
 },
})
```
* 在 refresh 拿不到 server 的 token，會找不到 
```
Authorization: Bearer undefined
```

### process.server / process.client
* 判別在 server 還是 client 端執行
```
if (process.server) {
  console.log("server token:", config.token);
}
```

### .env 設置變數
* 名稱一定大寫的 NUXT 開頭，透過底線來區分，變數名稱也要全部大寫，會在轉換成小寫去自動覆蓋 nuxt.config 裡面的 runtimeConfig 設定
```
NUXT_TOKEN=1234567890
NUXT_PUBLIC_API_URL=https://www.text.com.tw
```

### vite 設置 .env
* .env 會覆蓋 nuxt.config 設定的 runtimeConfig
* nuxt.config.ts
```
 "vite": {
   "define": {
     "process.env": process.env,
   },
 },
```
* .env
```
WEB_URL=https://www.mike.com
ENV=local
TOKEN=1234567890
```
* page 測試
```
const runtimeConfig = useRuntimeConfig()
```
## nuxt-swiper
* nuxt-swiper 0.1.9 -> swiper8
** 使用 loop 會整批複製一份 (會造成水合問題)
* nuxt-swiper 1.2.2 對應新版 swiper
** 使用 loop 會把上一個 silde 移至 最後

### nuxt-swiper Bug
* swiper loop autoplay 不起作用
* "它有新的限制。循環模式下的幻燈片數量應至少是 slipsPerView 值的 2 倍。" 設置2倍數，它就會起作用。