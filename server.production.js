const koa = require('koa')
const serve = require('koa-static-folder')
const parse = require('co-body')
const app = module.exports = koa()
app.name = 'webapp'
app.port = 3001
app.use(function *() {
  if (this.req.checkContinue) this.res.writeContinue()
  const body = yield parse(this)
  console.log(body)
})
app.use(serve('./dist', { gzip: false }))
