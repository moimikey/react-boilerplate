/* eslint no-console:0 */
import promiseMiddleware from 'redux-promise'
import loggerMiddleware from 'redux-logger'
import analyticsMiddleware from 'redux-analytics'
import createDebounce from 'redux-debounce'

const logger = loggerMiddleware({
  duration: true,
  collapsed: true,
  timestamp: true
})

const analytics = analyticsMiddleware(({ type, payload }, state) => {
  const track = console.log.bind(console)
  track(type, { ...state.analytics, ...payload })
})

const debounceMiddleware = createDebounce({
  simple: 300
})

const sharedMiddleware = [
  debounceMiddleware,
  promiseMiddleware
]

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
