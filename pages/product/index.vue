<template>
  <div>
    <h1>商品列表</h1>
    <div class="shop_list">
      <div class="shop_col" v-for="item in data.products" :key="item.id">
        <NuxtLink :to="`/product/${item.id}`" class="pic">
          <img :src="item.thumbnail" alt="pd" />
        </NuxtLink>
        <h3 class="title">{{ item.title }}</h3>
        <div class="description">
          <p>{{ item.description }}</p>
        </div>
        <div class="price">
          <strong>${{ item.price }}</strong>
        </div>
      </div>
    </div>
    <!-- {{ data }} -->
  </div>
</template>

<script setup>
// import axios from "axios";
const { data } = await useFetch("https://dummyjson.com/products");
// console.log(data.value);

useSeoMeta({
  title: () => `商品列表-${data.value.limit}`,
  ogTitle: () => `商品列表-${data.value.limit}`,
  description: () => `網頁說明商品-${data.value.total}`,
  ogDescription: () => `網頁說明商品-${data.value.total}`,
});

// const productsData = reactive({});

// const { data } = await useAsyncData("useProducts", async () => {
//   const res = await axios.get("https://dummyjson.com/products");
//   return res.data;
// });
</script>

<style lang="scss" scoped>
.shop_list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  width: min(1200px, 93%);
  margin: 0 auto;

  .shop_col {
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
    width: 24%;
    padding: 15px;
    margin: 10px;
    background-color: #fffde9;

    .pic {
      width: 100%;
      height: 200px;
      overflow: hidden;
      background-color: #fff;
      margin-bottom: 10px;

      img {
        object-fit: contain;
        object-position: center;
      }
    }
    .title {
      margin-bottom: 10px;
    }
    .description {
      margin-bottom: 10px;
      flex-grow: 1;
    }
    .price {
      text-align: right;
      color: rgb(255, 27, 80);
      font-size: 28px;
    }
  }
}
</style>
