/* globals IS_DEV */
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import rootReducer from './rootReducer'
import middleware from './middleware'
import { DevTools } from 'components/DevTools'
const devTools = IS_DEV && global.devToolsExtension ? global.devToolsExtension() : DevTools.instrument()
export default function configureStore() {
  const store = createStore(
    rootReducer,
    Object.create(null),
    compose(
      autoRehydrate(),
      applyMiddleware(...middleware),
      devTools
    )
  )

  persistStore(store)

  module.hot && module.hot.accept('./rootReducer', () => {
    const rootReducer$ = require('./rootReducer')
    return store.replaceReducer(rootReducer$)
  })

  return store
}
