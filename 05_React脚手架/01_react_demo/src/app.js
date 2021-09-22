import { Component } from 'react';
import PropTypes from 'prop-types';

// 函数式组件
function Fun() {
    return (
        <div>函数式组件表示法</div>
    )
}
// 类组件   
class ClaCpn extends Component {
    render() {
        return (
            <div>类组件</div>
        )
    }
    componentWillUnmount() {
        console.log("执行了componentWillUnmount方法");
    }
}

// 父子组件传值
class ChildCpn extends Component {
    render() {
        const { name, age, height, arr } = this.props;
        console.log(arr);
        return (
            <div>{ name + age + height }</div>
        )
    }
}
// props参数限制
ChildCpn.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    height: PropTypes.number,
    arr: PropTypes.array
}

// props设置默认值
ChildCpn.defaultProps = {
    name: 'wyy123',
    age: 20,
    height: 88,
    arr: ["123", "456"]
}
// 父子组件传值,props限制方法二
class ChildCpn2 extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        height: PropTypes.number,
        arr: PropTypes.array
    }
    static defaultProps = {
        name: 'wyy123',
        age: 20,
        height: 88,
        arr: ["123", "456"]
    }
    render() {
        const { name, age, height, arr } = this.props;
        console.log(arr);
        return (
            <div>{ name + age + height }</div>
        )
    }
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            isShow: true
        }
        console.log("执行了constructor方法");
    }

    render() {
        console.log("执行了render方法");
        return (
            <div>
                <Fun />
                <button onClick={e => this.changeState()}>更改状态</button>
                { this.state.isShow && <ClaCpn />}
                <div>当前计数为：{this.state.count}</div>
                <button onClick={e => { this.increament() }}>计数</button>
                <hr />
                <ChildCpn name="wyy" age={18} height={188}></ChildCpn>
                <hr />
                <ChildCpn></ChildCpn>
                <hr />
                <ChildCpn2></ChildCpn2>
                
            </div>
        )
    }
    changeState() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    increament() {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        console.log("执行了componentDidMount方法");
    }
    componentDidUpdate() {
        console.log("执行了componentDidUpdate方法");
    }
}