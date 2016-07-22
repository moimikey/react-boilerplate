import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  development: [
    {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:8]',
        'postcss?pack=development'
      ]
    }
  ],
  production: [
    {
      test: /\.css$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[hash:base64:12]',
        'postcss?pack=production'
      ]
    }
    // {
    //   test: /\.css$/,
    //   loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
    // }
  ]
}
