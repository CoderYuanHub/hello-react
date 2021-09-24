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