const mongoose = require('mongoose')

// 创建集合规则
const schema = new mongoose.Schema({
  // 文章标题
  title: {
    type: String
  },
  // 英雄分类
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],
  body: {
    type: String
  }
})

// 使用集合规则创建集合，创建的集合叫categories
module.exports = mongoose.model('Article', schema)