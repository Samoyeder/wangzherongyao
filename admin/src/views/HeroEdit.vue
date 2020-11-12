<template>
  <div id="edit">
    <h1>{{ this.id ? "编辑" : "新建" }}英雄</h1>
    <el-form
      @submit.native.prevent="save"
      :label-position="labelPosition"
      label-width="80px"
    >
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :headers="getAuthHeadersMixin()"
              :on-success="afterAvatarUpload"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="壁纸">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :headers="getAuthHeadersMixin()"
              :show-file-list="false"
              :on-success="afterBannerUpload"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item in categories"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              style="margin-top: 0.7rem"
              :max="9"
              show-score
              v-model="model.scores.difficult"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              style="margin-top: 0.7rem"
              :max="9"
              show-score
              v-model="model.scores.skills"
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              style="margin-top: 0.7rem"
              :max="9"
              show-score
              v-model="model.scores.attack"
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              style="margin-top: 0.7rem"
              :max="9"
              show-score
              v-model="model.scores.survive"
            ></el-rate>
          </el-form-item>

          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option
                v-for="item in items"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option
                v-for="item in items"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>

          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>

          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})" style="margin: 1rem">
            <i class="el-icon-plus"></i>
            添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap" :gutter="20">
            <el-col :md="12" v-for="(item, index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  :headers="getAuthHeadersMixin()"
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="(res) => $set(item, 'icon', res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.skills.splice(index, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-button type="primary" native-type="submit" style="margin-top: 2rem"
        >保存</el-button
      >
    </el-form>
  </div>
</template>


<script>
export default {
  name: "ItemEdit",
  props: {
    id: {},
  },
  data() {
    return {
      labelPosition: "right",
      categories: [],
      items: [],
      model: {
        skills: [],
        avatar: "",
        banner:'',
        name: "",
        scores: {
          difficult: 0,
        },
        usageTips: "",
        battleTips: "",
        teamTips: "",
      },
    };
  },
  methods: {
    afterAvatarUpload(res) {
      // 理论上用this.model.icon = res.url也是可以的，但是因为vue响应式的原因，之前model并没有icon，所以可能会造成赋值不上去，这个时候用$set，显式的告诉vue。
      // this.$set(this.model, 'avatar', res.url)
      this.model.avatar = res.url;
    },
    afterBannerUpload(res) {
      // 理论上用this.model.icon = res.url也是可以的，但是因为vue响应式的原因，之前model并没有icon，所以可能会造成赋值不上去，这个时候用$set，显式的告诉vue。
      // this.$set(this.model, 'avatar', res.url)
      this.model.banner = res.url;
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
      // this.model = res.data;
      this.model = Object.assign({}, this.model, res.data);
    },
    // 获取到都有哪些分类（职业）
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    // 获取到都有哪些物品
    async fetchItems() {
      const res = await this.$http.get(`rest/items`);
      this.items = res.data;
    },
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
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
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 108px;
  height: 108px;
  line-height: 108px;
  text-align: center;
}
.avatar {
  width: auto;
  max-height: 130px;
  display: block;
  
}
</style>