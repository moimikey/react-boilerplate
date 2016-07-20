import React, { PropTypes } from 'react'

export default function Page({ children }) {
  Page.propTypes = {
    children: PropTypes.element
  }
  return (
    <div className="Page">
      {children}
    </div>
  )
}
