import { Component } from 'react';
class NavbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }
    render() {
        const { titles } = this.props;
        const { activeIndex } = this.state;
        return (
            <div className="nav">
                {titles.map((item, index) => {
                    return <div onClick={e => this.changeIndex(index)} className={"nav-item " + (activeIndex === index ? "is-active" : "")} key={item}>{item}</div>
                })}
            </div>
        )
    }
    changeIndex(index) {
        this.setState({
            activeIndex: index
        });
        // 子组件通过props传递index参数回去给父组件
        this.props.changeIndex(index);
    }
}
export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            titles: ["媒体", "动画", "游戏"],
            activeIndex: 0
        }
    }
    render() {
        return (
            <div>
                {/* 父组件传递titles、changeIndex属性给子组件，changeIndex同时接收子组件传递回来的参数 */}
                <NavbarItem changeIndex={index => this.getIndex(index)} titles={this.state.titles} />
                <div>{ this.state.titles[this.state.activeIndex] }</div>
            </div>
        )
    }
    getIndex(index) {
        this.setState({
            activeIndex: index
        })
    }
}