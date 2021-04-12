import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from '../myNavLink/index'
import Home from './home/index'
import About from './about/index'
import './Spa.less'

export default class Spa extends Component {
  render() {
    return (
      <div className="spa">
        <h1>React Router Demo</h1>
        <hr />
        <div className="spa-router">
          <div className="spa-router-nav">
            <MyNavLink to="/about" children="About" />
            <MyNavLink to="/home" children="Home" />
          </div>
          <div className="spa-router-content">
            {/** 注册路由 */}
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
          </div>
        </div>
      </div>
    )
  }
}
