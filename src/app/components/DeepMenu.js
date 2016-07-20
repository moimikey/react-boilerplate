import React, { Component } from 'react'

export default class DeepMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      indexOffset: 0,
      index: 0
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  renderPanes() {
    return (
      <div>
        <div className="DeepMenu--Pane">A</div>
        <div className="DeepMenu--Pane">B</div>
        <div className="DeepMenu--Pane">C</div>
        <div className="DeepMenu--Pane">D</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Deep Menu</h2>
        <div className="DeepMenu">
          {this.renderPanes()}
        </div>
      </div>
    )
  }
}

