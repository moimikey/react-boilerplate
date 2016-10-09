import {
  SERVER_HOST,
  SERVER_PORT,
  OPTIONS
} from './env'

// const fs = require('fs')
// const babelrc = JSON.parse(fs.readFileSync(path.resolve('.babelrc')).toString())
// require('babel-register')(babelrc)

module.exports = env => require('./config/webpack')({
  __dirname,
  SERVER_HOST,
  SERVER_PORT,
  OPTIONS
}, env)
