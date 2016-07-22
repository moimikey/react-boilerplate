import React, { Component } from 'react'
import CSS from 'react-css-modules'
import Layout from './Layout'
import Page from './Page'
import Counter from './components/Counter'
import DeepMenu from './components/DeepMenu'
import stylesheet from './App.css'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

@CSS(stylesheet)
export default class App extends Component {
  render() {
    return (
      <div styleName="App">
        <Page>
          <Layout>
            <Counter />
            <DeepMenu />
          </Layout>
        </Page>
      </div>
    )
  }
}
