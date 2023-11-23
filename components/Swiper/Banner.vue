<template>
  <div class="swiper-container">
    <Swiper class="swiper-banner" v-bind="swiperConfigBrand">
      <!--       
      :modules="modules"
      :slides-per-view="5"
      :space-between="10"
      :centered-slides="true"
      :grabCursor="true"
      :loop="true"
      :speed="1000"
      navigation 
    -->
      <!--       
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }" 
    -->
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
      <SwiperSlide>
        <img
          src="https://picsum.photos/id/115/300/300"
          alt="測試"
          title="測試"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// const modules = [Autoplay, Navigation];

const swiperConfigBrand = {
  modules: [Autoplay, Navigation],
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  loopAddBlankSlides: true,
  grabCursor: true,
  speed: 1000,
  navigation: true,
};
</script>
<style lang="scss">
.swiper-container {
  .swiper-wrapper {
    .swiper-slide {
      transform: scale(0.8);
      opacity: 0.5;
      transition: 0.5s;

      &.swiper-slide-active {
        transform: scale(1);
        opacity: 1;
      }
      // .brand-group {
      //   padding: 10%;
      //   .brand-pic {
      //     border-radius: calc(10px + 0.2vw);
      //     overflow: hidden;
      //     box-shadow: 0 4px 20px 0px rgb(0, 0, 0, 0.2);
      //     margin-bottom: calc(14px + 1vw);
      //     background-color: $white;
      //   }
      //   .brand-title {
      //     h3 {
      //       text-align: center;
      //     }
      //   }
      // }
    }
  }
}
</style>
