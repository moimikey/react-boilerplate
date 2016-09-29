import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { mountResponsive } from './utils/hocs/responsive'
import configureStore from './configureStore'
import App from './App'
const store = mountResponsive(configureStore())
export class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
