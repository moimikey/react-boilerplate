import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import addClasses from 'app/utils/addClasses'
import CSS from 'react-css-modules'
import MemoryStats from 'react-memorystats'
import { getMediaQueries } from 'app/utils/store-queries'
import Page from 'app/components/Page'
import PrimaryNavigation from 'app/components/PrimaryNavigation'
import stylesheet from './component.css'
@connect(
  state => ({
    mq$: getMediaQueries(state)
  })
)
@CSS(stylesheet, { allowMultiple: true })
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
    const classNames = addClasses({
      'mq-sm': mq$.isSmall,
      'mq-md': mq$.isMedium,
      'mq-lg': mq$.isLarge
    })
    return (
      <div className={classNames} styleName="App">
        <MemoryStats corner="bottomRight" />
        <Page>
          <section styleName="App-menu">
            <PrimaryNavigation />
          </section>
          <section styleName="App-content">
            {children}
          </section>
        </Page>
      </div>
    )
  }
}
