import React, { Component } from 'react'
import axios from 'axios'
import './index.less'

export default class index extends Component {
  handleChange = (event) => {
    this.props.handleChange(event.target.value)
  }
  // 进行搜索的事件
  handleSearch = async () => {
    const { inputValue, handleSave } = this.props
    if (inputValue) {
      // 发送请求前通知github组件更新状态
      handleSave({ isFirst: true, isLoading: true })
      try {
        const res = await axios.get(
          `https://api.github.com/search/users?q=${inputValue}`
        )
        // 请求成功后通知github组件更新状态
        handleSave({ isLoading: false, items: res.data.items })
      } catch (error) {
        // 请求失败后通知github组件更新状态
        handleSave({ isLoading: false, err: '请求失败！' })
        console.log(error)
      }
    } else {
      alert('请输入你要所搜的用户')
    }
  }
  render() {
    const { inputValue } = this.props
    return (
      <div className="search">
        <h3>Search User</h3>
        <div className="search-box">
          <input
            className="search-box-ipt"
            type="text"
            placeholder="请输入你要所搜的用户"
            value={inputValue}
            onChange={this.handleChange}
          />
          <button className="search-box-btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    )
  }
}
