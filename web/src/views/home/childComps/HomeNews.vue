<template>
  <div>
    <card
      class="home-new"
      title="新闻资讯"
      icon="icon-cc-menu-circle"
      :categories="newsCats"
    >
      <template v-slot:item="{ category }">
        <div
          class="new-con"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <!-- 动态边框样式:class="`icon-${news.categoryName}`" -->
          <span class="new-name">[{{ news.categoryName }}]</span>
          <span class="px-1"> | </span>

          <span class="new-title text-ellipsis">{{ news.title }}</span>
          <span class="new-date">{{ news.createdAt | date }}</span>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
// 插件
import dayjs from 'dayjs'
// 公共组件
import Card from "../../../components/common/Card";

export default {
  name: "HomeNews",
  components: {
    Card,
  },
  data() {
    return {
      newsCats: [],
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
  },
  created() {
    this.fetchNewsCats();
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
};
</script>

<style scoped lang="scss">
.home-new {
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
      padding-right: 0.2rem;
    }
  }
}
</style>