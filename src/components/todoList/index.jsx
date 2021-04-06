import React, { Component } from 'react'
import Header from './header/index'
import List from './list/index'
import Footer from './footer/index'

export default class ToDoList extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: 1, checked: false, title: '打篮球' },
      { id: 2, checked: false, title: '唱歌' },
      { id: 3, checked: true, title: '喝酒' },
    ],
  }
  // 添加数据
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodo = [todoObj, ...todos]
    this.setState({
      todos: newTodo,
    })
  }
  // 改变是否勾选
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, checked: done }
      }
      return todoObj
    })
    this.setState({
      todos: newTodos,
    })
  }
  // 用于删除todo
  deleteTodo = (id) => {
    const { todos } = this.state
    // 删除指定id的todo
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }
  // 全选
  checkAllTodo = (checked) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, checked }
    })
    this.setState({ todos: newTodos })
  }
  // 清除所有已完成的
  clearChecked = () => {
    const { todos } = this.state
    // 过滤数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.checked
    })
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo">
        <Header addTodo={this.addTodo} />
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          todos={todos}
          checkAllTodo={this.checkAllTodo}
          clearChecked={this.clearChecked}
        />
      </div>
    )
  }
}
