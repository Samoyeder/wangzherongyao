<template>
  <div id="edit">
    <h1>{{ this.id ? "编辑" : "新建" }}英雄</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form>
  </div>
</template>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>

export default {
  name: "ItemEdit",
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        avatar: '',
        name: ''
      },
    };
  },
  methods: {
    afterUpload(res){

      // 理论上用this.model.icon = res.url也是可以的，但是因为vue响应式的原因，之前model并没有icon，所以可能会造成赋值不上去，这个时候用$set，显式的告诉vue。
      // this.$set(this.model, 'avatar', res.url)
      this.model.avatar = res.url
    },
    // 将新建的分类提交
    async save() {
      let res;
      if (this.id) {
        // 当编辑（更新）分类时
        res = await this.$http.put(`rest/heros/${this.id}`, this.model);
      } else {
        // 当新建分类时
        res = await this.$http.post("rest/heros", this.model);
      }
      this.$router.push("/heros/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 获取到需要编辑的分类的名称，将其传给model从而在input中显示出来
    async fetch() {
      const res = await this.$http.get(`rest/heros/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style scoped>
</style>