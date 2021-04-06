import React, { Component } from 'react'
// 引入全球唯一Id库
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.less'

export default class Header extends Component {
  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  // 键盘事件的回调
  handleKeyUp = (e) => {
    // 解构赋值
    const { keyCode, target } = e
    // 判断是否是回车键
    if (keyCode !== 13) {
      return
    }
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = { id: nanoid(), title: target.value, checked: false }
    this.props.addTodo(todoObj)
  }
  render() {
    return (
      <div className="header">
        <input
          className="header-input"
          type="text"
          onKeyUp={this.handleKeyUp}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
