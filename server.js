/* eslint no-console:0 */
require('babel-register')
const EventEmitter = require('events')
const Primus = require('primus')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const log = console.log.bind(console)
const config = require('./webpack.config.babel')
const dispatcher = require('redux-scuttlebutt/lib/server').default
const {
  SERVER_HOST,
  SERVER_PORT
} = require('./env')
const server = new WebpackDevServer(webpack(config(process.env.NODE_ENV)), {
  publicPath: '/',
  headers: {'Access-Control-Allow-Origin': '*'},
  hot: true,
  historyApiFallback: true,
  stats: {
    cached: true,
    cachedAssets: true,
    chunkModules: false,
    chunks: true,
    colors: true,
    hash: true,
    reasons: true,
    timings: true,
    version: true
  },
  setup(app) {
    app.get('/primus/primus.js', (req, res) => {
      let primus = new Primus(new EventEmitter, {
        transformer: 'uws'
      })
      res.charset = 'UTF-8'
      res.setHeader('content-type', 'text/javascript')
      res.send(primus.library())
    })
  }
}).listen(SERVER_PORT, null, err => {
  if (err) return log(err)
  log('[HTTP] Listening at http://%s:%d/', SERVER_HOST, SERVER_PORT)
})
dispatcher(server)
log('[GSP] Scuttlebutt started.')
