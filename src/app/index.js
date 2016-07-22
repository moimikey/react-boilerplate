import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { Root } from './Root'

const rootEl = document.getElementById('root')

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
)

module.hot && module.hot.accept('./Root', () => {
  const HydratedRoot = require('./Root').Root
  render(
    <AppContainer>
       <HydratedRoot />
    </AppContainer>,
    rootEl
  )
})
