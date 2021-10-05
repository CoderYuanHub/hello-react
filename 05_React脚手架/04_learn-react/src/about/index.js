import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
// import connect from '../utils/connect';
import { increment, decrement} from '../store/action';

class About extends PureComponent {
    render() {
        return (
            <div>
                <hr />
                <div>封装使用：context</div>
                <div>当前初始化：{this.props.counter}</div>
                <button onClick={e => this.props.increment()}>增加</button>
                <button onClick={e => this.props.decrement(1)}>减少</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    counter: state.counter
});
const mapDispatchToProps = dispatch => ({
    increment() {
        dispatch(increment());
    },
    decrement(number) {
        dispatch(decrement(number));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)