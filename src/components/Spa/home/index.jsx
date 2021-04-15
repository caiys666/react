import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../myNavLink/index'
import News from './news/News.jsx'
import Message from './message/Message.jsx'

export default class index extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <MyNavLink to="/home/news" children="News" />
          <MyNavLink to="/home/message" children="Message" />
        </div>
        {/** 注册路由 */}
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    )
  }
}
