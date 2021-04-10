import React, { Component } from 'react'

import Dad from './Dad.jsx'
import Child from './Child.jsx'

export default class pubsub extends Component {
  render() {
    return (
      <div>
        <Dad />
        <Child />
      </div>
    )
  }
}
