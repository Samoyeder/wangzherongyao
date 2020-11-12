<template>
  <div>
    <div class="topbar bg-black d-flex ai-center px-3">
      <img src="../../../assets/img/logo.png" class="logo" />
      <p class="text-white text-left logo_t">王者荣耀</p>
      <p class="logo_i text-t-info text-left flex-1 pl-1">攻略站</p>
      <router-link to="/" tag="div" class="hero-more"
        >更多英雄 &gt;</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroTopBar'
}
</script>

<style lang="scss" scoped>
.topbar {
  p {
    color: #fff;
    font-size: 0.3rem;
    margin: 0;
  }
  .hero-more {
    font-size: 0.3rem;
    color: #fff;
  }
}
</style>