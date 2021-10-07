import React, { PureComponent } from 'react';
// 简易封装
// import connect from './04_store-简易版react-redux/connect';
// 官方使用
import { connect } from 'react-redux'
import { action } from './04_store-简易版react-redux/createActions'


class About extends PureComponent {
    render() {
        return (
            <div>
                <hr />
                <h2>用于展示store-简易react-redux的的效果</h2>
                <p>多个redux的问题</p>
                <div>初始化值: {this.props.counter}</div>
                <button onClick={e => this.props.increment(10)}>触发增加</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
