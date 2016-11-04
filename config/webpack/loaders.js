import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { extractTextPluginInstance } from './plugins'
const sharedLoaders = [
  {
    test: /\.css$/,
    use: [
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
      use: [
        ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: [
            { use: 'css', options: { modules: true, importLoaders: 1, sourceMaps: true, localIdentName: '[hash:base64:12]' } },
            { use: 'postcss', options: { pack: 'production' } }
          ]
        })
      ],
      // options: {
      //   loader: [
      //     'css?modules=true&importLoaders=1&localIdentName=[hash:base64:12]',
      //     'postcss?pack=production'
      //   ]
      // }
    }
  ],
  test: [
    ...sharedLoaders
  ]
}
