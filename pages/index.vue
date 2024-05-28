<template>
  <div>
    <h1>首頁-Nuxt3</h1>
    <el-button>element-plus</el-button>
    <p>0528調整</p>
    <br />
    <br />
    <!-- <SwiperBanner /> -->
    <!-- <SwiperProduct /> -->
    <button @click="handleMiddleware">get api test Middleware</button>
    <br />
    <br />
    <NuxtErrorBoundary>
      <ButtonOops />
      <p>這裡是發生錯誤時，才會渲染出來的地方</p>
      <template #error="{ error }">
        <p style="color: red">An error occurred: {{ error }}</p>
      </template>
    </NuxtErrorBoundary>
    <br />
    <br />
    <h2 class="title">composables-點擊按鈕: {{ count }}</h2>
    <button @click="add">composables-Add</button>
    <br />
    <br />
    <h2 class="title">store-點擊按鈕: {{ store.count }}</h2>
    <button @click="store.add">store-Add</button>
    <br />
    <br />
    <h2>{{ $hello("Sunny") }}</h2>
    <br />
    <br />
    <h2 v-timeformat="'Mon Dec 11 2023 23:28:38 GMT+0800 (GMT+08:00)'"></h2>
    <h2 v-timeformat="'1702308518986'"></h2>
    <br />
    <br />
    <VDatePicker v-model="selectedDate" />
    <br />
    <br />
    <button @click="refresh">測試環境URL</button>
    <br />
    <br />
  </div>
</template>
<script setup>
// import {
//     ElButton
// } from "element-plus";
const { count, add } = useAddCount();
const store = useHomeStore();

// 注入 plugins 前面要加 $
const { $hello } = useNuxtApp();

const value1 = ref("");

// 注入 plugins 的插件
const selectedDate = ref(new Date());

// 環境變數 .env URL測試
const config = useRuntimeConfig();
console.log(config.public);
const { data, refresh } = await useFetch(
  `${config.public.apiBase}/api/banner`,
  {
    headers: {
      Authorization: `Bearer ${config.apiSecret}`,
    },
  }
);
console.log(data);

// console.log(process);
if (process.server) {
  console.log("server token:", config.apiSecret);
}

const handleMiddleware = async () => {
  const res = await fetch("/api/he").then((res) => res.json());
  console.log(res);
};

// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>
<style>
.title {
  font-size: calc(20px + 0.5vw);
}
p {
  font-size: calc(12px + 0.5vw);
}
</style>
