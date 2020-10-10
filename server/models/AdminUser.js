const mongoose = require('mongoose')

// 创建集合规则
const schema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    // 本来是有什么就直接保存什么，但是加了set，表示自定义修改然后保存
    // 表示查询的时候不要带有这个（password）数据
    select: false,
    // 这里用了一个插件bcrypt，是一个加密算法，用于加密密码
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)