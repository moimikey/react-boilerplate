import { createStore, applyMiddleware, compose } from 'redux'
// import wire from 'redux-shared-worker/lib/wire.worker'
import { DevTools } from './components/DevTools'
import rootReducer from './rootReducer'
import { logger, promise } from './middleware'
export default function configureStore() {
  const store = //wire(
    createStore(
      rootReducer,
      compose(
        applyMiddleware(logger, promise),
        global.devToolsExtension ? global.devToolsExtension() : DevTools.instrument()
      )
    )
  // , false)
  return store
}
