import React, { PureComponent } from 'react';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom'

class Home extends PureComponent {
    render() {
        return (
            <div>home</div>
        )
    }
}
class About extends PureComponent {
    render() {
        return (
            <div>About</div>
        )
    }
}
class Index extends PureComponent {
    render() {
        return (
            <div>Index</div>
        )
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to="/home">首页</Link>
                    <Link to="/about">关于</Link>
                    <Link to="/">默认</Link>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/" component={Index} />
                </BrowserRouter>
            </div>
        )
    }
}
