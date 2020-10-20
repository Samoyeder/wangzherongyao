<template>
  <div>
    <div class="nav-icon d-flex">
      <div class="nav-item" v-for="n in 10" :key="n">
        <i class="sprite sprite-news"></i>
        <p>爆料站</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
};
</script>

<style lang="scss">
// sprite
.sprite {
  background: url("../../../assets/img/index.png") no-repeat 0 0;
  // 原图750px，设置为375px
  background-size: 8.9286rem;
  display: inline-block;

  // 爆料站
  &.sprite-news {
    width: 23px;
    height: 20px;
    background-position: 63.546% 15.517%;
  }
  // 故事站
  &.sprite-stroy {
    width: 23px;
    height: 20px;
    background-position: 90.483% 15.614%;
  }
  // 周边商城
  &.sprite-shop {
    width: 19px;
    height: 22px;
    background-position: 36.746% 0.924%;
  }
  // 体验服
  &.sprite-server {
    width: 20px;
    height: 20px;
    background-position: 10.408% 15.517%;
  }
  // 荣耀传承
  &.sprite-glory {
    width: 24px;
    height: 20px;
    background-position: 36.467% 15.287%;
  }
  // 王者营地
  &.sprite-camp {
    width: 24px;
    height: 24px;
    background-position: 63.3% 0.927%;
  }
}
// end of sprite
// nav-icon
.nav-icon {
  padding-bottom: .2rem;
  background-color: #fff;
  flex-wrap: wrap;
  .nav-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 25%;
    border-right: 1px solid #d4d9de;
    margin-top: .3rem;
    height: 1rem;
    &:nth-child(4n){
      border: none;
    }
    i{
      margin-left: .85rem;
      // text-align: center;
    }
    p {
      font-size: 0.26rem;
      margin: 0;

    }
  }
}
// end of nav-icon
</style>