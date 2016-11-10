import path from 'path'
// import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin'
import CompressionPlugin from 'compression-webpack-plugin'
import DedupePlugin from 'webpack/lib/optimize/DedupePlugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HappyPackPlugin from 'happypack'
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin'
import HtmlTemplatePlugin from 'html-webpack-plugin'
import NotifierPlugin from './plugins/TestPlugin'
import OnlyIfChangedPlugin from 'only-if-changed-webpack-plugin'
import OptimizePlugin from 'optimize-js-plugin'
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin'
import VisualizerPlugin from 'webpack-visualizer-plugin'
const sharedPlugins = [
  // new CommonsChunkPlugin({
  //   names: ['common', 'vendor'],
  //   minChunks: 2
  // }),
  new HtmlTemplatePlugin({
    appMountId: 'root',
    baseHref: '/',
    // googleAnalytics: { trackingId: null, pageViewOnLoad: null },
    hash: true,
    inject: false,
    meta: {
      title: 'Web Application Boilerplate',
      description: 'Something something darkside.',
      'og:card': 'summary',
      'og:creator': '@moimikey',
      'og:description': 'Something something darkside.',
      'og:image': '',
      'og:image:height': '250',
      'og:image:width': '250',
      'og:locale': 'en_US',
      'og:site': '@moimikey',
      'og:site_name': 'Web Application Boilerplate',
      'og:title': 'Web Application Boilerplate'
    },
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    },
    mobile: true,
    template: '!!ejs!./index.ejs',
    unsupportedBrowser: true,
    // window: {},
    scripts: [/*{
      src: 'https://cdn.ravenjs.com/3.7.0/raven.min.js',
      crossorigin: 'anonymous'
    }*/{
      src: '/primus/primus.js'
    }]
  })
]
export const extractTextPluginInstance = new ExtractTextPlugin({
  disable: false,
  allChunks: true,
  filename: '[name].css'
})
const OnlyIfChangedPluginOptions = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== 'production'
}
export default {
  development: [
    ...sharedPlugins,
    new HotModuleReplacementPlugin(),
    new VisualizerPlugin(),
    new NotifierPlugin(),
    new HappyPackPlugin({
      loaders: require('./loaders').default['development'][0].use,
      id: 'css',
      threads: 1
    }),
    new OnlyIfChangedPlugin({
      cacheDirectory: path.join(OnlyIfChangedPluginOptions.rootDir, '.webpack'),
      cacheIdentifier: OnlyIfChangedPluginOptions
    })
  ],
  production: [
    ...sharedPlugins,
    extractTextPluginInstance,
    new DedupePlugin(),
    new OptimizePlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        unused: true,
        dead_code: true,
        warnings: true,
        screw_ie8: true
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  test: []
}
