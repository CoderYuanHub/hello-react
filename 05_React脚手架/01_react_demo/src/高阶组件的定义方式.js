import React, { PureComponent, createContext } from 'react';

class CommonCpn extends PureComponent {
    render() {
        return (
            <div>普通组件</div>
        )
    }
}

// 高阶组件的基本使用，方法一；
function exhandleCpn(WrappedComponent) {
    class NewComponent extends PureComponent {
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
    // 设置组件新增名称
    NewComponent.displayName = "koby";

    return NewComponent;
}
const NewCpn = exhandleCpn(CommonCpn);

// 高阶组件的基本使用：方法二
function exhandleCpn2(WrappedComponent) {
    function NewComponent() {
        return (
            <WrappedComponent />
        )
    }
    // 修改组件名称
    NewComponent.displayName = "kobe";
    return NewComponent;
}
const NewCpn2 = exhandleCpn2(CommonCpn);

class HandleProps extends PureComponent {
    render() {
        const { user, age, height } = this.props;
        return (
            <div>
                <div>传递props</div>
                <div>名称：{user}，年龄：{age}, 身高： {height}</div>
            </div>
        )
    }
}

// 高阶组件增强props
function enHandleProps(WrappedComponent) {
    return props => {
        return <WrappedComponent {...props} height={188} />
    }
}

const UpHandleProps = enHandleProps(HandleProps);

// 高阶函数结合Context使用
const UserContext = createContext({
    name: "wyy",
    age: 24,
    height: 1.88
});

function enHandleContext(WrappedComponent) {
    return (
        props => {
            return <UserContext.Consumer>
                {
                    (value) => {
                        return (<WrappedComponent {...props} {...value} />)
                    }
                }
            </UserContext.Consumer>

        }
    )
}

const NewCpnContext = enHandleContext(HandleProps);


// 高阶组件登陆鉴权操作
function enHandleLogin(WrappedComponent) {
    class NewCpm extends PureComponent {
        render() {
            return(
                <div>
                    <div>{this.props.isLogin ? <WrappedComponent /> : "未登陆"}</div>
                </div>
            )
        }
    }
    return NewCpm;
}
class AppleLogin extends PureComponent {
    render() {
        return (
            <div>我登陆啦</div>
        )
    }
}

const IsLoginCpn = enHandleLogin(AppleLogin);


export default class HocCpn extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }
    render() {
        return (
            <div>
                <hr />
                <h2>高阶组件的使用方法</h2>
                <NewCpn />
                <NewCpn2 />
                <UpHandleProps user="wyy" age={123} />
                <UserContext.Provider value={ {name: "wyy2",age: 28,height: 2.88}}>
                    <NewCpnContext />
                </UserContext.Provider>
                <IsLoginCpn isLogin={false}/>

            </div>
        )
    }
    componentDidMount() {
        console.log("object")
    }

    componentDidUpdate() {

    }
    componentWillUnmount() {

    }


}
