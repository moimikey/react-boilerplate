const {
  NODE_ENV,
  SERVER_HOST,
  SERVER_PORT,
  OPTIONS
} = require('./env')

// const fs = require('fs')
// const babelrc = JSON.parse(fs.readFileSync(path.resolve('.babelrc')).toString())
// require('babel-register')(babelrc)

module.exports = require('./config/webpack')({
  __dirname,
  NODE_ENV,
  SERVER_HOST,
  SERVER_PORT,
  OPTIONS
})
