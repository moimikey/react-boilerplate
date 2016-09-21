/* globals IS_DEV */
import promise from 'redux-promise'
import createLogger from 'redux-logger'

const logger = createLogger({
  duration: true
})

const middleware = [
  promise
]

if (IS_DEV) middleware.unshift(logger)

export default middleware
