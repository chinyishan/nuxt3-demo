<template>
  <div>
    <h1>首頁-Nuxt3</h1>
    <!-- <SwiperBanner /> -->
    <button @click="handleMiddleware">get api test Middleware</button>
    <h2 class="title">composables-點擊按鈕: {{ count }}</h2>
    <button @click="add">composables-Add</button>
    <hr />
    <h2 class="title">store-點擊按鈕: {{ store.count }}</h2>
    <button @click="store.add">store-Add</button>
    <hr />
    <h2>{{ $hello("Sunny") }}</h2>
    <hr />
    <h2 v-timeformat="'Mon Dec 11 2023 23:28:38 GMT+0800 (GMT+08:00)'"></h2>
    <h2 v-timeformat="'1702308518986'"></h2>
    <hr />
    <VDatePicker v-model="selectedDate" />
    <hr />
    <button @click="refresh">Authorization: Bearer undefined</button>
  </div>
</template>
<script setup>
const { count, add } = useAddCount();
const store = useHomeStore();

// 注入 plugins 前面要加 $
const { $hello } = useNuxtApp();

// 注入 plugins 的插件
const selectedDate = ref(new Date());

// 環境變數
const config = useRuntimeConfig();
const { data, refresh } = await useFetch(`${config.public.apiUrl}/api/banner`, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
});

if (process.server) {
  console.log("server token:", config.token);
}

const handleMiddleware = async () => {
  const res = await fetch("/api/hello").then((res) => res.json());
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
