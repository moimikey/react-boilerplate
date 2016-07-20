import * as path from 'path'
const version = require(path.resolve('./package.json')).version
module.exports = {
  debug: false,
  apiVersion: 1,
  appVersion: version,
  srcDir: 'src/app',
  destDir: 'dist',
}
