module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.set('useFindAndModify', false)
  mongoose.connect('mongodb://localhost:27017/node-vue-moba', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('成功连接数据库'))
    .catch(err => console.log('数据库连接失败', err))
}