import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
class Counter extends Component {
  constructor(props) {
    super(props)
    this.tick = props.increment.bind(null, 1)
  }

  render() {
    return (
      <div>
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
