<template>
  <div>
    <h1>Composables 組合 API 說明</h1>

    <h2>useCookie</h2>
    <!-- <h3>useCookie Counter: {{ counter || "-" }}</h3>
    <button @click="counter = null">reset</button>
    <button @click="counter--">-</button>
    <button @click="counter++">+</button> -->

    <!-- <h3>useCookie lang: {{ lang }}</h3> -->
    <!-- <select name="lang" id="lang" v-model="langValue">
      <option value="zh">zh-TW</option>
      <option value="en">en-US</option>
    </select>
    <button @click="handleLang">lang</button> -->

    <h2>useFetch</h2>
    <p>{{ data }}</p>

    <h2>useRoute</h2>
    <!-- <p>{{ mountain.title }}</p>
    <p>{{ mountain.description }}</p> -->
  </div>
</template>

<script setup>
/* 
  useAppConfig 訪問配置
*/
// const appConfig = useAppConfig();
// console.log("useAppConfig", appConfig);

/* 
  updateAppConfig 更新配置，現有屬性被保留
*/
// const appConfig = useAppConfig(); // { foo: 'bar' }
// const newAppConfig = { foo: "baz" };
// updateAppConfig(newAppConfig);
// console.log(appConfig); // { foo: 'baz' }

/* 
  useCookie，讀取寫入 cookie
  const cookie = useCookie(name, options)
*/
// const counter = useCookie("counter");
//如果 cookie 不存在，則最初將其設定為隨機值
// counter.value = counter.value || Math.round(Math.random() * 1000);
// console.log(counter);

/* 
  useCookie，讀取寫入 cookie
  在 cookie 儲存多國語言
*/
// const lang = useCookie("lang");
// const langValue = ref("zh");
// lang.value = lang.value || langValue.value;
// langValue.value = lang.value;
// console.log(lang);
// const handleLang = () => {
//   lang.value = langValue.value;
// };

/* 
  useError 捕獲全域錯誤
*/
// const error = useError("444");
// console.log(error);

/* 
  useFetch 獲取數據
*/
// const { data } = await useFetch("https://api.nuxt.com/modules", {
//   onRequest({ request, options }) {
//     // 設置 request headers，在 server 端拿資料
//     options.headers = options.headers || {};
//     options.headers.authorization = `token 213112341`; //驗證身份
//     // console.log(options.headers);
//   },
//   onRequestError({ request, options, error }) {
//     // 處理 request 錯誤
//   },
//   onResponse({ request, response, options }) {
//     // 處理回傳資料，一定要 return data
//     console.log(response);
//     return response._data;
//   },
//   onResponseError({ request, response, options }) {
//     // 處理 response 錯誤
//   },
// });

/* 
  useAsyncData 
*/
// const { data } = await useAsyncData("useTest", () => {
//   return $fetch("https://api.nuxt.com/modules");
// });

/*
  useHead 新增自訂各個頁面的頭部屬性
*/
// const title = ref("My useHead");
// const description = ref("My useHead amazing Nuxt app");
// useHead({
//   title,
//   meta: [
//     {
//       name: "description",
//       content: description,
//     },
//   ],
// });

/* 
  useRoute 返回當前路由
  // const route = useRoute();
  // console.log(route);
*/
</script>

<style></style>
