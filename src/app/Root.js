import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import wire from 'redux-shared-worker/lib/wire'
// import ConfigureStore from 'shared-worker!./configureStore'
import App from './App'

// const store = wire(new ConfigureStore, { counter: 0 })
const store = require('./configureStore').default()

export class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
