import * as path from 'path'
import chalk from 'chalk'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import LoaderOptionsPlugin from 'webpack/lib/LoaderOptionsPlugin'
import NamedModulesPlugin from 'webpack/lib/NamedModulesPlugin'
import HappyPack from 'happypack'
import plugins from './plugins'
import loaders from './loaders'
import postcss from './postcss'
module.exports = ({
  __dirname,
  SERVER_HOST,
  SERVER_PORT,
  OPTIONS
}, env) => {
  const NODE_ENV = env
  const isDev = env === 'development'
  const isProd = env === 'production'
  return {
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
      filename: 'bundle.js'
    },
    plugins: [
      new HappyPack({
        loaders: ['babel'],
        id: 'js'
      }),
      new DefinePlugin({
        __DEVELOPMENT__: JSON.stringify(isDev),
        __PRODUCTION__: JSON.stringify(isProd),
        ...isDev && { DEV_SERVER_PORT: JSON.stringify(SERVER_PORT) },
        ...isDev && { DEV_SERVER_HOST: JSON.stringify(SERVER_HOST) },
        APP_PATH: JSON.stringify(path.join(__dirname, 'src/app')),
        ROOT_PATH: JSON.stringify(__dirname),
        ENV: JSON.stringify(NODE_ENV),
        ENV_PATH: JSON.stringify(require(path.join(__dirname, './config/env/', NODE_ENV))),
        'process.env': {
          'NODE_ENV': JSON.stringify(NODE_ENV)
        }
      }),
      new ProgressBarPlugin({
        format:
          `build [:bar] \n` +
          `${chalk.green.bold(':percent')} (:elapsed seconds)\n` +
          `>>> :msg`,
        clear: false,
        complete: '█',
        incomplete: '░'
      }),
      new LoaderOptionsPlugin({
        debug: isDev,
        minimize: !isDev,
        options: {
          devTool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
          context: __dirname,
          postcss
        }
      }),
      new NamedModulesPlugin(),
      ...plugins[NODE_ENV]
    ],
    resolve: {
      extensions: [
        '.js',
        '.json'
      ],
      alias: {
        app: path.join(__dirname, 'src/app')
      },
      modules: [
        'node_modules',
        './src'
      ]
    },
    node: {
      fs: 'empty',
      child_process: 'empty',
      readline: 'empty'
    },
    module: {
      noParse: /\.min\.js/,
      rules: [{
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint'
      }, {
        test: /\.js$/,
        use: ['babel'],
        include: path.join(__dirname, OPTIONS.srcDir),
        options: {
          happy: {id: 'js'}
        }
      }, {
        test: /\.json$/,
        use: ['json'],
        include: path.join(__dirname, OPTIONS.srcDir)
      }, {
        test: /\.ejs$/,
        use: ['ejs'],
        include: path.join(__dirname, OPTIONS.rootDir)
      }, {
        test: /\.html$/,
        use: ['html'],
        include: path.join(__dirname, OPTIONS.rootDir)
      },
      ...loaders[NODE_ENV]
      ]
    }
  }
}
