<template>
  <div>
    <Header />
    <Banner />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  height: 1000px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup>
useHead({
  //titleChunk不同page 設定的 title
  titleTemplate: "%s - meta tag 設定",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - meta tag 設定` : "meta tag 設定";
  },
});
</script>
