const koa = require('koa')
const serve = require('koa-static-folder')
const app = module.exports = koa()
app.port = 3001
app.use(serve('./dist', { gzip: true }))
