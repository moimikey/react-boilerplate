require('babel-core/register')

const path = require('path')
const NODE_ENV = process.env.NODE_ENV && String(process.env.NODE_ENV).toLowerCase() || 'development'
const OPTIONS = require(path.join(__dirname, 'config/env/', NODE_ENV))
const SERVER_HOST = process.env.DEV_SERVER_HOST || OPTIONS.defaultHost
const SERVER_PORT = process.env.DEV_SERVER_PORT || OPTIONS.defaultPort

module.exports = require('./config/webpack')({
  __dirname,
  NODE_ENV,
  SERVER_HOST,
  SERVER_PORT,
  OPTIONS
})
