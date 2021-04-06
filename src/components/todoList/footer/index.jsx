import React, { Component } from 'react'
import './index.less'

export default class List extends Component {
  // 全选checkbox的回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  // 清除所有已完成的回调
  handleClearAllChecked = (doneCount) => {
    if (doneCount < 1) {
      alert('没有要清除的任务')
      return
    }
    this.props.clearChecked()
  }
  render() {
    const { todos } = this.props
    // 计算已完成的个数
    const doneCount = todos.reduce(
      (pre, todo) => pre + (todo.checked ? 1 : 0),
      0
    )
    // 总数
    const total = todos.length
    return (
      <div className="footer">
        <div className="footer-input">
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
          <span>
            已完成{doneCount}/未完成{total}
          </span>
        </div>
        <button
          className="footer-delete"
          onClick={() => this.handleClearAllChecked(doneCount)}
        >
          清除已完成任务
        </button>
      </div>
    )
  }
}
