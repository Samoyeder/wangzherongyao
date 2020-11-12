<template>
  <div>
    <div class="video-play">
      <video :src="model.video" width="100%" controls></video>
    </div>
    <div class="video-info d-flex">
      <img src="../../assets/img/videoAvatar.png" class="video-info-avatar" />
      <div class="video-info-content">
        <div class="video-info-content-title">{{ model.title }}</div>
        <div class="public">
          <span class="video-info-content-public">投稿：25</span>
          <span class="video-info-content-fans">粉丝：165</span>
        </div>
        <div class="video-info-content-sign">
          个性签名: 这个人很懒, 什么都没有留下(〜￣△￣)〜
        </div>
      </div>
    </div>
    <!-- <div class="video-more">
      <div class="video-more-title">
        <i></i>
        <span>猜您喜欢</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      model: {},
    };
  },
  props: {
    id: {
      required: true,
    },
  },
  methods: {
    async fetchArticle() {
      const res = await this.$http.get(`videos/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetchArticle();
  },
};
</script>

<style scoped lang="scss">
.video-info {
  align-items: center;
  line-height: .4rem;
  padding: .2rem 0 .2rem 0;
  border: 1px solid #dcdcdc;
  .video-info-avatar {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: .2rem;
  }
  .video-info-content {
    margin-left: .2rem;
    .video-info-content-title {
      font-size: 0.3rem;
      text-align: left;
    }
    .public {
      font-size: 0.15rem;
      text-align: left;
      .video-info-content-fans{
        margin-left: .2rem;
      }
    }

    .video-info-content-sign {
      font-size: 0.15rem;
      text-align: left;
    }
  }
}
</style>