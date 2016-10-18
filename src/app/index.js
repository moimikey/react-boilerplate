/* eslint no-console:0 */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { persistStore } from 'redux-persist'
import { AppContainer } from 'react-hot-loader'
import crosstabSync from 'redux-persist-crosstab'
import createExpirationTransform from 'redux-persist-transform-expire'
import { mountResponsive } from 'app/utils/hocs/responsive'

import routes from './routes'
import configureStore from './configureStore'

import Loading from 'app/components/Loading'

const rootEl = document.getElementById('root')
const store = mountResponsive(configureStore(browserHistory))
const history = syncHistoryWithStore(browserHistory, store)

let getRoutes = routes
let start = () => {
  render(<Loading />, rootEl)

  crosstabSync(persistStore(store, {
    transforms: [
      createExpirationTransform({
        expireKey: 'customExpiresAt'
      })
    ]
  }, () => {
    console.log('[WPS] Syncing localStorage...')
    render(
      <Provider store={store} key="provider">
        <AppContainer>
          <Router history={history}>
            {getRoutes(store)}
          </Router>
        </AppContainer>
      </Provider>,
      rootEl
    )
  }))
}

module.hot && module.hot.accept('./routes', () =>
  require('set-immediate-shim')(() => {
    getRoutes = require('./routes').default
    unmountComponentAtNode(rootEl)
    start()
  })
)

start()
