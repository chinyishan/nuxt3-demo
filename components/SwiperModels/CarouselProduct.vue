<template>
  <div class="swiper-container">
    <Swiper
      class="swiper-banner"
      :modules="[Autoplay, Navigation]"
      :slidesPerView="6"
      :spaceBetween="10"
      :loop="true"
      :loopedSlides="4"
      :centeredSlides="false"
      :grabCursor="true"
      :navigation="true"
      :speed="1000"
    >
      <SwiperSlide
        v-for="item in modelData.carousel_product.items"
        :key="item.id"
      >
        <div class="pic">
          <img :src="item.main_image" :alt="item.name" :title="item.name" />
        </div>
        <h4>{{ item.name }}</h4>
        <p>{{ item.description }}</p>
        <p>{{ item.sale_price }}</p>
      </SwiperSlide>
    </Swiper>
    <button v-if="modelData.carousel_product.more == true">查看更多</button>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
const modules = [Autoplay, Navigation];

const props = defineProps({
  modelData: {
    typeof: Object,
  },
});
</script>
<style lang="scss" scoped>
.swiper-container {
  .swiper-wrapper {
    .swiper-slide {
      h4 {
        padding: 20px;
        color: red;
      }
    }
  }
}
</style>
