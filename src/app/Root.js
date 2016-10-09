import React, { Component, PropTypes as T } from 'react'
import crosstabSync from 'redux-persist-crosstab'
import CSS from 'react-css-modules'
import { persistStore } from 'redux-persist'
import Loading from 'app/components/Loading'
import App from './App'
import stylesheet from './Root.css'

@CSS(stylesheet)
export default class Root extends Component {
  static contextTypes = {
    store: T.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      rehydrated: false
    }
    this.persistedStore = cb => persistStore.call(this, this.context.store, {}, cb)
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
      <App />
    )
  }
}
