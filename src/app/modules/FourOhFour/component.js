import React, { Component } from 'react'
import CSS from 'react-css-modules'
import stylesheet from './component.css'
@CSS(stylesheet)
export default class FourOhFour extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="FourOhFour">
        <h2>404</h2>
      </div>
    )
  }
}
