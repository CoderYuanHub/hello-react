import React, { PureComponent } from 'react';
import connect from '../utils/connect';
import { action } from '../store/action';


class Home extends PureComponent {
    render() {
        return (
            <div>
                <hr />
                <div>初始化值：{this.props.counter}</div>
                <button onClick={e => this.props.increment()}>增加</button>
            </div>
        )
    }
}

const mapStateProps = state => ({
    counter: state.counter
});
const mapDispatchProps = dispatch => ({
    increment() {
        dispatch(action())
    }
})

export default connect(mapStateProps, mapDispatchProps)(Home);