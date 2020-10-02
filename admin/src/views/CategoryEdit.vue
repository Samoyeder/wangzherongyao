<template>
  <div id="edit">
    <h1>{{ this.id ? "编辑" : "新建" }}分类</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option 
          v-for="item in parents" 
          :key="item._id"
          :label="item.name"
          :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
      model: {},
      parents: [],
    };
  },
  methods: {
    // 将新建的分类提交
    async save() {
      let res;
      if (this.id) {
        // 当编辑（更新）分类时
        res = await this.$http.put(`rest/categories/${this.id}`, this.model);
      } else {
        // 当新建分类时
        res = await this.$http.post("rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 获取到需要编辑的分类的名称，将其传给model从而在input中显示出来
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    // 获取到需要编辑的分类的名称，将其传给model从而在input中显示出来
    async fetchParents() {
      const res = await this.$http.get(`rest/categories`);
      this.parents = res.data;
    },
  },
  created() {
    this.fetchParents()
    this.id && this.fetch();
  },
};
</script>

<style scoped>
</style>