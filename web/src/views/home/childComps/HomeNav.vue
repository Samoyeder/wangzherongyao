<template>
  <div>
    <div class="nav-icon d-flex" :class="{ open: isOpen }">
      <div class="nav-item">
        <a href="#" class="nav-link">
          <i class="sprite sprite-news"></i>
          <p>爆料站</p>
        </a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">
          <i class="sprite sprite-stroy"></i>
          <p>故事站</p>
        </a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">
          <i class="sprite sprite-shop"></i>
          <p>周边商城</p>
        </a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">
          <i class="sprite sprite-server"></i>
          <p>体验服</p>
        </a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">
          <i class="sprite sprite-glory"></i>
          <p>荣耀传承</p>
        </a>
      </div>
      <div class="nav-item">
        <a href="#" class="nav-link">
          <i class="sprite sprite-camp"></i>
          <p>王者营地</p>
        </a>
      </div>
    </div>
    <div class="nav-button" @click="isOpen = !isOpen">
      <div>{{ isOpen ? "收起" : "展开" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    // buttonClick() {
    //   let icon = document.querySelector(".nav-icon");
    //   let button = document.querySelector(".nav-button");
    //   if (button.innerHTML === "展开") {
    //     icon.className = "nav-icon d-flex open";
    //     button.innerHTML = "收起";
    //   } else if (button.innerHTML === "收起") {
    //     icon.className = "nav-icon d-flex ";
    //     button.innerHTML = "展开";
    //   }
    // },
  },
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
.nav-icon.open {
  // background-color: red;
  height: auto;
  transition: all 0.3s;
  // overflow: auto;
}
.nav-icon {
  padding-bottom: 0.2rem;
  background-color: #fff;
  flex-wrap: wrap;
  height: 1.7rem;
  overflow: hidden;
  // &.active {
  //   background-color: red;

  // }
  .nav-item {
    // background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // align-content: space-around;
    width: 25%;
    border-right: 1px solid #d4d9de;
    margin-top: 0.3rem;
    height: 1.2rem;
    line-height: 0.6rem;
    &:nth-child(4n) {
      border: none;
    }
    .nav-link {
      text-align: center;
      i {
        display: inline-block;
        text-align: center;
      }
      p {
        font-size: 0.26rem;
        margin: 0;
      }
    }
  }
}
// end of nav-icon
.nav-button {
  background-color: #f9f9f9;
  font-size: 0.26rem;
  line-height: 0.6rem;
}
</style>