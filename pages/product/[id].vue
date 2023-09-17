<template>
  <div>
    <h1>詳細商品</h1>
    <section>
      <div class="product_row">
        <div class="product_col pic">
          <img :src="data.thumbnail" alt="pd" />
        </div>
        <div class="product_col">
          <div class="description txt">
            <h2 class="title">{{ data.title }}</h2>
            <h3>brand : {{ data.brand }}</h3>
            <p>{{ data.description }}</p>
          </div>
          <div class="description price">
            <strong>${{ data.price }}</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.params.id);

const { data } = await useFetch(
  `https://dummyjson.com/products/${route.params.id}`
);

useSeoMeta({
  title: () => `商品-${data.value.title}`,
  ogTitle: () => `商品-${data.value.title}`,
  description: () => `網頁說明-${data.value.description}`,
  ogDescription: () => `網頁說明-${data.value.description}`,
});
</script>

<style lang="scss" scoped>
.product_row {
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(1200px, 93%);
  margin: 0 auto;
  .product_col {
    height: 400px;
    margin: 20px;
    &.pic {
      width: 100%;
      overflow: hidden;
      background-color: #f4f4f4;
      margin-bottom: 10px;

      img {
        object-fit: contain;
        object-position: center;
      }
    }

    &:nth-child(1) {
      width: 55%;
    }
    &:nth-child(2) {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    h2 {
      font-size: 40px;
    }
    .description {
      width: 100%;

      &.txt {
        margin-bottom: 20px;
      }

      &.price {
        text-align: right;
        color: rgb(255, 27, 80);
        font-size: 28px;
      }
    }
  }
}
</style>
