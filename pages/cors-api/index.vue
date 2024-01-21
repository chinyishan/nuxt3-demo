<template>
  <div>
    <h3>開發階段 CORS(跨網域) API 處理</h3>
    <br />
    {{ data }}
    <br />
    <br />
    <ul>
      <li v-for="item in data" :key="item.key">{{ item.strText }}</li>
    </ul>
  </div>
</template>

<script setup>
// 京站威秀 API
// https://www.vscinemas.com.tw/VsWeb/api/GetLstDicCinema

// 未處理跨域
// onMounted(async () => {
//   const response = await $fetch(
//     "https://www.vscinemas.com.tw/VsWeb/api/GetLstDicCinema"
//   );
//   console.log(response);
// });

// 處理
onMounted(async () => {
  const response = await $fetch("/VsWeb/api/GetLstDicCinema");
  data.value = response;
  console.log(response);
});

const data = ref("");
</script>

<style></style>
