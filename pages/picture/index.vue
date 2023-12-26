<template>
  <div>
    <h1>NuxtImg</h1>
    <ul>
      <li v-for="item in aboutData" :key="item.id">
        <NuxtImg :src="`/${item.pic}`" :alt="item.title" :title="item.title" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
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

// const aboutData = reactive([
//   {
//     id: 1,
//     title: "About-11",
//     pic: require("@/assets/images/about-1.jpg"),
//   },
//   {
//     id: 2,
//     title: "About-22",
//     pic: require("@/assets/images/about-1.jpg"),
//   },
//   {
//     id: 3,
//     title: "About-33",
//     pic: require("@/assets/images/about-1.jpg"),
//   },
// ]);
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  li {
    width: 10%;
    margin: 20px;
  }
}
</style>
