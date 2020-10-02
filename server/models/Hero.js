const mongoose = require('mongoose')

// 创建集合规则
const schema = new mongoose.Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  }
})

// 使用集合规则创建集合，创建的集合叫categories
module.exports = mongoose.model('Hero', schema)