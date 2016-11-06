/* eslint-disable */
import React from 'react'
import { Route } from 'react-router'
import generateAsyncRoutes from 'app/utils/generateAsyncRoutes'
// import App from './App'
import pages from './pages'
export default store => {
  return (
    <Route path="/" component={App}>
      {generateAsyncRoutes(pages)}
    </Route>
  )
}
