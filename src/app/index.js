/* eslint no-console:0 */
require('font-awesome-loader')
import routes from '!!babel!routes!./pages'
import React from 'react'
import debug from 'debug'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import browserHistory from 'react-router/lib/browserHistory'
import Router from 'react-router/lib/Router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import { mountResponsive } from 'app/providers/responsive'
import getClientBrowserInfo from 'app/utils/getClientBrowserInfo'
import configureStore from './configureStore'

import './global.css'

export const store = mountResponsive(configureStore(browserHistory))
const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

history.listenBefore = (...all) => debug(...all)

/* */

global.__APP__ = {
  backup: {
    console: global.console
  }
}
global.console.log = global.console.warn = global.console.error = debug.bind(debug)
global.localStorage.DEBUG='*'

const client = getClientBrowserInfo()

__DEVELOPMENT__ && require('react-a11y')(React, {
  throw: true,
  includeSrcNode: true,
  device: [client.isMobile ? 'mobile' : 'desktop']
})

/* */

const start = () => {
  render(
    <Provider store={store} key="provider">
      <AppContainer>
        <Router history={history} routes={routes} />
      </AppContainer>
    </Provider>
  , rootEl)
  console.log('[APP] Loaded.')
}

/* */

module.hot && module.hot.accept('./pages', () => {
  console.log('module hot accept pages')
  require('set-immediate-shim')(() => {
    console.log('set-immediate')
    unmountComponentAtNode(rootEl)
    start()
  })
})

start()
