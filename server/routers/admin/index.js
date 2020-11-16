module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')

  // 创建路由对象
  const router = express.Router({
    mergeParams: true
  })

  // 模型匹配中间件
  const resourceMiddleware = require('../../middleware/resource')
  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')


  //创建资源接口
  router.post('/', async (req, res) => {
    // 向集合中插入文档
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  //编辑（更新）资源接口
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  //获取资源列表接口
  router.get('/', authMiddleware(), async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })

  //获取资源详情接口
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  //删除资源接口
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  //为路由对象匹配请求路径
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 图片上传接口-----------
  const multer = require('multer')
  // multer({dest: './uploadImages'})表示将上传的图片传输到指定文件夹（这里以uploadImages为例，如果没有该文件夹，会自动生成）,如果不添加dest属性，这些文件将保存在内存中，永远不会写入磁盘。
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  // upload.any()表示接收任何上传的数据
  // upload.single('user')表示只接收name为user的上传数据
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://super.samoyeder.cn/uploads/${file.filename}`
    res.send(file)
  })
  // ---------------------

  // 登录接口
  app.post('/admin/api/login', async (req, res) => {
    const {
      username,
      password
    } = req.body
    // 1. 根据用户名找用户
    const user = await AdminUser.findOne({
      username
      // 默认是取不到password的，因为模型中设置select为false，这里用select方法，加号表示强制选择password
    }).select('+password')
    // 查找用户是否存在
    assert(user, 422, '用户不存在')

    // if (!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    // 2. 校验密码
    // 对比明文密码密码是否为散列后的hash值(即用户密码是否正确)
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    // 3. 返回token

    // 生成token
    const token = jwt.sign({
      id: user._id,
      // 这里的get和定义路由的时候的get实际上是冲突的，只能通过传参个数来区分get的作用，传入一个表示获取参数，否则就是在获取配置
    }, app.get('secret'))
    res.send({
      token
    })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}