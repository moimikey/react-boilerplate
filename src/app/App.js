import React, { Component } from 'react'
import CSS from 'react-css-modules'
import Layout from 'components/Layout'
import Page from 'components/Page'
import * as Counter from 'modules/Counter'
import DeepMenu from 'components/DeepMenu'
import stylesheet from './App.css'

@CSS(stylesheet)
export default class App extends Component {
  render() {
    return (
      <div styleName="App">
        <Page>
          <Layout>
            <Counter.component />
            <DeepMenu />
          </Layout>
        </Page>
      </div>
    )
  }
}
