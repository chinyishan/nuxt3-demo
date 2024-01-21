<template>
  <div class="app-container">
    <NuxtLoadingIndicator color="#02b24e" :height="10" :throttle="0">
      <p>Loading</p>
    </NuxtLoadingIndicator>
    <!-- <p v-show="isLoading">Loading</p> -->
    <Header />
    <Banner />
    <NuxtPage />
  </div>
</template>

<script setup>
import "virtual:svg-icons-register";

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
