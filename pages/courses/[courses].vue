<template>
  <div>
    <h2>{{ route.fullPath }}</h2>
    {{ data }}
    <br />
    <NuxtLink :to="`/courses/${route.params.courses}/`">內頁介紹</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/A`">AA</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/B`">BB</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/C`">CC</NuxtLink>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.courses}`
);
</script>

<style>
a {
  padding: 20px;
  display: inline-block;
  font-size: 20px;
}
</style>
