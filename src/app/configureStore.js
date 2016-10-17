// /* globals IS_DEV */
import { createStore, applyMiddleware, compose } from 'redux'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
import { autoRehydrate } from 'redux-persist'
import { batchedSubscribe } from 'redux-batched-subscribe'
import reducers from './reducers'
import middleware from './middleware'
// import { DevTools } from 'components/DevTools'
// const devTools = global.devToolsExtension ? global.devToolsExtension() : DevTools.instrument()
export default function configureStore(initialState = Object.create(null)) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      autoRehydrate(),
      batchedSubscribe(batchedUpdates),
      // IS_DEV && devTools // doesnt play nice with hydrate...
    )
  )

  store.asyncReducers = {}

  module.hot && module.hot.accept('./reducers', () => {
    System.import('./reducers').then(reducerModule => {
      const createReducers = reducerModule.default
      const nextReducers = createReducers(store.asyncReducers)
      store.replaceReducer(nextReducers)
    })
  })

  return store
}
