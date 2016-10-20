import React, {Component} from 'react'
import CSS from 'react-css-modules'
import stylesheet from './component.css'
@CSS(stylesheet)
export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="Home">
        <h2>Gurl...</h2>
      </div>
    )
  }
}
