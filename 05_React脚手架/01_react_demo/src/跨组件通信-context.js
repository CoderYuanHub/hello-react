import React, { Component } from 'react'
const InfoContext = React.createContext("infoname")

// createContext类实现方法
class CrosContextInfo extends Component {
    static contextType = InfoContext;

    render() {
        return (
            <div>
                <div>类表达方法</div>
                {this.context}
            </div>
        )
    }
}
// createContext函数实现方法
function CrosContextFun() {
    return (
        <InfoContext.Consumer>
            {value => {
                return (
                    <div>
                        <div>函数式表达使用法</div>
                        <div>{value}</div>
                    </div>
                )
            }}
        </InfoContext.Consumer>
    )
}
CrosContextFun.context = InfoContext;
class CrosContentHeader extends Component {
    render() {
        return (
            <div>
                <CrosContextInfo></CrosContextInfo>
            </div>
        )
    }
}

export default class CrosContext extends Component {
    render() {
        return (
            <div>
                <InfoContext.Provider value={"测试"}>
                    <CrosContentHeader />
                </InfoContext.Provider>
                <CrosContextFun />
            </div>
        )
    }
}
