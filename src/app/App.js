import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSS from 'react-css-modules'
import Layout from 'components/Layout'
import Page from 'components/Page'
import * as Counter from 'modules/Counter'
import DeepMenu from 'components/DeepMenu'
import stylesheet from './App.css'

@connect(
  state => ({
    isPhone: state.isPhone || false,
    innerHeight: state.innerHeight,
  })
)
@CSS(stylesheet)
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const { iPhone } = this.props
    const rootClasses = [
        // ...iPhone && 'isMobile'
    ]
    return (
      <div className={rootClasses.join(' ')} styleName="App">
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
