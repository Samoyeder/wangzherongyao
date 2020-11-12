<template>
    <div
      class="top"
      :style="{ 'background-image': `url(${model.banner})` }"
      v-if="model.categories"
    >
      <div class="hero-attribute">
        <div>{{ model.title }}</div>
        <h2 class="hero-name">{{ model.name }}</h2>
        <div>{{ model.categories.map((v) => v.name).join("/") }}</div>
        <div class="hero-score">
          <span>难度</span>
          <span>{{ model.scores.difficult }}</span>
          <span>技能</span>
          <span>{{ model.scores.skills }}</span>
          <span>攻击</span>
          <span>{{ model.scores.attack }}</span>
          <span>生存</span>
          <span>{{ model.scores.survive }}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HeroTop",
  props:{
    model:{
      type:Object
    }
  }
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 4.52rem;
  // 宽 高
  background-size: auto 100%;
  background-repeat: no-repeat;
  // 垂直 水平
  background-position: top center;
  position: relative;
  padding: 0.2rem;
  .hero-attribute {
    color: #fff;
    font-size: 0.3rem;
    text-align: left;
    position: absolute;
    bottom: 0.2rem;
    .hero-name {
      font-size: 0.4rem;
      margin: 0;
      line-height: 0.45rem;
    }
    .hero-score {
      span {
        margin-right: 0.2rem;
      }
    }
  }
}
</style>