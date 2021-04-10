import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class Child extends Component {
  handleClick = () => {
    Pubsub.publish('cabbage', { name: '迪丽热巴', age: 26 })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>发布订阅</button>
      </div>
    )
  }
}
