<template>
  <div class="card">
    <div class="card-header d-flex jc-between">
      <i class="iconfont" :class="`${icon}`"></i>
      <div>{{ title }}</div>
      <i class="iconfont icon-more"></i>
    </div>
    <div class="card-body">
      <!-- nav -->
      <div class="nav d-flex jc-between">
        <div
          class="nav-item"
          v-for="(item, index) in categories"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="$refs.list.swiper.slideTo(index)"
        >
          <router-link to="/">{{ item.name }}</router-link>
        </div>
      </div>
      <!-- swiper -->
      <div class="swiper">
        <swiper
          :options="swiperOptions"
          ref="list"
          @slide-change="slideChange()"
        >
          <swiper-slide v-for="(category, index) in categories" :key="index" >
            <slot name="item" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
      <!-- <slot name="body"></slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      swiperOptions: {
        autoHeight:true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
        // Some Swiper option/callback...
      },
    };
  },
  methods:{
    // 将轮播图与导航绑定起来
    slideChange(){
      this.currentIndex = this.$refs.list.swiper.realIndex
      // console.log(this.currentIndex);
      // console.log(this.$refs.list.swiper.realIndex);
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  margin-top: 0.3rem;
  padding: 0.34rem;
  background-color: #fff;
  .card-header {
    display: flex;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #d4d9de;
    i {
      width: 0.27rem;
      height: 0.3rem;
      margin-right: 0.15rem;
    }
    div {
      font-size: 0.32rem;
      margin: 0;
      flex: 1;
      text-align: left;
      margin-left: 0.1rem;
    }
  }
  .card-body {
    .nav {
      height: 0.84rem;
      width: 100%;

      .active {
        border-bottom: 3px solid #db9e3f;
      }
      .nav-item {
        font-size: 0.26rem;
        // background-color: red;
        display: flex;
        align-items: center;
        a {
          color: black;
        }
      }
    }
    .swiper {
      font-size: 0.26rem;
    }
  }
}
</style>