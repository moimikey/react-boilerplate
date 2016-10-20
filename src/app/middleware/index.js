/* eslint no-console:0 */
import promiseMiddleware from 'redux-promise'
import loggerMiddleware from 'redux-logger'
import analyticsMiddleware from 'redux-analytics'

const middleware = [
  promiseMiddleware
]

const logger = loggerMiddleware({
  duration: true,
  collapsed: true,
  timestamp: true
})

const analytics = analyticsMiddleware(({ type, payload }, state) => {
  const track = console.log.bind(console)
  track(type, { ...state.analytics, ...payload })
})

if (__PRODUCTION__) middleware.concat(analytics)
if (__DEVELOPMENT__) middleware.unshift(logger)

export default middleware
