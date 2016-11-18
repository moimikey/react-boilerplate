/* eslint-disable */
require('babel-register')
const { SERVER_HOST, SERVER_PORT } = require('./config').getConfig()
require('http').get(`http://${SERVER_HOST}:${SERVER_PORT}/health`, res => {
  if (res.statusCode === 200) return process.exit(0)
  return process.exit(1)
}).on('error', err => {
  console.error(err)
  process.exit(1)
})
