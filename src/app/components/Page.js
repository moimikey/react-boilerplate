import React, { PropTypes } from 'react'
import css from 'react-css-modules'
import stylesheet from './Page.css'

function Page({ children }) {
  Page.propTypes = {
    children: PropTypes.element
  }
  return (
    <div styleName="Page">
      {children}
    </div>
  )
}

export default css(stylesheet)(Page)
