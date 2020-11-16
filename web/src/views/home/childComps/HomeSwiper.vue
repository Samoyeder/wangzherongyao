<template>
  <div>
    <swiper :options="swiperOptions" class="swiper" v-if="ads[0]">
      <swiper-slide v-for="(item,index) in ads[0].items" :key="index" >
        <a :href="item.url">
        <img :src='item.image' alt="" />

        </a>
        <!-- <div>{{item}}</div> -->
      </swiper-slide>
      <!-- <swiper-slide>
        <img src="../../../assets/img/h2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/img/h4.jpeg" alt="" />
      </swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      ads:{},
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
  methods:{
    async fetchAds(){
      const res = await this.$http.get('ads/list')
      this.ads = res.data
    },

  },
  created(){
    this.fetchAds()
  }
};
</script>

<style lang="scss">
// swiper
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
// end of swiper
</style>