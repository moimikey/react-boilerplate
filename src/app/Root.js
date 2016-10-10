import React, { Component } from 'react'
import CSS from 'react-css-modules'
import App from './App'
import stylesheet from './Root.css'

@CSS(stylesheet)
export default class Root extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <App />
    )
  }
}
