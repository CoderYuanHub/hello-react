import React, { PureComponent } from 'react';
import {
    BrowserRouter,
    HashRouter,
    NavLink,
    Link,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router/index'

// class Home extends PureComponent {
//     render() {
//         return (
//             <div>home</div>
//         )
//     }
// }
// class About extends PureComponent {
//     render() {
//         return (
//             <div>About</div>
//         )
//     }
// }
// class Index extends PureComponent {
//     render() {
//         return (
//             <div>Index</div>
//         )
//     }
// }


export function Index() {
    return <div>这是首页</div>
}
export function About(props) {
    console.log(props)
    return (
        <div>
            {/* 嵌套路由的使用 */}
            <NavLink exact activeClassName="about-link" to="/about">文化</NavLink>
            <NavLink activeClassName="about-link" to="/about/food">餐饮</NavLink>
            <NavLink activeClassName="about-link" to="/about/join">加入</NavLink>
            <button onClick={e => changeRouter(props)}>手动跳转</button>
            {/* <Route exact path="/about" component={AountCulture} />
            <Route path="/about/food" component={AountFood} />
            <Route path="/about/join" component={AountJion} /> */}
            {renderRoutes(props.route.routes)}
        </div>
    )
    function changeRouter(props) {
        // 嵌套在路由组件会在props传递history、location、match三个属性
        props.history.push('/login')
        console.log(props);
    }
}
export function AountCulture() {
    return <div>这是文化</div>
}
export function AountFood() {
    return <div>这是餐饮</div>
}
export function AountJion() {
    return <div>这是加入</div>
}
export function Login() {
    return <div>登陆组件</div>
}
class Me extends PureComponent {
    constructor() {
        super();
        this.state = {
            isLogin: false
        }
    }
    render() {
        return (
            <div>
                {this.state.isLogin ? (<div>个人信息</div>) : <Redirect to="/login" component={Login} />}
            </div>
        )
    }
}

export function NotMatch() {
    return <div>没有匹配到</div>
}

class App extends PureComponent {
    render() {
        return (
            <div>
                {/* <BrowserRouter>
                    <Link to="/home">首页</Link>
                    <Link to="/about">关于</Link>
                    <Link to="/">默认</Link>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/" component={Index} />
                </BrowserRouter> */}
                {/* NavLink 自带选中效果 通过activeStyle可以修改选中样式 */}
                {/* NavLink 自带选中效果 activeClassName可以修改选中时候的class名称,默认自带active属性 */}

                <NavLink exact to="/" activeStyle={{ fontSize: "20px", color: "red" }}>首页</NavLink>
                <NavLink to="/about" activeStyle={{ fontSize: "20px", color: "red" }}>关于</NavLink>
                <NavLink to="/me" activeStyle={{ fontSize: "20px", color: "red" }}>我的</NavLink>
                <NavLink to="/other" activeStyle={{ fontSize: "20px", color: "red" }}>其他</NavLink>
                <button onClick={e => this.changeRouter()}>手动跳转</button>

                {/* Switch用于排他，当找到匹配项的时候就显示第一个找到项 */}
                {/* <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/me" component={Me} />
                    <Route component={NotMatch} />
                </Switch> */}
                {renderRoutes(routes)}

            </div>
        )
    }
    changeRouter() {
        this.props.history.push('/login')
    }
}
export default withRouter(App);