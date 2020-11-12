<template>
  <div>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <home-news></home-news>
    <home-hero></home-hero>
    <home-video></home-video>
    <card title="新闻资讯" icon="icon-cc-menu-circle"></card>
    <card title="新闻资讯" icon="icon-cc-menu-circle"></card>
    <card title="新闻资讯" icon="icon-cc-menu-circle"></card>
    <!-- end of new -->
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeNav from "./childComps/HomeNav";
import HomeNews from "./childComps/HomeNews";
import HomeHero from "./childComps/HomeHero";
import HomeVideo from "./childComps/HomeVideo";

// 公共组件
import Card from "../../components/common/Card";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeNav,
    HomeNews,
    HomeHero,
    HomeVideo,
    Card,
  },
  data() {
    return {
      heroList: [],
    };
  },
  methods: {
    async fetchHeroList() {
      const res = await this.$http.get("heroes/list");
      this.heroList = res.data;
    },
  },
  created() {
    this.fetchHeroList();
  },
};
</script>

<style lang="scss">

</style>