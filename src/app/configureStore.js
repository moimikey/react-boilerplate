/* globals IS_DEV */
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import middleware from './middleware'
import { DevTools } from 'components/DevTools'
const devTools = IS_DEV && global.devToolsExtension ? global.devToolsExtension() : DevTools.instrument()
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      devTools
    )
  )

  module.hot && module.hot.accept('./rootReducer', () => {
    const rootReducer$ = require('./rootReducer').default
    return store.replaceReducer(rootReducer$)
  })

  return store
}
