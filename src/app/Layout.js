import React, { PropTypes } from 'react'

export default function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.element
  }
  return (
    <div className="Layout">
      {children}
    </div>
  )
}
