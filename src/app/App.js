import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import CSS from 'react-css-modules'
import { getMediaQueries } from 'utils/store-queries'
import Layout from 'components/Layout'
import Page from 'components/Page'
import * as Counter from 'modules/Counter'
import stylesheet from './App.css'
@connect(
  state => ({
    mq$: getMediaQueries(state)
  })
)
@CSS(stylesheet)
export default class App extends Component {
  static propTypes = {
    mq$: T.object
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { mq$ } = this.props
    const classNames = cx({
      'mq-sm': mq$.isSmall,
      'mq-md': mq$.isMedium,
      'mq-lg': mq$.isLarge
    })
    return (
      <div className={classNames} styleName="App">
        <Page>
          <Layout>
            <Counter.component />
          </Layout>
        </Page>
      </div>
    )
  }
}
