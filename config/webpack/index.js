import * as path from 'path'
import chalk from 'chalk'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import EnvironmentPlugin from 'webpack/lib/EnvironmentPlugin'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import LoaderOptionsPlugin from 'webpack/lib/LoaderOptionsPlugin'
import plugins from './plugins'
import loaders from './loaders'
import postcss from './postcss'
module.exports = ({
  __dirname,
  NODE_ENV,
  SERVER_HOST,
  SERVER_PORT,
  OPTIONS
}) => {
  const isDev = NODE_ENV === 'development'
  return {
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
      publicPath: '/'
    },
    plugins: [
      new EnvironmentPlugin([
        'NODE_ENV'
      ]),
      new DefinePlugin({
        IS_DEV: JSON.stringify(NODE_ENV === 'development'),
        IS_PROD: JSON.stringify(NODE_ENV === 'production'),
        DEV_SERVER_PORT: JSON.stringify(SERVER_PORT),
        DEV_SERVER_HOST: JSON.stringify(SERVER_HOST),
        APP_PATH: JSON.stringify(path.join(__dirname, 'src/app')),
        ROOT_PATH: JSON.stringify(__dirname),
        ENV: JSON.stringify(NODE_ENV),
        ENV_PATH: JSON.stringify(require(path.join(__dirname, './config/env/', NODE_ENV)))
      }),
      new ProgressBarPlugin({
        format: `build [:bar] \n` +
                `${chalk.green.bold(':percent')} (:elapsed seconds)\n` +
                `>>> :msg`,
        clear: false,
        complete: '█',
        incomplete: '░'
      }),
      new LoaderOptionsPlugin({
        options: {
          postcss,
          devTool: isDev ? 'eval' : 'source-map'
        }
      }),
      ...plugins[NODE_ENV]
    ],
    resolve: {
      extensions: [
        '.js',
        '.css',
        '.json'
      ],
      alias: {
        components: path.resolve('./src/app/components'),
        modules: path.resolve('./src/app/modules'),
        utils: path.resolve('./src/app/utils')
      }
    },
    node: {
      fs: 'empty',
      child_process: 'empty',
      readline: 'empty'
    },
    module: {
      noParse: /\.min\.js/,
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, OPTIONS.srcDir)
      }, {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, OPTIONS.srcDir)
      }, {
        test: /\.ejs$/,
        loaders: ['ejs'],
        include: path.join(__dirname, OPTIONS.rootDir)
      }, {
        test: /\.html$/,
        loaders: ['html'],
        include: path.join(__dirname, OPTIONS.rootDir)
      },
      ...loaders[NODE_ENV]
      ]
    }
  }
}
