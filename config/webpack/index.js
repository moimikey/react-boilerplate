import path from 'path'
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
const root = path.dirname(require.main.filename)
module.exports = ({
  DEVEL,
  SERVER_HOST,
  SERVER_PORT,
  NODE_ENV
}) => {
  const OPTIONS = {
    appDir: path.resolve('src/app/'),
    srcDir: path.resolve('src/'),
    rootDir: path.resolve(root),
    distDir: path.resolve('dist/'),
    configDir: path.resolve('config/')
  }
  return {
    entry: {
      app: [
        ...DEVEL && [
          'react-hot-loader/patch',
          `webpack-dev-server/client?http://${SERVER_HOST}:${SERVER_PORT}`,
          'webpack/hot/only-dev-server'
        ],
        './src/app'
      ]
    },
    output: {
      publicPath: '/',
      path: OPTIONS.distDir,
      filename: '[name].[hash].bundle.js',
      chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
      new DefinePlugin({
        __DEVELOPMENT__: JSON.stringify(DEVEL),
        __ROOT_DIR__: JSON.stringify(OPTIONS.rootDir),
        __APP_DIR__: JSON.stringify(OPTIONS.appDir),
        __SRC__DIR__: JSON.stringify(OPTIONS.srcDir)
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
          context: OPTIONS.appDir,
          debug: DEVEL,
          devTool: DEVEL ? 'eval-source-map' : 'hidden-source-map',
          postcss
        }
      }),
      new HappyPackPlugin({
        loaders: ['babel'],
        id: 'js',
        threads: 2
      }),
      new NamedModulesPlugin(),
      ...plugins[NODE_ENV]
    ],
    resolve: {
      alias: {
        app: OPTIONS.appDir,
        config: OPTIONS.configDir
      },
      modules: [
        'node_modules',
        'src'
      ],
      extensions: [
        '.js',
        '.json',
        '.css',
        '.ejs',
        '.html'
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
        loader: ['babel', 'eslint']
      }, {
        test: /\.js$/,
        use: ['babel', 'webpack-module-hot-accept'],
        include: OPTIONS.srcDir,
        options: {
          happy: {
            id: 'js'
          }
        }
      }, {
        test: /\.json$/,
        use: ['json']
      }, {
        test: /\.ejs$/,
        use: ['ejs'],
        include: OPTIONS.rootDir
      }, {
        test: /\.html$/,
        use: ['html'],
        include: OPTIONS.rootDir
      }, {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url?limit=10000&mimetype=application/font-woff']
      }, {
        test: /\.(ttf|eot|otf|svg)(\?[\s\S]+)?$/,
        use: ['file']
      },
      ...loaders[NODE_ENV]
      ]
    }
  }
}
