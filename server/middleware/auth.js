module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    // 从请求头中获取token（注意在后端这个authorization要小写）
    const token = String(req.headers.authorization || '').split(' ')[1]
    assert(token, 401, '请提供jwt token')
    const {
      id
    } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '无效的jwt token')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')
    await next()
  }
}