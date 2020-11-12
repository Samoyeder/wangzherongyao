<template>
  <div>

    <top-bar></top-bar>
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
import TopBar from 'components/common/TopBar'
export default {
  name: "Main",
  components:{
    TopBar
  }
};
</script>

<style lang="scss">


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