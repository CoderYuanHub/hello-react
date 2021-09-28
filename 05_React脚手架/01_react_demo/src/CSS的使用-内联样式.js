import React, { PureComponent } from 'react'

export default class StyleInnerCpn extends PureComponent {
    render() {
        return (
            <div>
                <hr />
                <h2 style={{color: "red"}}>CSS的使用</h2>
                <div style={{fontSize: "20px", color: "red"}}>内联样式</div>
            </div>
        )
    }
}
