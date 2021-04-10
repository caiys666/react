import React, { Component } from 'react'
import Search from './search/index'
import List from './list/index'
import './github.less'

export default class Github extends Component {
  // 初始化状态
  state = {
    inputValue: '',
    items: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false,
    err: '',
  }
  handleChange = (inputValue) => {
    this.setState({ inputValue })
  }
  // 保存获取到的数据
  handleSave = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    const { inputValue, items } = this.state
    return (
      <div className="github">
        <Search
          inputValue={inputValue}
          handleChange={this.handleChange}
          items={items}
          handleSave={this.handleSave}
        />
        <List {...this.state} />
      </div>
    )
  }
}
