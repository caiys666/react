import React, { Component } from 'react'
// import qs from 'querystring'
import './index.less'

const data = [
  { id: '01', content: '中国' },
  { id: '02', content: '北京' },
  { id: '03', content: '遵义' },
]
export default class Detail extends Component {
  render() {
    // 接收params参数
    const { id, title } = this.props.match.params

    // 接收search参数
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))

    // 接收state参数
    // const { id, title } = this.props.location.state || {}

    const findResult =
      data.find((detailObj) => {
        return detailObj.id === id
      }) || {}
    return (
      <ul className="detail">
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    )
  }
}
