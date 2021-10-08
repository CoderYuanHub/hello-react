import React, { PureComponent } from 'react';
// import store from './02_store-封装使用';
// import { action } from './02_store-封装使用/creatActions'
import store from './03_store-进阶使用';
import { action } from './03_store-进阶使用/creatActions';
import Home from './Home'
import About from './About'
import List from './List'
import Me from './Me'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    // 监听派发
    this.subscribe = store.subscribe(() => {
      // 更新页面值
      this.setState({
        counter: store.getState().counter
      })
      // store.getState()用于获取返回属性值
      console.log("派发了一次", store.getState().counter)
    })
  }
  componentWillUnmount() {
    this.subscribe()
  }
  render() {
    return (
      <div>
        <div>初始化值: {store.getState().counter}</div>
        <button onClick={e => this.increment(1)}>触发增加</button>
        <Home />
        <About />
        <List />
        <Me />
      </div>
    )
  }
  increment(num) {
    store.dispatch(action(num))
  }
}
