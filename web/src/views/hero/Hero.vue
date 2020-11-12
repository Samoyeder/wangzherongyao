<template>
  <div v-if="model">
    <hero-top-bar></hero-top-bar>
    <hero-top :model="model"></hero-top>
    <hero-skill :model="model"></hero-skill>
  </div>
</template>

<script>
// 子组件
import HeroTopBar from './childComps/HeroTopBar'
import HeroTop from './childComps/HeroTop'
import HeroSkill from './childComps/HeroSkill'

export default {
  name: "Hero",
  components:{
    HeroTopBar,
    HeroTop,
    HeroSkill
  },
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async fetchHero() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetchHero();
  },
};
</script>

<style scoped lang="scss">



</style>