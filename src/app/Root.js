import React, { Component } from 'react'
import crosstabSync from 'redux-persist-crosstab'
import CSS from 'react-css-modules'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { mountResponsive } from 'app/utils/hocs/responsive'
import configureStore from './configureStore'
import Loading from 'app/components/Loading'
import App from './App'
import stylesheet from './Root.css'
const store = mountResponsive(configureStore())
@CSS(stylesheet)
export default class Root extends Component {
  constructor() {
    super()
    this.state = {
      rehydrated: false
    }
    this.persistedStore = cb => persistStore.call(this, store, {}, cb)
    // allow for multiple browser tab rehydration
    crosstabSync(this.persistedStore(null))
  }

  componentWillMount() {
    this.persistedStore(() => {
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
