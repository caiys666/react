import React, { Component } from 'react'
import './index.less'

export default class index extends Component {
  render() {
    const { items } = this.props
    return (
      <div className="list">
        {items.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <img src={item.avatar_url} alt={item.login} />
              <div>{item.login}</div>
            </div>
          )
        })}
      </div>
    )
  }
}
