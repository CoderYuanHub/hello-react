import React, { PureComponent } from 'react';
import {
    BrowserRouter,
    HashRouter,
    NavLink,
    Link,
    Route,
    Switch
} from 'react-router-dom'

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


function Index() {
    return <div>这是首页</div>
}
function About() {
    return <div>这是管乐</div>
}
function Me() {
    return <div>这是我</div>
}
function NotMatch() {
    return <div>没有匹配到</div>
}

export default class App extends PureComponent {
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
                <HashRouter>
                    <NavLink exact to="/">首页</NavLink>
                    <NavLink to="/about">关于</NavLink>
                    <NavLink to="/me">我的</NavLink>
                    <NavLink to="/other">其他</NavLink>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/me" component={Me} />
                        <Route component={NotMatch} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
