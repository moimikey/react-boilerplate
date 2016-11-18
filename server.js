// const os = require('os')
const EventEmitter = require('events')
const dotenv = require('dotenv')
const variableExpansion = require('dotenv-expand')
const Primus = require('primus')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const dispatcher = require('redux-scuttlebutt/lib/server').default
const log = console.log.bind(console) // eslint-disable-line
const createWebpackConfig = require('./config/webpack')
const createConfig = require('./config').default

const envConfig = variableExpansion(dotenv.config())
const rootConfig = createConfig(envConfig)

const { SERVER_IP, SERVER_HOST, SERVER_PORT } = envConfig

const createDevServer = options => {
  return new WebpackDevServer(webpack(createWebpackConfig(options)), {
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
        res.charset = 'UTF-8'
        res.setHeader('content-type', 'text/javascript')
        try {
          let primus = new Primus(new EventEmitter, {
            transformer: 'uws'
          })
          res.send(primus.library())
        } catch (err) {
          res.send(JSON.stringify(err))
        }
      })
    }
  })
}
try {
  let server = createDevServer(rootConfig).listen({
    port: SERVER_PORT,
    host: SERVER_IP
  }, err => {
    if (err) return log(err)
    log('[HTTP] Listening at http://%s:%d/', SERVER_HOST, SERVER_PORT)
  })
  dispatcher(server)
  log('[GSP] Scuttlebutt started.')
} catch (err) {
  log('[APP] Build error.', err)
  // process.kill(process.pid, os.constants.signals.SIGTERM)
}
