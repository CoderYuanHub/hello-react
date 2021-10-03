import React, { PureComponent } from 'react';
import { action } from './store/action';
import store from './store/index';
import Home from './home/Home';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            console.log('更新了')
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    render() {
        return (
            <div>
                <div>初始化值：{this.state.counter}</div>
                <button onClick={e => this.increment()}>增加</button>
                <Home />
            </div>
        )
    }
    increment() {
        store.dispatch(action());
    }
}
