/* eslint no-console:0 */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const log = console.log
const { SERVER_PORT, SERVER_HOST } = config._

new WebpackDevServer(webpack(config), {
  // proxy: {
  //   '/api/*': `http://localhost:${apiPort}`,
  //   '/images/*': `http://localhost:${apiPort}`
  // },
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: false,
    cached: true,
    cachedAssets: true
  }
}).listen(SERVER_PORT, SERVER_HOST, err => {
  if (err) return log(err)
  log('Listening at http://%s:%d/', SERVER_HOST, SERVER_PORT)
})
