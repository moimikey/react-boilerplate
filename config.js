/* https://github.com/indexzero/nconf */
const nconf = require('nconf')
const log = console.log.bind(console)
export default options => {
  const config = nconf.env()
  try {
    if (options.REDIS_HOST && options.REDIS_PORT) {
      require('nconf-redis')
      config.use('redis', {
        host: options.REDIS_HOST,
        port: Number(options.REDIS_PORT),
        ...options.REDIS_AUTH && { auth: options.REDIS_AUTH }
      })
      // config.file('secure-file', {
      //   file: './config/index.json',
      //   secure: {
      //     secret: 'super-secretzzz-keyzz',
      //     alg: 'aes-256-ctr'
      //   }
      // })
    }
  } catch (err) {
    log('Warning: Missing `nconf-redis`', err)
  }
  return config.get()
}

export const getConfig = function getConfig() {
  const dotenv = require('dotenv')
  const variableExpansion = require('dotenv-expand')
  return variableExpansion(dotenv.config())
}
