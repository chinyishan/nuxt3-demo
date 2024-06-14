<template>
  <div class="app-container">
    <div class="btn-primary">
      <el-button type="primary">element-plus</el-button>
    </div>
    <hr />
    <div class="btn-warning">
      <el-button type="warning">element-plus</el-button>
    </div>
    <NuxtErrorBoundary>
      <ButtonOops />
      <p>這裡是發生錯誤時，才會渲染出來的地方</p>
      <template #error="{ error }">
        <p style="color: red">An error occurred: {{ error }}</p>
      </template>
    </NuxtErrorBoundary>

    <hr />

    <h3>composables-點擊按鈕: {{ count }}</h3>
    <button @click="add">composables-Add</button>

    <hr />

    <h3>store-點擊按鈕: {{ store.count }}</h3>
    <button @click="store.add">store-Add</button>

    <hr />

    <h3>{{ $hello("Sunny") }}</h3>

    <hr />

    <h3 v-timeformat="'Mon Dec 11 2023 23:28:38 GMT+0800 (GMT+08:00)'"></h3>
    <h3 v-timeformat="'1702308518986'"></h3>

    <hr />

    <VDatePicker v-model="selectedDate" />

    <hr />

    <button @click="refresh">測試環境URL</button>

    <hr />
  </div>
</template>

<script setup>
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

if (process.server) {
  console.log("server token:", config.apiSecret);
}

const handleMiddleware = async () => {
  const res = await fetch("/api/he").then((res) => res.json());
  console.log(res);
};
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
