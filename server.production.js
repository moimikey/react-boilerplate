const path = require('path')
const koa = require('koa')
const serve = require('koa-static-folder')
const app = module.exports = koa()
const router = require('koa-router')()
// const render = require('co-views')(path.join(__dirname, 'index.html'))
app.name = 'webapp'
app.port = 3001
app.use(serve('./dist', { gzip: true }))
// app.use(router.allowedMethods())
