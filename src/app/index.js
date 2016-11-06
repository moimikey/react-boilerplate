/* eslint no-console:0 */
import React from 'react'
import routes from 'routes!./pages'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { persistStore } from 'redux-persist'
import { asyncSessionStorage } from 'redux-persist/storages'
import { AppContainer } from 'react-hot-loader'
import crosstabSync from 'redux-persist-crosstab'
// import createExpirationTransform from 'redux-persist-transform-expire'
// import localforage from 'localforage'
import { mountResponsive } from 'app/utils/hocs/responsive'
import getClientBrowserInfo from 'app/utils/getClientBrowserInfo'
import configureStore from './configureStore'
import Loading from 'app/components/Loading'

import './global.css'

const rootEl = document.getElementById('root')
const store = mountResponsive(configureStore(browserHistory))
const history = syncHistoryWithStore(browserHistory, store)

const beforeStart = () => {
  const client = getClientBrowserInfo()
  __DEVELOPMENT__ && require('react-a11y')(React, {
    throw: true,
    includeSrcNode: true,
    device: [client.isMobile ? 'mobile' : 'desktop']
  })
}

let start = () => {
  render(<Loading />, rootEl)

  crosstabSync(persistStore(store, {
    keyPrefix: 'deadbeef:',
    // transforms: [
    //   createExpirationTransform({
    //     expireKey: 'customExpiresAt'
    //   })
    // ],
    storage: asyncSessionStorage,
    blacklist: [
      'routing'
    ]
  }, () => {
    // {getRoutes(store)}
    console.log('[WPS] Syncing localStorage...')
    render(
      <Provider store={store} key="provider">
        <AppContainer>
          <Router history={history} routes={routes} />
        </AppContainer>
      </Provider>,
      rootEl
    )
  }))
}

beforeStart()
start()
