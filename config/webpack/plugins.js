// import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin'
import CompressionPlugin from 'compression-webpack-plugin'
import DedupePlugin from 'webpack/lib/optimize/DedupePlugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin'
import HtmlTemplatePlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin'
import VisualizerPlugin from 'webpack-visualizer-plugin'
import NotifierPlugin from './plugins/TestPlugin'
const sharedPlugins = [
  new HtmlTemplatePlugin({
    appMountId: 'root',
    // googleAnalytics: { trackingId: null, pageViewOnLoad: null },
    hash: true,
    inject: false,
    meta: {
      description: 'Something something darkside.'
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
    window: {},
  })
]
export const extractTextPluginInstance = new ExtractTextPlugin({
  disable: false,
  allChunks: true,
  filename: '[name].[contenthash].css'
})
export default {
  development: [
    ...sharedPlugins,
    new HotModuleReplacementPlugin(),
    new VisualizerPlugin(),
    new NotifierPlugin()
  ],
  production: [
    ...sharedPlugins,
    extractTextPluginInstance,
    // new CommonsChunkPlugin({
    //   name: 'vendor',
    //   children: true,
    //   minChunks: 2,
    //   async: true,
    // }),
    new DedupePlugin(),
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
