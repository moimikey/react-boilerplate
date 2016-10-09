import { extractTextPluginInstance } from './plugins'
export default {
  development: [
    {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:8]',
        'postcss?pack=development'
      ]
    }
  ],
  production: [
    {
      test: /\.css$/,
      loader: extractTextPluginInstance.extract({
        fallbackLoader: 'style',
        loader: [
          { loader:'css', query: 'modules&importLoaders=1&localIdentName=[hash:base64:12]' },
          { loader:'postcss', query: 'pack=production' }
        ]
      })
    }
  ],
  test: [
    {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:8]',
        'postcss?pack=development'
      ]
    }
  ]
}
