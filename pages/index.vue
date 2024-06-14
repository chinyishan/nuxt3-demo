<template>
  <div class="app-container">
    <h1 class="title">首頁</h1>
    <div class="btn-primary">
      <el-button type="primary">element-plus</el-button>
    </div>
    <br />
    <br />
    <div class="btn-warning">
      <el-button type="warning">element-plus</el-button>
    </div>
    <br />
    <br />
    <div class="btn-primary">
      <el-button type="primary">element-plus</el-button>
    </div>
    <br />
    <br />
    <div class="btn-warning">
      <el-button type="warning">element-plus</el-button>
    </div>
    <br />
    <br />
    <!-- <SwiperBanner /> -->
    <!-- <SwiperProduct /> -->
    <!-- <button @click="handleMiddleware">get api test Middleware</button>
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
    <h3>composables-點擊按鈕: {{ count }}</h3>
    <button @click="add">composables-Add</button>
    <br />
    <br />
    <h3>store-點擊按鈕: {{ store.count }}</h3>
    <button @click="store.add">store-Add</button>
    <br />
    <br />
    <h3>{{ $hello("Sunny") }}</h3>
    <br />
    <br />
    <h3 v-timeformat="'Mon Dec 11 2023 23:28:38 GMT+0800 (GMT+08:00)'"></h3>
    <h3 v-timeformat="'1702308518986'"></h3>
    <br />
    <br />
    <VDatePicker v-model="selectedDate" />
    <br />
    <br />
    <button @click="refresh">測試環境URL</button>
    <br />
    <br /> -->
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

<style scoped lang="scss">
.title {
  font-size: calc(20px + 0.5vw);
  padding: 30px 10px;
}
p {
  font-size: calc(12px + 0.5vw);
}
.btn-primary {
  text-align: left;
}
.btn-warning {
  text-align: right;
}
</style>
