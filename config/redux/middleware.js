/* eslint no-console:0 */
import promiseMiddleware from 'redux-promise'
import loggerMiddleware from 'redux-logger'
import analyticsMiddleware from 'redux-analytics'

const sharedMiddleware = [
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

export default {
  production: [
    ...sharedMiddleware,
    analytics
  ],
  development: [
    ...sharedMiddleware,
    logger
  ],
  test: [
    ...sharedMiddleware
  ]
}[__ENV__ || 'development']
