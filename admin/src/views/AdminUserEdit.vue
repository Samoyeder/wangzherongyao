<template>
  <div id="edit">
    <h1>{{ this.id ? "编辑" : "新建" }}管理员</h1>
    <el-form @submit.native.prevent="save">
    
      <el-form-item label="名称">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
      </el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AdminUserEdit",
  props: {
    id: {},
  },
  data() {
    return {
      model: {},

    };
  },
  methods: {
    // 将新建的分类提交
    async save() {
      let res;
      if (this.id) {
        // 当编辑（更新）分类时
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        // 当新建分类时
        res = await this.$http.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 获取到需要编辑的分类的名称，将其传给model从而在input中显示出来
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
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