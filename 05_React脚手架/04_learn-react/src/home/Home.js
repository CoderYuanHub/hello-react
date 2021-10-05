// import React, { PureComponent } from 'react';
import { increment, decrement } from '../store/action';
import connect from '../store/connect';

// class Home extends PureComponent {
//     render() {
//         return (
//             <div>
//                 <hr />
//                 <div>初始化值为: { this.props.counter }</div>
//                 <button onClick={e => this.props.increment()}>增加</button>
//                 <button onClick={e => this.props.decrement(2)}>减少</button>
//             </div>
//         )
//     }
// }
function Home(props) {
    return (
        <div>
            <hr />
            <div>封装使用</div>
            <div>初始化值为: {props.counter}</div>
            <button onClick={e => props.increment()}>增加</button>
            <button onClick={e => props.decrement(2)}>减少</button>
        </div>
    )
}
const mapStateToProps = state => ({
    counter: state.counter
});
const mapDispatchToProps = disptch => ({
    increment() {
        disptch(increment())
    },
    decrement(number) {
        disptch(decrement(number))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);