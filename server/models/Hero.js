const mongoose = require('mongoose')

// 创建集合规则
const schema = new mongoose.Schema({
  // 英雄名称
  name: {
    type: String
  },
  // 英雄头像
  avatar: {
    type: String
  },
  // 英雄壁纸
  banner:{
    type:String
  },
  // 英雄称号（逐日之弓——后裔）
  title: {
    type: String
  },
  // 英雄职业（射手、法师等）
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],
  // 英雄评分
  scores: {
    // 英雄上手难度
    difficult: {
      type: Number
    },
    // 技能得分
    skills: {
      type: Number
    },
    // 攻击得分
    attack: {
      type: Number
    },
    // 生存得分
    survive: {
      type: Number
    },
  },
  // 英雄技能
  skills: [{
    // 技能图标
    icon: {
      type: String
    },
    // 技能名称
    name: {
      type: String
    },
    // 技能详细描述
    description: {
      type: String
    },
    // 小贴士
    tips: {
      type: String
    }
  }],
  // 顺风出装推荐
  items1: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  // 逆风出装推荐
  items2: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  // 使用技巧
  usageTips: {
    type: String
  },
  // 对抗技巧
  battleTips: {
    type: String
  },
  // 团战技巧
  teamTips: {
    type: String
  },
  // 英雄最佳搭档
  partners: [{
    hero: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Hero'
    },
    description: {
      type: String
    }
  }]
})

// 使用集合规则创建集合，创建的集合叫categories
module.exports = mongoose.model('Hero', schema, 'heroes')