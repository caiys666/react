import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './detail/index'

import './index.less'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1', content: '中国' },
      { id: '02', title: '消息2', content: '北京' },
      { id: '03', title: '消息3', content: '遵义' },
    ],
  }

  replaceShow = (id, title) => {
    // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
    // replace+params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // replace+search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

    // replace+state参数
    // this.props.history.replace(`/home/message/detail`,{id,title})
  }
  pushShow = (id, title) => {
    // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
    // push+params参数
    this.props.history.push(`/home/message/detail/${id}/${title}`)

    // push+search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    // replace+state参数
    // this.props.history.push(`/home/message/detail`, { id, title })
  }
  render() {
    const { messageArr } = this.state
    return (
      <div className="message">
        <ul className="message-ul">
          {messageArr.map((msgObj) => {
            return (
              <li className="message-ul-li" key={msgObj.id}>
                {/** 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
                {/** 向路由组件传递search参数 */}
                {/** <Link
                  to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}
                >
                  {msgObj.title}
                </Link> */}
                {/** 向路由组件传递state参数 */}
                {/* <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: msgObj.id, title: msgObj.title },
                  }}
                >
                  {msgObj.title}
                </Link> */}
                &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => this.replaceShow(msgObj.id, msgObj.title)}
                >
                  replace查看
                </button>
              </li>
            )
          })}
        </ul>
        <hr />
        {/** 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/** search参数无需声明接收  正常注册路由即可 */}
        {/** <Route path="/home/message/detail" component={Detail} /> */}
        {/** state参数无需声明接收  正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    )
  }
}
