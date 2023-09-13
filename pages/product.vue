<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style
        type="text/css"
        children="body { background-color: #ebebeb; }"
      ></Style>
    </Head>
    <h1>商品頁</h1>
  </div>
</template>

<script setup>
const title = ref("Hello Product");

useSeoMeta({
  title: "Product",
  description: "商品 - meta tag 設定",
  ogTitle: "Product",
  ogDescription: "商品 - meta tag 設定",
});
</script>
