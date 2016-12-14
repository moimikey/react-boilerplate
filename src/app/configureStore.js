import { createStore, applyMiddleware, compose } from 'redux'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
import { routerMiddleware } from 'react-router-redux'
import scuttlebutt from 'redux-scuttlebutt'
import { batchedSubscribe } from 'redux-batched-subscribe'
import middleware from './middleware'

const devTools = global.devToolsExtension ? global.devToolsExtension() : {}

export default function configureStore(history) {
  let finalCreateStore

  const sharedEnhancers = compose(
    applyMiddleware(...middleware, routerMiddleware(history)),
    scuttlebutt(),
    batchedSubscribe(batchedUpdates)
  )

  if (process.env.NODE_ENV === 'development') {
    finalCreateStore = compose(
      sharedEnhancers,
      devTools
    )(createStore)
  } else {
    finalCreateStore = compose(
      sharedEnhancers
    )(createStore)
  }

  const store = finalCreateStore(
    require('./reducers').default,
    Object.create(null)
  )

  module.hot && module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers').default)
  )

  return store
}
