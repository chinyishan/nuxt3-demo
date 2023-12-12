<script setup>
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);
</script>

<template>
  <h1>404 Not Found</h1>
  <p>{{ route.params.slug }}</p>
</template>
