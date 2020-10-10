<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      // 将服务器返回的token写入到localStorage（浏览器关闭之后，再打开还有）
      localStorage.token = res.data.token;
      // 如果想让浏览器关闭之后就没有的话用sessionStorage
      // sessionStorage.token = res.data.token
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登陆成功",
      });
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 25rem;
  margin: 8rem auto;
}
</style>