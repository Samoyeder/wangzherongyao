<template>
  <div id="edit">
    <h1>{{ this.id ? "编辑" : "新建" }}视频</h1>
    <el-form
      @submit.native.prevent="save"
      :label-position="labelPosition"
      label-width="80px"
    >
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="播放量">
        <el-input v-model="model.play"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :headers="getAuthHeadersMixin()"
          :on-success="aftercoverUpload"
        >
          <img v-if="model.cover" :src="model.cover" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="视频">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :headers="getAuthHeadersMixin()"
          :on-success="afterVideoUpload"
        >
          <video v-if="model.video" :src="model.video" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "VideoEdit",
  props: {
    id: {},
  },
  data() {
    return {
      categories: [],
      labelPosition: "right",
      model: {
        items:[],
        categories:[],
        cover:'',
        video:'',
      },
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        // 当编辑（更新）文章时
        res = await this.$http.put(`rest/videos/${this.id}`, this.model);
      } else {
        // 当新建文章时
        res = await this.$http.post("rest/videos", this.model);
      }
      this.$router.push("/videos/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetchCategory() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    async fetch(){
      const res = await this.$http.get(`rest/videos/${this.id}`)
      this.model = res.data
    },
    aftercoverUpload(res) {
      // 理论上用this.model.icon = res.url也是可以的，但是因为vue响应式的原因，之前model并没有icon，所以可能会造成赋值不上去，这个时候用$set，显式的告诉vue。
      // this.$set(this.model, 'avatar', res.url)
      this.model.cover = res.url;
    },
    afterVideoUpload(res) {
      // 理论上用this.model.icon = res.url也是可以的，但是因为vue响应式的原因，之前model并没有icon，所以可能会造成赋值不上去，这个时候用$set，显式的告诉vue。
      // this.$set(this.model, 'avatar', res.url)
      this.model.video = res.url;
    },

  },
  created() {
    this.id && this.fetch();
    this.fetchCategory()
  },
};
</script>

<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  min-width: 6rem;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
}
.avatar {
  min-width: 6rem;
  height: 6rem;
  display: block;
}
</style>