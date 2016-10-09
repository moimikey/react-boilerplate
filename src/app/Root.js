import React, { Component, PropTypes as T } from 'react'
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
  }

  componentWillMount() {
    persistStore(this.context.store, {}, () => {
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
