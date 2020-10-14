<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <swiper-slide>
        <img src="../assets/img/h1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/h2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/h4.jpeg" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
        // Some Swiper option/callback...
      },
    };
  },

};
</script>

<style lang="scss">
.swiper img {
  width: 100%;
  height: 100%;
}
.swiper-pagination {
  text-align: right !important;
  padding-right: 0.2rem;

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #4b67af;
  }
}
</style>