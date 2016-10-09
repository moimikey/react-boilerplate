/* eslint no-console:0 */
import React from 'react'
import crosstabSync from 'redux-persist-crosstab'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { mountResponsive } from 'app/utils/hocs/responsive'
import configureStore from './configureStore'
import Root from './Root'

const store = mountResponsive(configureStore())
const rootEl = document.getElementById('root')

// allow for multiple browser tab rehydration
crosstabSync(persistStore(store, {}, () => console.log('[WPS] Syncing localStorage...')))

render(
  <Provider store={store} key="provider">
    <AppContainer>
      <Root />
    </AppContainer>
  </Provider>,
  rootEl
)

module.hot && module.hot.accept('./Root', () => {
  const Root$ = require('./Root').default
  render(
    <Provider store={store} key="provider">
      <AppContainer>
         <Root$ />
      </AppContainer>
    </Provider>,
    rootEl
  )
})
