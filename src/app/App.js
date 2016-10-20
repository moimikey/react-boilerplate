import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import cx from 'classnames'
import CSS from 'react-css-modules'
import { getMediaQueries } from 'app/utils/store-queries'
import Page from 'app/components/Page'
import stylesheet from './App.css'
@connect(
  state => ({
    mq$: getMediaQueries(state)
  })
)
@CSS(stylesheet)
export default class App extends Component {
  static propTypes = {
    children: T.object.isRequired,
    mq$: T.object
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { mq$, children } = this.props
    const classNames = cx({
      'mq-sm': mq$.isSmall,
      'mq-md': mq$.isMedium,
      'mq-lg': mq$.isLarge
    })
    return (
      <div className={classNames} styleName="App">
        <Page>
          <section styleName="App__Menu">
            <ul>
              <li><Link to="/counter">Good Route</Link></li>
              <li><Link to="/hello-world">Bad Route</Link></li>
            </ul>
          </section>
          <section styleName="App__Content">
            {children}
          </section>
        </Page>
      </div>
    )
  }
}
