<template>
  <div>
    <h1>Img 動態綁定路由</h1>
    <hr />
    <h2>NuxtImg</h2>
    <ul>
      <li v-for="item in aboutData" :key="item.id">
        <NuxtImg :src="`/${item.pic}`" :alt="item.title" :title="item.title" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <hr />
    <h2>import.meta.glob</h2>
    <ul>
      <li v-for="item in aboutDataTest" :key="item.id">
        <img :src="images[item.pic]" :alt="item.title" :title="item.title" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <!-- <SvgIcon name="icon-globe" fill="#00A53A" stroke="#00A53A"></SvgIcon>
    <SvgIcon name="earth-world" fill="#00A53A" stroke="#00A53A"></SvgIcon>
    <SvgIcon name="icon-community" color="#00A53A"></SvgIcon>
    <SvgIcon name="icon-documentation" color="#00A53A"></SvgIcon> -->
    <!-- <img :src="images[dynamic_image_name]" alt="Discover Nuxt 3" /> -->
  </div>
</template>

<script setup>
// 測試-assets 圖片資料
const aboutData = reactive([
  {
    id: 1,
    title: "About-11",
    pic: "about-1.jpg",
  },
  {
    id: 2,
    title: "About-22",
    pic: "about-2.jpg",
  },
  {
    id: 3,
    title: "About-33",
    pic: "about-3.jpg",
  },
]);

const aboutDataTest = reactive([
  {
    id: 1,
    title: "About-11",
    pic: "about-1",
  },
  {
    id: 2,
    title: "About-22",
    pic: "about-2",
  },
  {
    id: 3,
    title: "About-33",
    pic: "about-3",
  },
]);

import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/images/*.jpg", { eager: true });
console.log(glob);
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

// const dynamic_image_name = aboutDataTest.pic;
// console.log(dynamic_image_name);
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
ul {
  display: flex;
  justify-content: center;
  li {
    width: 10%;
    margin: 20px;
  }
}
</style>
