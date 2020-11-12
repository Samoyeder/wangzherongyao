<template>
  <div class="hero-skills">
    <div class="hero-skills-button d-flex jc-between">
      <div class="hero-skills-video">
        <i class="iconfont icon-video"></i>
        <span>英雄介绍视频</span>
      </div>
      <div class="hero-skills-img">
        <i class="iconfont icon-video"></i>
        <span>一图识英雄</span>
      </div>
    </div>

    <div class="hero-skills-icon d-flex jc-around px-2 mt-2">
      <img
        class="nav-item"
        v-for="(item, index) in model.skills"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="$refs.list.swiper.slideTo(index)"
        :src="`${model.skills[index].icon}`"
      />
      <!-- <img :src="`${model.skills[index].icon}`" alt="" /> -->
    </div>
    <div class="hero-skills-info">
      <div class="swiper">
        <swiper
          :options="swiperOptions"
          ref="list"
          @slide-change="slideChange()"
        >
          <swiper-slide v-for="(category, index) in model.skills" :key="index">
            <h2>{{ model.skills[index].name }}</h2>
            <div>{{ model.skills[index].description }}</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSkill",
  props: {
    model: {
      type: Object,
    },
  },
  methods:{
    slideChange() {
      this.currentIndex = this.$refs.list.swiper.realIndex;
      // console.log(this.currentIndex);
      // console.log(this.$refs.list.swiper.realIndex);
    },
  },
  data() {
    return {
      currentIndex: 0,
      swiperOptions: {
        autoHeight: true,
        loop: true,
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

<style scoped lang="scss">
.hero-skills {
  background-color: #fff;
  padding: 0.2rem;
  .hero-skills-button > div {
    font-size: 0.36rem;
    border: 1px solid #eceef0;
    flex: 1;
    padding: 0.1rem;
  }
  .active {
    border: 3px solid #d59b40;
    border-radius: 43%;
  }
  .hero-skills-icon {
    padding: 0;
    // height: 70px;
    // line-height: 70px;
    margin-top: 0.45rem;
    // background-color: red;
    align-items: center;
    img {
      width: 62.4px;
      height: 62.4px;
    }
  }
  .hero-skills-info {
    font-size: 0.26rem;
    text-align: left;
  }
  // .hero-skills-button {
  //   .hero-skills-video {
  //     font-size: 0.36rem;
  //     border: 1px solid #eceef0;
  //     flex: 1;
  //   }
  //   .hero-skills-img {
  //     font-size: 0.36rem;
  //     border: 1px solid #eceef0;
  //     flex: 1;
  //   }
  // }
}
</style>