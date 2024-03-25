<template>
  <div>
    <h1>品牌產品嵌套路由</h1>
    <div class="brand-link">
      <NuxtLink
        :to="{
          path: `/brand-product/brand/`,
        }"
        >全部商品11</NuxtLink
      >
      <NuxtLink
        v-for="item in store.resource.brands"
        :key="item.id"
        :to="{
          path: `/brand-product/brand/${item.id}`,
        }"
        >{{ item.name }}</NuxtLink
      >
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
console.log("route :", route);
console.log("route :", route.params);
const store = useProductStore();
</script>

<style scoped>
.brand-link {
  display: flex;
}
a {
  padding: 20px;
}
</style>
