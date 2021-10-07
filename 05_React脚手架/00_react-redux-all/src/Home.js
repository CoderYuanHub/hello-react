import React, { PureComponent } from 'react';
import connect from './03_store-进阶使用/connect';
import { action } from './03_store-进阶使用/creatActions'


class Home extends PureComponent {
    render() {
        return (
            <div>
                <hr />
                <h2>用于展示store-进阶展示的的效果</h2>
                <div>初始化值: {this.props.counter}</div>
                <button onClick={e => this.props.increment(2)}>触发增加</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});
const mapDispatchToProps = dispacth => ({
    increment(num) {
        dispacth(action(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
