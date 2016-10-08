import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import CSS from 'react-css-modules'
import { getCounter } from 'app/utils/store-queries'
import * as actions from './actions'
import stylesheet from './component.css'
@connect(
  state => ({
    count: getCounter(state).count
  }),
  actions
)
@CSS(stylesheet)
export default class Counter extends Component {
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
