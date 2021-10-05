import React, { PureComponent } from 'react';
import store from './store';
import { increment, decrement } from './store/action';
import Home from './home/Home';
import About from './about/index'

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
        
    }

    render() {
        return (
            <div>
                <div>简易使用</div>
                <div>初始化值：{store.getState().counter}</div>
                <button onClick={e => this.increment()}>增加</button>
                <button onClick={e => this.decrement()}>减少</button>
                <Home />
                <About />
            </div>
        )
    }
    increment() {
        store.dispatch(increment())
    }
    decrement() {
        store.dispatch(decrement(2))
    }
}
