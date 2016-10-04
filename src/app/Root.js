import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { mountResponsive } from 'utils/hocs/responsive'
import configureStore from './configureStore'
import Loading from 'components/Loading'
import App from './App'
const store = mountResponsive(configureStore())
export default class Root extends Component {
  constructor() {
    super()
    this.state = {rehydrated: false}
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if (!this.state.rehydrated) return <Loading />
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
