import React, { Component } from 'react'
import CSS from 'react-css-modules'
import stylesheet from './component.css'
@CSS(stylesheet, { allowMultiple: true })
export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="Home">
        <section styleName="row">
          <div styleName="quarter">1</div>
          <div styleName="half">2</div>
          <div styleName="quarter">3</div>
        </section>
      </div>
    )
  }
}
