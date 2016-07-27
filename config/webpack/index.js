const path = require('path')
import EnvironmentPlugin from 'webpack/lib/EnvironmentPlugin'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import plugins from './plugins'
import preLoaders from './preloaders'
import loaders from './loaders'
import postLoaders from './postloaders'
import postcss from './postcss'

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
      './src/app'
    ],
    output: {
      path: path.join(__dirname, OPTIONS.destDir),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new DefinePlugin({ /* always keep as first entry */
        __devServerPort: JSON.stringify(SERVER_PORT),
        __devServerHost: JSON.stringify(SERVER_HOST),
        __appPath: JSON.stringify(path.join(__dirname, 'src/app')),
        __rootPath: JSON.stringify(__dirname),
        __env: JSON.stringify(NODE_ENV),
        __envSettings: JSON.stringify(require(path.join(__dirname, './config/env/', NODE_ENV)))
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
      modules: [
        path.join(__dirname, 'src/app'),
        'node_modules'
      ]
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
