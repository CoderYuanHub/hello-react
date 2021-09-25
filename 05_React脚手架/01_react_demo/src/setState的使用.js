import React, { Component } from 'react'

export default class SetStateUse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <hr />
                <div>setState的使用</div>
                <div>{this.state.counter}</div>
                <button onClick={e => this.changeNumber()}>异步情况</button>
                <button onClick={e => this.asyncChange()}>同步情况一</button>
                <button id="btn">同步情况二</button>
            </div>
        )
    }
    changeNumber() {
        // 异步情况,方法一：通过回调获取到更新完的值
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log('拿到更新完的值', this.state.counter)
        })
        console.log("setState是异步情况", this.state.counter);
    }
    asyncChange() {
        setTimeout(() => {
            this.setState({
                counter: this.state.counter + 1
            })
            console.log("setState是同步情况", this.state.counter);
        }, 0)
    }
    componentDidMount() {
        console.log("componentDidMount");
        const btn = document.getElementById("btn");
        btn.addEventListener('click', () => {
            this.setState({
                counter: this.state.counter + 1
            })
            console.log("setState是同步情况", this.state.counter);
        })
    }

    componentDidUpdate() {
        // 异步情况，方法二：通过生命周期获取到更新完的值
        console.log("componentDidUpdate", this.state.counter);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}
