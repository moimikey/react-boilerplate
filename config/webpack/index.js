const path = require('path')
import EnvironmentPlugin from 'webpack/lib/EnvironmentPlugin'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import plugins from './plugins'
import loaders from './loaders'

module.exports = ({ __dirname, NODE_ENV, SERVER_HOST, SERVER_PORT, OPTIONS }) => {
  return {
    _: {
      NODE_ENV,
      OPTIONS,
      SERVER_HOST,
      SERVER_PORT
    },
    context: __dirname,
    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${SERVER_HOST}:${SERVER_PORT}`,
      'webpack/hot/only-dev-server',
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
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, OPTIONS.srcDir)
      }, {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, OPTIONS.srcDir)
      },
      ...loaders[NODE_ENV]]
    }
  }
}
