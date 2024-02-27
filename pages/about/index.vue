<template>
  <div class="about">
    <h1>api 測試</h1>
    <!-- <p>{{ data }}</p> -->
    <!-- <p>{{ dataBanner.data }}</p>
    <p>{{ dataBanner.data.value.name }}</p> -->
    <p>{{ orgsData }}</p>
    <!-- <p>{{ reposData }}</p> -->
  </div>
</template>

<script setup>
import axios from "axios";

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

//多個 API 請求 useFetch + Promise
const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  useFetch(`https://api.github.com/orgs/nuxt`),
  useFetch(`https://api.github.com/orgs/nuxt/repos`),
]);
console.log(orgsData);
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
