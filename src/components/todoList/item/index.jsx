import React, { Component } from 'react'
import './index.less'

export default class Item extends Component {
  // 勾选或者取消勾选的事件
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 删除的回调
  handleDelete = (id) => {
    if (window.confirm('确认删除？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { todo } = this.props
    return (
      <ul className="item">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={this.handleCheck(todo.id)}
        />
        <li className="item-li">{todo.title}</li>
        <button
          className="item-delete"
          onClick={() => {
            this.handleDelete(todo.id)
          }}
        >
          删除
        </button>
      </ul>
    )
  }
}
