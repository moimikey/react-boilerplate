/* eslint no-console:0 */
require('babel-register')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const log = console.log.bind(console)
const config = require('./webpack.config.babel')
const {
  SERVER_HOST,
  SERVER_PORT
} = require('./env')
new WebpackDevServer(webpack(config(process.env.NODE_ENV)), {
  // proxy: {
  //   '/api/*': `http://localhost:${apiPort}`,
  //   '/images/*': `http://localhost:${apiPort}`
  // },
  headers: {'Access-Control-Allow-Origin': '*'},
  hot: true,
  historyApiFallback: true,
  stats: {
    cached: true,
    cachedAssets: true,
    chunkModules: true,
    chunks: true,
    colors: true,
    hash: true,
    reasons: true,
    timings: true,
    version: true
  }
}).listen(SERVER_PORT, SERVER_HOST, err => {
  if (err) return log(err)
  log('Listening at http://%s:%d/', SERVER_HOST, SERVER_PORT)
})
