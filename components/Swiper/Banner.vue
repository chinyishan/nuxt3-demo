<template>
  <div class="swiper-container">
    <Swiper class="swiper-banner" v-bind="swiperConfigBrand">
      <SwiperSlide v-for="item in testData" :key="item.id">
        <img :src="item.pic" :alt="item.title" :title="item.title" />
        <h4>{{ item.title }}</h4>
      </SwiperSlide>
      <!-- <SwiperSlide>
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
      </SwiperSlide> -->
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import { useTestStore } from "~/stores/test";
// const modules = [Autoplay, Navigation];

const { testData } = useTestStore();

const swiperConfigBrand = {
  modules: [Autoplay, Navigation],
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  speed: 1000,
  navigation: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    769: {
      slidesPerView: 5,
    },
  },
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
