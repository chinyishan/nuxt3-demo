<template>
  <div class="about">
    <h1>關於我們</h1>
    <div class="box">
      <Button @click="dataCount.add" />
      <h2>{{ dataCount.count }}</h2>
    </div>
    {{ data }}
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import { xssParse } from "@/lib/filterXss.js";

// 測試-API
const { data } = await useAsyncData("banner", async () => {
  const res = await axios.get("https://api.github.com/orgs/nuxt");
  return res.data;
});

useServerSeoMeta({
  title: () => `${data.value.name}-標題`,
  ogTitle: () => `${data.value.name}-標題`,
  description: () => `${data.value.description}-網頁說明`,
  ogDescription: () => `${data.value.description}-網頁說明`,
  ogImage: () => `${data.value.avatar_url}`,
});

const dataCount = useAddCount();

// 測試-多國語系
const { t } = useI18n();
const content = computed(() => xssParse(t("about_content")));

// 測試-單一頁面引入
// useHead({
//   link: [
//     {
//       rel: "stylesheet",
//       href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
//     },
//   ],
//   script: [
//     {
//       src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
//       async: true,
//       tagPosition: "bodyClose",
//     },
//   ],
// });
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>
