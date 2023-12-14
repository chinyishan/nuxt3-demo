<template>
  <div class="swiper-container">
    <!-- <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://picsum.photos/id/111/300/300" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/id/111/300/300" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="https://picsum.photos/id/111/300/300" alt="" />
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->
    <Swiper
      class="swiper-banner"
      :modules="[Autoplay, Navigation]"
      :slidesPerView="3"
      :spaceBetween="10"
      :loop="true"
      :centeredSlides="false"
      :grabCursor="true"
      :navigation="true"
      :speed="1000"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        769: {
          slidesPerView: 5,
          centeredSlides: true,
        },
      }"
    >
      <SwiperSlide v-for="item in testData" :key="item.id">
        <img :src="item.pic" :alt="item.title" :title="item.title" />
        <h4>{{ item.title }}</h4>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
// const modules = [Autoplay, Navigation];

const { testData } = useTestStore();

// const swiperConfigBrand = {
//   modules: [Autoplay, Navigation],
//   slidesPerView: 3,
//   spaceBetween: 10,
//   centeredSlides: true,
//   loop: true,
//   grabCursor: true,
//   speed: 1000,
//   navigation: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     769: {
//       slidesPerView: 5,
//     },
//   },
// };

// new Swiper(".mySwiper", {
//   slidesPerView: 5,
//   spaceBetween: 10,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
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
