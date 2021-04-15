import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

export default class MyNavLink extends Component {
  render() {
    return <NavLink activeClassName="active" className="item" {...this.props} />
  }
}
