// 引入express框架
const express = require('express')
// 使用框架创建web服务器
const app = express()

app.set('secret','aasedwef')

app.use(express.json())
app.use(require('cors')())
// 托管静态文件，让uploads文件夹下的所有静态文件可以通过/uploads访问
app.use('/uploads', express.static(__dirname + '/uploads'))

// 后台路由文件
require('./routers/admin/index')(app)
// 前端路由文件
require('./routers/web/index')(app)
// 连接数据库文件
require('./plugins/db')(app)


// 端口信息
app.listen(3000,() => {
  console.log('http://localhost:3000')
})