<template>
  <div>
    <div class="topbar bg-black d-flex ai-center px-3">
      <img src="../../assets/img/logo.png" class="logo" />
      <div class="logo_info flex-1">
        <p class="text-white text-left logo_t">王者荣耀</p>
        <p class="logo_i text-t-info text-left">团队成就更多</p>
      </div>
      <div class="download">
        <a href="#" class="bg-a-active-y text-black">立即下载</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang="scss">
.topbar {
  height: 0.9rem;
  padding: 0.1rem 0.25rem 0.1rem 0.25rem;
  position: sticky;
  top: 0;
  z-index: 999;
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
  font-size: 0.26rem;
  color: black;

  a {
    line-height: 0.48rem;
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>