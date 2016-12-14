import React from 'react'
import '!style!css!react-loading-bar/dist/index.css'
export default function Loading() {
  return (
    <div>
      <span className="fa fa-cog fa-spin fa-3x fa-fw" />
      <span className="sr-only" aria-hidden="true">Loading...</span>
    </div>
  )
}
