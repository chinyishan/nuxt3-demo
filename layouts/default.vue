<template>
  <div class="app-container">
    <!-- <NuxtLoadingIndicator color="#02b24e" :height="10" :throttle="0">
      <p>Loagding</p>
    </NuxtLoadingIndicator> -->
    <h1 v-show="isLoading">Loading</h1>
    <Header />
    <!-- <Banner /> -->
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(false);
nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
