import path from 'path'
const version = require(path.resolve('./package.json')).version
module.exports = {
  version,
  debug: false,
  srcDir: 'src/app',
  rootDir: 'src',
  destDir: 'dist'
}
