<template>
  <div class="swiper-container">
    <Swiper
      class="swiper-banner"
      :modules="modules"
      :slides-per-view="5"
      :slides-per-group="1"
      :space-between="20"
      :centered-slides="false"
      :grabCursor="true"
      :loop="true"
      :speed="1000"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      navigation
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/id/111/300/300"
          alt="測試"
          title="測試"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/id/112/300/300"
          alt="測試"
          title="測試"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/id/113/300/300"
          alt="測試"
          title="測試"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/id/114/300/300"
          alt="測試"
          title="測試"
        />
      </SwiperSlide>
    </Swiper>
    <!-- <div class="swiper-button-prev banner-prev"></div>
    <div class="swiper-button-next banner-next"></div> -->
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Autoplay, Navigation];
</script>
<style lang="scss"></style>
