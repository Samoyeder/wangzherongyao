const mongoose = require('mongoose')

// 创建集合规则
const schema = new mongoose.Schema({
  name: {
    type: String
  },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    // ref选项会告诉Mongoose哪个Model会在填充的时候使用
    ref: 'Category'
  }
})

// 使用集合规则创建集合，创建的集合叫categories
module.exports = mongoose.model('Category', schema)