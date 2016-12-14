import React, { Component, PropTypes as T } from 'react'
export const renderOnReady = store => {
  return function renderOnReady(WrappedComponent) {
    return class RenderOnReady extends Component {
      static propTypes = {
        history: T.any
      }

      constructor(props) {
        super(props)
        this.state = {
          ready: false
        }
      }

      componentDidMount() {
        const { history } = this.props
        history.listenBefore(() => {
          this.setState({ ready: true })
        })
        history.listen(() => {
          this.setState({ ready: false })
        })
      }

      render() {
        if (this.state.ready) {
          return <WrappedComponent {...this.props} />
        }
        return <span>LOADING</span>
      }
    }
  }
}
