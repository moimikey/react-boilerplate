import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin'

export default {
  development: [
    new HotModuleReplacementPlugin()
  ],
  production: [

  ]
}
