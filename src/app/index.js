import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { mountResponsive } from 'app/utils/hocs/responsive'
import configureStore from './configureStore'
import Root from './Root'

const store = mountResponsive(configureStore())
const rootEl = document.getElementById('root')

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
