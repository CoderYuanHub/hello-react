import React, { PureComponent } from 'react';
import './style.css';
export default class StyleAllCpn extends PureComponent {
    render() {
        return (
            <div>
                <h2>CSS样式全局样式</h2>
                <div className="all-style">我是全局的样式</div>
            </div>
        )
    }
}
