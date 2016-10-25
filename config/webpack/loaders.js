import { extractTextPluginInstance } from './plugins'
const sharedLoaders = [
  {
    test: /\.css$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:8]',
      'postcss?pack=development&sourceMap=inline'
    ]
  }
]
export default {
  development: [
    ...sharedLoaders
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
    ...sharedLoaders
  ]
}
