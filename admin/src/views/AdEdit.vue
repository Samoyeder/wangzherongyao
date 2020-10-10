<template>
  <div id="edit">
    <h1>{{ this.id ? "编辑" : "新建" }}广告</h1>
    <el-form
      @submit.native.prevent="save"
      :label-position="labelPosition"
      label-width="80px"
    >
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-button @click="model.items.push({})" style="margin: 1rem">
          <i class="el-icon-plus"></i>
          添加广告
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap" :gutter="20">
          <el-col :md="8" v-for="(item, index) in model.items" :key="index">
            <el-form-item label="URL">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top:.5rem">
              <el-upload
                :headers="getAuthHeadersMixin()"
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="(res) => $set(item, 'image', res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button type="danger" @click="model.items.splice(index, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategoryEdit",
  props: {
    id: {},
  },
  data() {
    return {
      labelPosition: "right",
      model: {
        items: [],
      },
    };
  },
  methods: {
    // 将新建的分类提交
    async save() {
      let res;
      if (this.id) {
        // 当编辑（更新）分类时
        res = await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        // 当新建分类时
        res = await this.$http.post("rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 获取到需要编辑的分类的名称，将其传给model从而在input中显示出来
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style scoped>
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
    /* min-width: 6rem; */
    height: 6rem;
    line-height: 6rem;
    text-align: center;
  }
  .avatar {
    /* min-width: 6rem; */
    height: 6rem;
    display: block;
  }
</style>