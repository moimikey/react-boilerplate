import * as path from 'path'
import EnvironmentPlugin from 'webpack/lib/EnvironmentPlugin'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import plugins from './plugins'
import preLoaders from './preloaders'
import loaders from './loaders'
import postLoaders from './postloaders'
import postcss from './postcss'

const NODE_ENV = process.env.NODE_ENV && String(process.env.NODE_ENV).toLowerCase() || 'development'
const OPTIONS = require(path.join(__dirname, '../env/', NODE_ENV))
const SERVER_HOST = process.env.DEV_SERVER_HOST || OPTIONS.defaultHost
const SERVER_PORT = process.env.DEV_SERVER_PORT || OPTIONS.defaultPort

module.exports = ({ __dirname, NODE_ENV, SERVER_HOST, SERVER_PORT, OPTIONS }) => {
  const isDev = NODE_ENV === 'development'
  return {
    _: {
      NODE_ENV,
      OPTIONS,
      SERVER_HOST,
      SERVER_PORT
    },
    ...isDev && {
      devtool: "#cheap-module-eval-source-map",
    },
    context: __dirname,
    entry: [
      ...isDev && [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${SERVER_HOST}:${SERVER_PORT}`,
        'webpack/hot/only-dev-server'
      ],
      './src/app/index'
    ],
    output: {
      path: path.join(__dirname, OPTIONS.destDir),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new DefinePlugin({ /* always keep as first entry */
        IS_DEV: JSON.stringify(NODE_ENV === 'development'),
        DEV_SERVER_PORT: JSON.stringify(SERVER_PORT),
        DEV_SERVER_HOST: JSON.stringify(SERVER_HOST),
        APP_PATH: JSON.stringify(path.join(__dirname, 'src/app')),
        ROOT_PATH: JSON.stringify(__dirname),
        ENV: JSON.stringify(NODE_ENV),
        ENV_PATH: JSON.stringify(require(path.join(__dirname, './config/env/', NODE_ENV)))
      }),
      new EnvironmentPlugin([
        'NODE_ENV'
      ]),
      ...plugins[NODE_ENV]
    ],
    resolve: {
      extensions: [
        '',
        '.js',
        '.css',
        '.json'
      ],
      alias: {
        components: path.resolve('./src/app/components'),
        modules: path.resolve('./src/app/modules')
      }
    },
    node: {
      fs: 'empty',
      child_process: 'empty'
    },
    module: {
      noParse: /\.min\.js/,
      preLoaders: [{
        test: /\.js$/,
        loaders: ['eslint'],
        include: path.join(__dirname, OPTIONS.srcDir)
      },
      ...preLoaders[NODE_ENV]
      ],
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, OPTIONS.srcDir)
      }, {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, OPTIONS.srcDir)
      },
      ...loaders[NODE_ENV]
      ],
      postLoaders: [
        ...postLoaders[NODE_ENV]
      ]
    },
    postcss
  }
}
