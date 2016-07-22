import promise from 'redux-promise'
import createLogger from 'redux-logger'

const logger = createLogger({
  duration: true
})

export {
  logger,
  promise
}
