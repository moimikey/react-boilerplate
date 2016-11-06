import * as path from 'path'
import chalk from 'chalk'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import LoaderOptionsPlugin from 'webpack/lib/LoaderOptionsPlugin'
import NamedModulesPlugin from 'webpack/lib/NamedModulesPlugin'
import IgnorePlugin from 'webpack/lib/IgnorePlugin'
import HappyPackPlugin from 'happypack'
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
      new DefinePlugin({
        __DEVELOPMENT__: JSON.stringify(isDev),
        __PRODUCTION__: JSON.stringify(isProd),
        __ROOT_DIR__: JSON.stringify(__dirname),
        __ENV__: JSON.stringify(NODE_ENV),
        'process.env': {
          'NODE_ENV': JSON.stringify(NODE_ENV)
        }
      }),
      new IgnorePlugin(/^(buffertools)$/),
      new ProgressBarPlugin({
        format:
          `build [:bar] \n` +
          `${chalk.green.bold(':percent')} (:elapsed seconds)\n` +
          `>>> :msg`,
        clear: true,
        complete: '█',
        incomplete: '░'
      }),
      new LoaderOptionsPlugin({
        options: {
          context: __dirname,
          debug: isDev,
          minimize: !isDev,
          devTool: isDev ? 'eval-source-map' : 'hidden-source-map',
          postcss
        }
      }),
      new HappyPackPlugin({
        loaders: ['babel'],
        id: 'js',
        threads: 1
      }),
      new NamedModulesPlugin(),
      ...plugins[NODE_ENV]
    ],
    resolve: {
      extensions: [
        '.js',
        '.json',
        '.css',
        '.ejs',
        '.html'
      ],
      alias: {
        app: path.join(__dirname, 'src/app'),
        config: path.join(__dirname, 'config')
      },
      modules: [
        'node_modules',
        'src'
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
          happy: {
            id: 'js'
          }
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
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url?limit=10000&mimetype=application/font-woff']
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file']
      },
      ...loaders[NODE_ENV]
      ]
    }
  }
}
