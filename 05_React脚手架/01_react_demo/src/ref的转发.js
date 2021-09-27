import React, { PureComponent, createRef, forwardRef } from 'react';

const ForFun = forwardRef(function(props, ref) {
    return(
        // 需要传入ref
        <div ref={ref}>
            函数式方法
        </div>
    )
})

export default class RefCpn extends PureComponent {
    constructor() {
        super();
        this.funRef = createRef();
    }
    render() {
        return (
            <div>
                <hr />
                <h2>REF的转发</h2>
                <p>主要解决函数方法无法使用ref</p>
                <ForFun ref={this.funRef}/>
                <button onClick={e => this.getRef()}>获取REF</button>
            </div>
        )
    }
    getRef() {
        console.log(this.funRef.current);
    }
}
