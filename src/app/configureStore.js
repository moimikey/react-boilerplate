import { createStore, applyMiddleware, compose } from 'redux'
// import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
import { autoRehydrate } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
// import { batchedSubscribe } from 'redux-batched-subscribe'
import middleware from './middleware'
import { DevTools } from 'app/components/DevTools'
import { window } from 'app/utils/global'

const devTools = window.devToolsExtension ? global.devToolsExtension() : DevTools.instrument()

export default function configureStore(history) {
  let finalCreateStore

  const sharedEnhancers = compose(
    applyMiddleware(...middleware, routerMiddleware(history)),
    // batchedSubscribe(batchedUpdates),
    autoRehydrate()
  )

  if (__DEVELOPMENT__) {
    const { persistState } = require('redux-devtools')
    finalCreateStore = compose(
      sharedEnhancers,
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
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
    store.replaceReducer(require('./reducers').default))

  return store
}
