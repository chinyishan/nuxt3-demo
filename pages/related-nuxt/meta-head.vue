<template>
  <div>
    <h1>Head & SEO & composables 測試</h1>
    <br />
    <p>{{ data }}</p>
    <br />
    <div class="box">
      <Button @click="dataCount.add">add count</Button>
      <h2>{{ dataCount.count }}</h2>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const { data } = await useAsyncData("banner", async () => {
  const res = await axios.get("https://api.github.com/orgs/nuxt");
  return res.data;
});

console.log(data);

// 測試- 動態 Seo
useServerSeoMeta({
  title: () => `${data.value.name}-標題`,
  ogTitle: () => `${data.value.name}-標題`,
  description: () => `${data.value.description}-網頁說明`,
  ogDescription: () => `${data.value.description}-網頁說明`,
  ogImage: () => `${data.value.avatar_url}`,
});

// 測試-單一頁面引入
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
      tagPosition: "bodyClose",
    },
  ],
});

// composables 測試
const dataCount = useAddCount();
</script>

<style>
.box {
  text-align: center;
}
</style>
