import React, { Component } from 'react'
import CSS from 'react-css-modules'
import stylesheet from './Counter.css'

@CSS(stylesheet)
export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <h2 styleName="Counter">count: {this.state.counter}</h2>
   )
  }
}

