<template>
  <div>
    <h3>courses list</h3>
    <CardList :courses="data" />
  </div>
</template>

<script setup>
const { data } = useFetch("https://vue-lessons-api.vercel.app/courses/list");
</script>

<style></style>
