// import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin'
import CompressionPlugin from 'compression-webpack-plugin'
import DedupePlugin from 'webpack/lib/optimize/DedupePlugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin'
import HtmlTemplatePlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin'
import VisualizerPlugin from 'webpack-visualizer-plugin'
export const extractTextPluginInstance = new ExtractTextPlugin({
  disable: false,
  allChunks: true,
  filename: '[name].[contenthash].css'
})
export default {
  development: [
    new HotModuleReplacementPlugin(),
    new VisualizerPlugin()
  ],
  production: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    extractTextPluginInstance,
    // new CommonsChunkPlugin({
    //   name: 'vendor',
    //   children: true,
    //   minChunks: 2,
    //   async: true,
    // }),
    new HtmlTemplatePlugin({
      appMountId: 'root',
      // baseHref: '',
      // googleAnalytics: { trackingId: null, pageViewOnLoad: null },
      hash: true,
      inject: false,
      // links: [],
      // meta: [],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      mobile: true,
      // scripts: [],
      template: '!!ejs!./index.ejs',
      unsupportedBrowser: true,
      window: {},
    }),
    new DedupePlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        unused: true,
        dead_code: true,
        warnings: true,
        screw_ie8: true
      }
    })
  ],
  test: []
}
