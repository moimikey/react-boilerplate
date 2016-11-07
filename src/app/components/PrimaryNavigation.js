import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import css from 'react-css-modules'
import stylesheet from './PrimaryNavigation.css'
function PrimaryNavigation() {
  PrimaryNavigation.propTypes = {
    children: T.element
  }
  return (
    <div styleName="PrimaryNavigation">
      <ul>
        <li><span className="fa fa-home fa-fw" /> <Link to="/">Home</Link></li>
        <li><span className="fa fa-money fa-fw" /> <Link to="/counter">Counter</Link></li>
        <li><span className="fa fa-exclamation-triangle fa-fw" /> <Link to="/hello-world">Bad Route</Link></li>
        <li><span className="fa fa-user fa-fw" /> <Link to="/profile">Profile</Link></li>
        <li><span className="fa fa-pencil fa-fw" /> <Link to="/profile/edit">Profile: Edit</Link></li>
      </ul>
    </div>
  )
}

export default css(stylesheet, { allowMultiple: true })(PrimaryNavigation)
