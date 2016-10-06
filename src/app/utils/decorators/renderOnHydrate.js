/*
import React, { Component, PropTypes as T } from 'react'
import { persistStore } from 'redux-persist'
export const renderOnHydrate = store => {
  return function renderOnHydrate(WrappedComponent) {
    return class RenderOnHydrate extends Component {
      constructor(props) {
        super(props)
        this.state = {
          rehydrated: false
        }
      }

      componentWillMount() {
        return persistStore(store, {}, () => {
          this.setState({
            rehydrated: true
          })
        })
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}
*/
