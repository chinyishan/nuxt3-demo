<template>
  <div class="swiper-container">
    <Swiper
      class="swiper-banner"
      :modules="[Autoplay, Navigation]"
      :slidesPerView="1"
      :spaceBetween="0"
      :loop="true"
      :loopedSlides="4"
      :centeredSlides="false"
      :grabCursor="true"
      :navigation="true"
      :speed="1000"
    >
      <SwiperSlide v-for="item in modelData.carousel.items" :key="item.id">
        <img :src="item.image" :alt="item.title" :title="item.title" />
      </SwiperSlide>
    </Swiper>
    <button v-if="modelData.carousel.more == true">查看更多</button>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
const modules = [Autoplay, Navigation];

// const { testData } = useTestStore();

const props = defineProps({
  modelData: {
    type: Object,
  },
});
// console.log("props.modelData", props.modelData);
</script>
<style lang="scss" scoped>
// .swiper-container {
//   .swiper-wrapper {
//     .swiper-slide {
//       transform: scale(0.8);
//       opacity: 0.5;
//       transition: 0.5s;

//       &.swiper-slide-active {
//         transform: scale(1);
//         opacity: 1;
//       }
//     }
//   }
// }
</style>
