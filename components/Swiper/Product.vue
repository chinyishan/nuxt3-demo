<template>
  <div class="swiper-container">
    <Swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper.value }"
      :modules="modules"
      class="mySwiper2"
    >
      <SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
      /></SwiperSlide>
    </Swiper>
    <Swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
      /></SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./style.css";

// import required modules

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(1);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>
