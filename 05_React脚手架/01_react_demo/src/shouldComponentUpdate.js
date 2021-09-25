import React, { Component } from 'react'

export default class shouldComponentUpdateCmp extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    // 用来控制是否render，当组件页面没有变化的时候可以控制render优化性能，但是如果没有组件都手动控制，工作量非常大，可以使用PureComponet
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
            <div>
                <hr />
                <div>shouldComponentUpdate生命周期函数控制是否render</div>
                <div>当前计数：{this.state.counter}</div>
                <button onClick={e => this.changeNumber()}>按钮更新</button>
            </div>
        )
    }
    changeNumber() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
