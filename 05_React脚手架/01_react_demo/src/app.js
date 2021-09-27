import { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './组件通信案例';
import SlotShow from './React实现slot';
import CrosProps from './跨组件通信-props';
import CrosContext from './跨组件通信-context';
import SetStateUse from './setState的使用';
import ShouldUpdate from './shouldComponentUpdate';
import PureCpn from './PureComponent的使用';
import RefsCpn from './refs的使用';
import EventCpn from './组件通信事件通知';
import HocCpn from './高阶组件的定义方式';
import RefCpn from './ref的转发';
import ProCpn from './protals的使用';

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
            <div>{name + age + height}</div>
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
            <div>{name + age + height}</div>
        )
    }
}
// 父子组件传值，子传父
class ChildCpn3 extends Component {
    constructor() {
        super();
        this.state = {
            msg: '这是ChildCpn3传来的数据'
        }
    }
    render() {
        return (
            <div>
                <button onClick={e => { this.props.childCick(this.state.msg) }}>点击传值给父组件</button>
            </div>
        )
    }

}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            isShow: true,
            childMsg: ''
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
                <hr />
                <div>{this.state.childMsg}</div>
                <ChildCpn3 childCick={content => this.childCick(content)}></ChildCpn3>
                <hr />
                <div>案例演示</div>
                <Navbar></Navbar>
                <hr />
                {/* <SlotShow>
                    <span>导航</span>
                    <span>中间</span>
                    <span>右侧</span>
                </SlotShow> */}
                <SlotShow slotLeft={<span>导航</span>} slotCenter={<span>中间</span>} slotRight={<span>右侧</span>}></SlotShow>
                <hr />
                <CrosProps />
                <CrosContext />
                <SetStateUse></SetStateUse>
                <ShouldUpdate></ShouldUpdate>
                <PureCpn />
                <RefsCpn />
                <EventCpn />
                <HocCpn />
                <RefCpn />
                <ProCpn />
            </div>
        )
    }

    childCick(content) {
        this.setState({
            childMsg: content
        })
        console.log(content)
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