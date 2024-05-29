<template>
  <div class="about">
    <h1>api 測試</h1>
    <!-- <div>{{ data }}</div> -->
    <button @click="productRefresh">productRefresh</button>
    <!-- <p>{{ productData }}</p> -->
    <input type="text" v-model="meta.limit" />
    <input type="text" v-model="meta.page" />
    <button @click="metaClick">測試</button>
    <br />
    {{ productData }}
    <!-- {{ cookie }} -->
    <!-- <p>{{ dataBanner.data }}</p>
    <p>{{ dataBanner.data.value.name }}</p> -->
    <!-- <p>{{ orgsData }}</p> -->
    <!-- <p>{{ reposData }}</p> -->
  </div>
</template>

<script setup>
// import axios from "axios"
import { getNewsList } from "@/api/news";

// const cookie = useCookie("lang");
// cookie.value = "en";

// 使用 reactive 來保存頁面狀態
const meta = reactive({
  limit: 10,
  page: 1,
});

const queryParams = ref({});

const metaClick = async () => {
  queryParams.value = {};
  for (const key in meta) {
    queryParams.value[key] = meta[key];
  }
  console.log(queryParams.value, "queryParams.value");
  // setTimeout(() => {
  //   productRefresh(); //不需要再填 productRefresh ，如果click觸發事件，值有改變就會再打一次API
  // }, 2000);
  // await refresh();
};

const { data: productData, refresh: productRefresh } = await useFetch(
  "https://dummyjson.com/products",
  { query: queryParams }
);

// 獲取新聞列表數據
const { data, pending, errorm, refresh } = await getNewsList();
console.log(data, "data");

// const BannerData = reactive("");

// 測試-API
// const handleBannerData = async () => {
//   const { data } = await useAsyncData("banner", async () => {
//     const res = await axios.get("https://api.github.com/orgs/nuxt");
//     return res.data;
//   });
//   console.log(data);
// };
// handleBannerData();
// // console.log(data);
// console.log(handleBannerData.value);

// const { data } = await useAsyncData("banner", async () => {
//   const res = await axios.get("https://api.github.com/orgs/nuxt");
//   return res.data;
// });

// 測試-單一頁面引入
// useHead({
//   link: [
//     {
//       rel: "stylesheet",
//       href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
//     },
//   ],
//   script: [
//     {
//       src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
//       async: true,
//       tagPosition: "bodyClose",
//     },
//   ],
// });

// const { data, pending, error, refresh } = await useAsyncData("mountains", () =>
//   $fetch("https://api.github.com/orgs/nuxt")
// );

// const page = ref(1);
// const { data } = await useAsyncData(
//   "posts",
//   () =>
//     $fetch("https://fakeApi.com/posts", {
//       params: {
//         page: page.value,
//       },
//     }),
//   {
//     watch: [page],
//   }
// );
// console.log(data);

// 單個
// const { data: organization } = await useFetch(
//   `https://api.github.com/orgs/nuxt`
// );
// console.log(organization.value); // null

// //多個 API 請求 useFetch + Promise
// const [{ data: orgsData }, { data: reposData }] = await Promise.all([
//   useFetch(`https://api.github.com/orgs/nuxt`),
//   useFetch(`https://api.github.com/orgs/nuxt/repos`),
// ]);
// console.log(orgsData);
// console.log(reposData);
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
  li {
    width: 10%;
    margin: 20px;
  }
}

.teleport {
  position: absolute;
  top: 0;
  left: 0;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background: red;
}
</style>
