import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin'
import CompressionPlugin from 'compression-webpack-plugin'
import DedupePlugin from 'webpack/lib/optimize/DedupePlugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin'
import HtmlPlugin from 'html-webpack-plugin'
import OccurrenceOrderPlugin from 'webpack/lib/optimize/OccurenceOrderPlugin'
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin'
import VisualizerPlugin from 'webpack-visualizer-plugin'

export default {
  development: [
    new HotModuleReplacementPlugin(),
    // new HtmlPlugin({
    //   title: 'Scalable React Boilerplate',
    //   template: 'index.html'
    // }),
    new VisualizerPlugin()
  ],
  production: [
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    // new HtmlPlugin({
    //   template: 'config/templates/_index.html',
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs: true,
    //   },
    //   inject: true,
    // }),
    new OccurrenceOrderPlugin(true),
    new DedupePlugin(),
    new UglifyJsPlugin({
      sourceMap: false
    }),
  ],
  test: []
}
