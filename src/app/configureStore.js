import { createStore, applyMiddleware, compose } from 'redux'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
import { autoRehydrate } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import { batchedSubscribe } from 'redux-batched-subscribe'
import middleware from './middleware'
import { DevTools } from 'app/components/DevTools'
const devTools = global.devToolsExtension ? global.devToolsExtension() : DevTools.instrument()
export default function configureStore(history) {
  let finalCreateStore

  if (__DEVELOPMENT__) {
    const { persistState } = require('redux-devtools')
    finalCreateStore = compose(
      applyMiddleware(...middleware, routerMiddleware(history)),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
      batchedSubscribe(batchedUpdates),
      autoRehydrate(),
      devTools
    )(createStore)
  } else {
    finalCreateStore = compose(
      applyMiddleware(...middleware, routerMiddleware(history)),
      batchedSubscribe(batchedUpdates),
      autoRehydrate(),
    )(createStore)
  }

  const reducers = require('./reducers').default
  const store = finalCreateStore(
    reducers,
    Object.create(null)
  )

  module.hot &&
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default))

  return store
}
