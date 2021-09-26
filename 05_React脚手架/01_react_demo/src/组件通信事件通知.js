import React, { PureComponent } from 'react';
import { EventEmitter } from 'events';

const EventBus = new EventEmitter();

class Header extends PureComponent {
    render() {
        return(
            <div>
                <div>头部信息</div>
                <button onClick={e => this.sendInfo()}>传递消息</button>
            </div>
        )
    }
    sendInfo() {
        EventBus.emit('Say_Hello', 123, "123");
    }
}

class Fotter extends PureComponent {
    componentDidMount() {
        EventBus.addListener('Say_Hello', (num, str) => {
            this.receiveInfo(num, str)
        })
    }
    componentWillUnmount() {
        EventBus.removeListener('Say_Hello');
    }
    render() {
        return(
            <div>
                <div>底部信息</div>
            </div>
            
        )
    }
    receiveInfo(num, str) {
        console.log('接收的消息');
        console.log(num, str)
    }
}


export default class EventCpn extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Fotter />
            </div>
        )
    }


}
