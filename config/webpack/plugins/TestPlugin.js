export default class Notifier {
  apply(compiler) {
    compiler.plugin('done', (stats) => {
      const notifier = require('node-notifier')
      const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2)

      notifier.notify({
        title: 'webpack',
        message: `WebPack is done!\n${stats.compilation.errors.length} errors in ${time}s`,
        // contentImage: 'https://path/to/your/logo.png',
      })
    })
  }
}
