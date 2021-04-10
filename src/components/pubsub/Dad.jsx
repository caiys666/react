import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class Dad extends Component {
  /**
   * 消息的订阅与发布
   * 1、使用subscribe进行消息的订阅  传递两个参数  一个代表订阅的消息的标志
   *      回调函数，里面接收两个参数  一个代表消息发布的标志，一个是消息发布传递的数据
   * 2、使用publish进行消息的发布，一个是消息发布的标志，一个是进行传递的数据
   */
  componentDidMount() {
    this.token = Pubsub.subscribe('cabbage', (_, data) => {
      console.log(_)
      console.log(data)
    })
  }
  componentWillUnmount() {
    Pubsub.unsubscribe(this.token)
  }
  render() {
    return <div></div>
  }
}
