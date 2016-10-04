/* globals IS_DEV */
import { createStore, applyMiddleware, compose } from 'redux'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
import { persistStore, autoRehydrate } from 'redux-persist'
import { batchedSubscribe } from 'redux-batched-subscribe'
import rootReducer from './rootReducer'
import middleware from './middleware'
// import { DevTools } from 'components/DevTools'
// const devTools = IS_DEV && global.devToolsExtension ? global.devToolsExtension() : DevTools.instrument()
export default function configureStore() {
  const store = createStore(
    rootReducer,
    Object.create(null),
    compose(
      // devTools,
      applyMiddleware(...middleware),
      autoRehydrate(),
      batchedSubscribe(batchedUpdates)
    )
  )

  module.hot && module.hot.accept('./rootReducer', () => {
    const rootReducer$ = require('./rootReducer')
    return store.replaceReducer(rootReducer$)
  })

  return store
}
