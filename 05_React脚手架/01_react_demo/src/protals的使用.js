import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
class Model extends PureComponent {
    render() {
        return(
            createPortal(this.props.children, document.getElementById("root"))
        )
    }
}

export default class ProCpn extends PureComponent {
    render() {
        return (
            <div>
                <hr />
                <h2>Portals的使用</h2>
                <p>该方法式可以将节点挂载挂载在页面dom中的任意节点</p>
                <Model>
                    <span>我在这里</span>
                </Model>
            </div>
        )
    }
}
