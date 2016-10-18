/* eslint-disable */
import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import * as Counter from './modules/Counter'
import * as FourOhFour from './modules/FourOhFour'
export default store => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Counter.component} />
      <Route path="counter" component={Counter.component} />
      <Route path="*" component={FourOhFour.component} />
    </Route>
  )
}
