<template>
  <div>
    <h1>首頁-Nuxt3</h1>
    <SwiperBanner />
    <h2 class="title">composables-點擊按鈕: {{ count }}</h2>
    <button @click="add">composables-Add</button>
    <hr />
    <h2 class="title">store-點擊按鈕: {{ store.count }}</h2>
    <button @click="store.add">store-Add</button>
  </div>
</template>
<script setup>
const { count, add } = useAddCount();

const store = useHomeStore();

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
