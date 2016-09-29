import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import CSS from 'react-css-modules'
import * as actions from './actions'
import stylesheet from './component.css'

@CSS(stylesheet)
class Counter extends Component {
  static propTypes = {
    increment: T.func,
    count: T.number
  }

  constructor(props) {
    super(props)
    this.tick = props.increment.bind(null, 1)
  }

  render() {
    return (
      <div styleName="Counter">
        <h2>count: {this.props.count}</h2>
        <button onClick={this.tick}>increase</button>
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    count: state.Counter.count
  }
}

export default connect(stateToProps, actions)(Counter)
