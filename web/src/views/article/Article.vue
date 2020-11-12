<template>
  <div class="article">
    <div class="article-title d-flex" v-if="model">
      <a
        class="iconfont icon-back"
        href="javascript:window.history.back();"
      ></a>
      <span class="title flex-1 text-left text-ellipsis">{{
        model.title
      }}</span>
      <span class="date">2020-3-6</span>
    </div>

    <div v-html="model.body" class="article-content" v-if="model"></div>

    <div class="article-more">
      <div class="more-title">
        <i class="iconfont icon-more"></i>
        <span>相关资讯</span>
      </div>
      <div class="more-content" v-if="model.related">
        <router-link
          class="text-ellipsis"
          tag="p"
          v-for="item in model.related"
          :key="item._id"
          :to="`/articles/${item._id}`"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
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
    async fetchArticle() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetchArticle();
  },
  watch:{
    id(){
      this.fetchArticle()
    }
  }
};
</script>

<style  lang="scss">
.article {
  .article-title {
    padding: 0 10px 0 10px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border-bottom: 1px solid #d4d4d5;
    .title {
      padding: 0 0.4rem 0 0.2rem;
      font-size: 0.25rem;
      font-weight: bold;
      color: #4394e4;
    }
    .date {
      font-size: 0.15rem;
      color: #9fa0a0;
    }
  }

  .article-content {
    padding: 0 0.3rem 0 0.3rem;
    font-size: 0.4rem;
    text-align: left;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .article-more {
    padding: 1rem 0.3rem 0 0.3rem;
    .more-title {
      font-size: 0.35rem;
      color: #4394e4;
      font-weight: bold;
      text-align: left;

      i {
        margin-right: 0.2rem;
      }
    }
    .more-content {
      margin-top: 0.2rem;
      text-align: left;
      p {
        display: block;
        margin: 0;
        font-size: 0.32rem;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>