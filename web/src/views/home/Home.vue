<template>
  <div>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <!-- new -->
    <card
      class="home-new"
      title="新闻资讯"
      icon="icon-cc-menu-circle"
      :categories="newsCate"
    >
      <template v-slot:item="{ category }">
        <div
          class="new-con"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span
            class="new-name  "
            :class="`icon-${news.categoryType}`"
            >{{ news.categoryName }}</span
          >

          <span class="new-title">{{ news.title }}</span>
          <span class="new-date">{{ news.date }}</span>
        </div>
      </template>
    </card>
    <!-- end of new -->
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeNav from "./childComps/HomeNav";

// 公共组件
import Card from "../../components/common/Card";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeNav,
    Card,
  },
  data() {
    return {
      newsCate: [
        {
          name: "热门",
          newsList: [
            {
              categoryType: "notice",
              categoryName: "公告",
              title: "4536",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "安蒂哈德及爱上上帝",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "423",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "安蒂哈德及爱上上帝",
              date: "06/01",
            },
          ],
        },
        {
          name: "新闻",
          newsList: [
            {
              categoryName: "公告",
              title: "123",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "安蒂哈德及爱上上帝",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "安蒂哈德及爱上上帝",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "安蒂哈德及爱上上帝",
              date: "06/01",
            },
          ],
        },
        {
          name: "公告",
          newsList: [
            {
              categoryName: "公告",
              title: "453",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "安蒂哈德及爱上上帝",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "安蒂哈德及爱上上帝",
              date: "06/01",
            },
            {
              categoryName: "公告",
              title: "243",
              date: "06/01",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.home-new {
  margin-top: 0.3rem;
}
.new-con {
  line-height: 0.4rem;
  margin-top: 0.1rem;
  display: flex;
  .new-name {
    line-height: 0.4rem;
  }
  .new-title {
    line-height: 0.4rem;
    flex: 1;
    text-align: start;
  }
}
</style>