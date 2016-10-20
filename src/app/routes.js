/* eslint-disable */
import React from 'react'
import { IndexRoute, Route } from 'react-router'
import generateAsyncRoutes from 'app/utils/generateAsyncRoutes'
import App from './App'
import pages from './pages'
export default store => {
  const { Home, Counter, FourOhFour } = generateAsyncRoutes(pages)
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="counter" component={Counter} />
      <Route path="*" component={FourOhFour} />
    </Route>
  )
}
