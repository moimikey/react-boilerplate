import React, { PropTypes } from 'react'
import css from 'react-css-modules'
import stylesheet from './Layout.css'

function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.element
  }
  return (
    <div styleName="Layout">
      {children}
    </div>
  )
}

export default css(stylesheet)(Layout)
