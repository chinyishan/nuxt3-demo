<template>
  <NuxtLayout name="layout-name">
    <Banner />
    <h1>商品列表</h1>
    <button @click="submit(1)">測試打API-1</button>
    <button @click="submit(2)">測試打API-2</button>
    <button @click="submit(3)">測試打API-3</button>
    <hr />
    {{ pdData }}
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
    <Footer />
  </NuxtLayout>
</template>

<script setup>
// import axios from "axios";
const { data } = await useFetch("https://dummyjson.com/products");
console.log(data, "data");
// console.log(data.value);

const pdData = ref({});

const submit = async (Id) => {
  const { data } = await useFetch(`https://dummyjson.com/products/${Id}`, {
    method: "GET",
    headers: { AcceptLanguage: "zh_TW" },
    query: { limit: "30" },
    onResponse(res) {
      return res._data;
    },
    onResponseError(err) {
      console.log(err);
    },
  });
  pdData.value = data.value;
  console.log(pdData.value, "pdData.value");
};

definePageMeta({
  layout: "custom",
});

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
  width: min(1200px, 94%);
  margin: 0 auto;

  .shop_col {
    display: flex;
    flex-direction: column;
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
@media screen and (max-width: 769px) {
  .shop_list {
    .shop_col {
      width: 40%;
      margin: 5px;
    }
  }
}
</style>
