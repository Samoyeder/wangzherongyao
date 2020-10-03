<template>
  <div id="edit">
    <h1>{{ this.id ? "编辑" : "新建" }}文章</h1>
    <el-form
      @submit.native.prevent="save"
      :label-position="labelPosition"
      label-width="80px"
    >
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
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor
          v-model="model.body"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></vue-editor>
      </el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  name: "CategoryEdit",
  props: {
    id: {},
  },
  data() {
    return {
      labelPosition: "right",
      model: {
        categories: [],
        body: "",
        title: "",
      },
      categories: [],
    };
  },
  methods: {
    // 富文本编辑器里面的图片的上传方法
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    // 将新建的分类提交
    async save() {
      let res;
      if (this.id) {
        // 当编辑（更新）文章时
        res = await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        // 当新建文章时
        res = await this.$http.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 获取到需要编辑的文章的名称，将其传给model从而在input中显示出来
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    // 获取到所有分类的名称
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
  },
  created() {
    this.fetchCategories();
    this.id && this.fetch();
  },
};
</script>

<style scoped>
</style>