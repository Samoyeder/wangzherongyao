const mongoose = require('mongoose')

// 创建集合规则
const schema = new mongoose.Schema({
  // 广告标题
  name: {
    type: String
  },
  items: [{
    image: {
      type: String
    },
    url: {
      type: String
    }
  }]
})

// 使用集合规则创建集合，创建的集合叫ads
module.exports = mongoose.model('Ad', schema)