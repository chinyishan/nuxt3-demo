<template>
  <div>
    <h1>首頁-Nuxt3</h1>
    <!-- <SwiperBanner /> -->
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
  </div>
</template>
<script setup>
const { count, add } = useAddCount();
const store = useHomeStore();

// 注入 plugins 前面要加 $
const { $hello } = useNuxtApp();

// 注入 plugins 的插件
const selectedDate = ref(new Date());

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
