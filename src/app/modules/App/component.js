import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import withRouter from 'react-router/lib/withRouter'
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
@withRouter()
@CSS(stylesheet, { allowMultiple: true })
export default class App extends Component {
  static propTypes = {
    children: T.object.isRequired,
    mq$: T.object,
    router: T.function
  }

  constructor(props) {
    super(props)
    this.state = {
      ready: false
    }
    props.router && props.router.router.history.listenBefore(() => {
      this.setState({ ready: true })
    })
    props.router && props.router.router.history.listen(() => {
      this.setState({ ready: false })
    })
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
            { this.state.ready ? children : 'LOADING' }
          </section>
        </Page>
      </div>
    )
  }
}
