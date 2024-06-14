<template>
  <div>
    <h1>{{ $route.params.group }} - {{ $route.params.id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();

useSeoMeta({
  title: () => `${route.params.group}-${route.params.id}`,
  description: () => `${route.params.id} - meta tag 設定`,
  ogTitle: () => `${route.params.group}-${route.params.id}`,
  ogDescription: () => `${route.params.id} - meta tag 設定`,
});
</script>

<style></style>
