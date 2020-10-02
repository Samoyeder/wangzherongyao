module.exports = app => {
  const express = require('express')
  // 创建路由对象
  const router = express.Router({
    mergeParams: true
  })

  // 引入数据库categories集合
  // const req.Model = require('../../models/req.Model')

  //创建分类接口
  router.post('/', async (req, res) => {
    // 向集合中插入文档
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  //编辑（更新）分类接口
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  //获取分类列表接口
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })

  //获取分类详情页接口
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  //删除分类接口
  router.delete('/:id', async (req, res) => {
    // 删除分类
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })



  //为路由对象匹配请求路径
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)

  
  // 图片上传接口
  const multer = require('multer')
  // multer({dest: './uploadImages'})表示将上传的图片传输到指定文件夹（这里以uploadImages为例，如果没有该文件夹，会自动生成）,如果不添加dest属性，这些文件将保存在内存中，永远不会写入磁盘。

  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  // upload.any()表示接收任何上传的数据
  // upload.single('user')表示只接收name为user的上传数据

  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}