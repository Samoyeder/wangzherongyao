const mongoose = require('mongoose')

// 创建集合规则
const schema = new mongoose.Schema({
  title: {
    type: String
  },
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],
  // 默认值是文章创建时间,存储的是时间戳
  // date: {
  //   type: String,
  //   default: +new Date()
  // },
  play: {
    type: String
  },
  cover: {
    type: String
  },
  video: {
    type: String
  }
},{
  timestamps:true
})

// 使用集合规则创建集合，创建的集合叫ads
module.exports = mongoose.model('Video', schema)