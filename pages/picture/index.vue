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
        <img
          :src="img.imagesJpg[item.pic]"
          :alt="item.title"
          :title="item.title"
        />
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <hr />
    <h2>import.meta.glob - png</h2>
    <ul>
      <li v-for="item in iconDataTest" :key="item.id">
        <img
          :src="img.imagesPng[item.pic]"
          :alt="item.title"
          :title="item.title"
        />
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <hr />
    <h2>SvgIcon</h2>
    <SvgIcon name="icon-globe"></SvgIcon>
    <SvgIcon name="earth-world"></SvgIcon>
    <SvgIcon name="icon-community" color="#00A53A"></SvgIcon>
    <SvgIcon name="icon-documentation" color="#00A53A"></SvgIcon>
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

const iconDataTest = reactive([
  {
    id: 1,
    title: "icon-11",
    pic: "icon-1",
  },
  {
    id: 2,
    title: "icon-22",
    pic: "icon-2",
  },
  {
    id: 3,
    title: "icon-33",
    pic: "icon-3",
  },
]);

// import { filename } from "pathe/utils";

// const glob = import.meta.glob("~/assets/images/*.jpg", { eager: true });
// const images = Object.fromEntries(
//   Object.entries(glob).map(([key, value]) => [filename(key), value.default])
// );
// console.log(glob);

// const globPng = import.meta.glob("~/assets/images/*.png", { eager: true });
// const imagesPng = Object.fromEntries(
//   Object.entries(globPng).map(([key, value]) => [filename(key), value.default])
// );
// console.log(globPng);

const img = useImg();
console.log(img);
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
