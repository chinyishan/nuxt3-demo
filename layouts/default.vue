<template>
  <div class="app-container">
    <NuxtLoadingIndicator
      color="#02b24e"
      :height="5"
      :throttle="0"
    ></NuxtLoadingIndicator>
    <!-- <div class="box">
      <div class="box-in"></div>
    </div> -->
    <MainHeader />
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
.box {
  padding: 2.5%;
  /* width: 100%;
  height: 100%; */
}
.box-in {
  background-color: #e4ffe1;
  /* width: auto; */
  height: 300px;
  box-shadow: 0px 0px 20px 0px #346d3a40;
}
</style>
