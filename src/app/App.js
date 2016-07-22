import React, { Component } from 'react'
import Layout from './components/Layout'
import Page from './components/Page'
import * as Counter from './modules/Counter'
import DeepMenu from './components/DeepMenu'

export default class App extends Component {
  render() {
    return (
      <Page>
        <Layout>
          <Counter.component />
          <DeepMenu />
        </Layout>
      </Page>
    )
  }
}
