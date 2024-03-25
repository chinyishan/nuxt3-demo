<template>
  <div>
    <h2>產品</h2>
    <h4>{{ route.params }}</h4>
  </div>
</template>

<script setup>
const route = useRoute();
const store = useProductStore();
</script>

<style></style>
