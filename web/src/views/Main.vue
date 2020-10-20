<template>
  <div>
    <div class="topbar bg-black d-flex ai-center px-3">
      <img src="../assets/img/logo.png" class="logo" />
      <div class="logo_info flex-1">
        <p class="text-white text-left logo_t">王者荣耀</p>
        <p class="logo_i text-t-info text-left">团队成就更多</p>
      </div>
      <div class="download">
        <a href="#" class="bg-a-active-y text-black">立即下载</a>
      </div>
    </div>

    <div class="nav bg-a-active-y d-flex jc-around">
      <div class="nav-item active">
        <router-link to="/">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/">攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/">赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss">
.topbar {
  height: 0.9rem;
  padding: 0.1rem 0.25rem 0.1rem 0.25rem;
}
.logo {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.18rem;
}
.logo_t {
  font-size: 0.26rem;
  // margin-top: .5rem;
  line-height: 0;
}
.logo_i {
  font-size: 0.16rem;
  line-height: 0.1rem;
}
.download {
  height: 0.48rem;
  width: 1.2rem;
  // margin-top: .5rem;
  font-size: 0.1rem;
  color: black;

  a {
    line-height: 0.48rem;
    width: 100%;
    height: 100%;
    display: block;
  }
}

// 导航栏
.nav {
  height: 0.84rem;
  width: 100%;

  .active {
    border-bottom: 3px solid #fff;
  }
  .nav-item {
    font-size: 0.26rem;
    // background-color: red;
    display: flex;
    align-items: center;
    a {
      color: white;
    }
  }
}
</style>