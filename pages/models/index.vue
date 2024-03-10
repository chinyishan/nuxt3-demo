<template>
  <div>
    <h1>輪播模組</h1>
    <!-- {{ store.models["page.index"].attribute_data.carousel }} -->
    <SwiperModelsCarousel :modelData="handleModelData" />
    <br />
    <SwiperModelsCarouselBrand :modelData="handleModelData" />
    <br />
    <SwiperModelsCarouselProduct :modelData="handleModelData" />
    <br />
    <br />
  </div>
</template>

<script setup>
const store = useModelStore();

// console.log("store", store);

const handleShow = computed(() => {
  if (store.models["page.index"].attribute_data !== null) {
    return true;
  } else {
    return false;
  }
});

const handleModelData = computed(() => {
  if (store.models["page.index"].attribute_data !== null) {
    return store.models["page.index"].attribute_data;
  }
});
</script>

<style></style>
