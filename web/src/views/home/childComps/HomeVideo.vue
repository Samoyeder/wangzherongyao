<template>
  <div>
    <card
      class="home-video"
      title="精彩视频"
      icon="icon-head"
      :categories="videoList"
    >
      <template v-slot:item="{ category }">
        <div class="d-flex flex-wrap">
          <router-link
            tag="div"
            :to="`/videos/${video._id}`"
            class="video-con"
            v-for="(video, index) in category.videoList"
            :key="index"
          >
            <img :src="`${video.cover}`" class="video-avatar" />
            <div class="video-title px-1">{{ video.title }}</div>
            <div class="video-info d-flex jc-between px-1">
              <div class="video-play">
                <i class="iconfont icon-head"></i>
                <span>{{ video.play }}</span>
              </div>
              <div class="video-date">
                <span>{{ video.updatedAt | date }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
// 插件
import dayjs from "dayjs";
// 公共组件
import Card from "../../../components/common/Card";
export default {
  name: "HomeVideo",
  components: {
    Card,
  },
  data() {
    return {
      videoList: [],
    };
  },
  methods: {
    async fetchVideoList() {
      const res = await this.$http.get("videos/list");
      this.videoList = res.data;
    },
  },
  created() {
    this.fetchVideoList();
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM-DD");
    },
  },
};
</script>

<style scoped lang="scss">
.home-video {
  .video-con {
    line-height: 0.4rem;
    margin-top: 0.1rem;
    width: 50%;
    .video-title {
      // height: 0.8rem;
      line-height: 0.4rem;
      text-align: left;
      // display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .video-avatar {
      width: 3.36rem;
      height: 1.9rem;
      border-radius: .1rem;
    }
    .video-info{
      .video-play{
        i{
          font-size: .1rem;
        }
        span{
          margin-left: .05rem;
        }
      }
    }
  }
}
</style>