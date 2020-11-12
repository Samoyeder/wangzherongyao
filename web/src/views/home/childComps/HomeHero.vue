<template>
  <div>
    <card
      class="home-hero"
      title="英雄列表"
      icon="icon-head"
      :categories="heroList"
    >
      <template v-slot:item="{ category }">
        <div class="d-flex flex-wrap ">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="hero-con"
            v-for="(hero, index) in category.heroList"
            :key="index"
          >
            <img :src="`${hero.avatar}`" class="hero-avatar" />
            <div class="hero-name">{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
// 公共组件
import Card from "../../../components/common/Card";
export default {
  name: "HomeHero",
  components: {
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

<style scoped lang="scss">
.home-hero {
  .hero-con {
    line-height: 0.4rem;
    margin-top: 0.1rem;
    width: 20%;
    .hero-name {
      line-height: 0.4rem;
    }
    .hero-avatar {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
}
</style>