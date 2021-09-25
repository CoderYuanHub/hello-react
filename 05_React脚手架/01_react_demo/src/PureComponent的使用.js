import React, { PureComponent, memo } from 'react'

class Header extends PureComponent {
    render() {
        console.log("Header更新了")
        return (
            <div>
                Header
            </div>
        )
    }
}

class Banner extends PureComponent {
    render() {
        console.log("Banner更新了")
        return (
            <div>
                Banner
            </div>
        )
    }
}


class Main extends PureComponent {
    render() {
        console.log("Main更新了")
        return (
            <div>
                Main
                <Banner />
            </div>
        )
    }
}



class Fotter extends PureComponent {
    render() {
        console.log("Fotter更新了")
        return (
            <div>
                Fotter
            </div>
        )
    }
}

function FunCpn() {
    console.log("函数式组件更新了～")
    return (
        <div>函数式组件</div>
    )
}

const MemoFunCpn = memo(function FunCpn2() {
        console.log("高阶函数式组件更新了～")
        return (
            <div>高阶函数式组件</div>
        )
    }
)


export default class PureCpn extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            msg: "准备更新"
        }
    }
    render() {
        const { msg } = this.state;
        return (
            <div>
                <hr />
                <div>PureComponent的使用</div>
                <div>{msg}</div>
                {/* 此时更新不会影响其他组件更新，但函数式组件会更新，因此需要用高阶函数memo方法限制 */}
                <button onClick={e => this.changeText()}>更新</button>
                <Header />
                <Main />
                <Fotter />
                <FunCpn />
                <MemoFunCpn />
            </div>
        )
    }
    changeText() {
        this.setState({
            msg: "更新好了～"
        })
    }
}
