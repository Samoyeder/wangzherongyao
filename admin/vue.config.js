module.exports = {
  outputDir: __dirname + '/../server/admin',
  // 是否为生产环境
  publicPath: process.env.NODE_ENV === "production" ? '/admin/' : '/'
}