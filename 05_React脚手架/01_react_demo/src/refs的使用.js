import React, { Component, createRef } from 'react'

export default class RefsCpn extends Component {
    constructor(){
        super();
        this.objRef = createRef();
        // 传递方法
        this.funRef = null
    }
    render() {
        return (
            <div>
                <div>操作dom方法</div>
                {/* ref={字符串/对象/函数}，其中不推荐字符串的使用，官方推荐使用createRef */}
                {/* 方法一：传入字符串 */}
                <div ref="stringRef">传入字符串</div>
                <button onClick={e => this.changeString()}>更改字符串内容</button>
                {/* 方法二：传入对象 */}
                <div ref={this.objRef}>传入对象</div>
                <button onClick={e => this.changeObj()}>更改对象内容</button>
                {/* 方法三：传入方法 */}
                <div ref={arg => this.funRef =arg}>传入方法</div>
                <button onClick={e => this.changeFun()}>更改方法内容</button>

            </div>
        )
    }
    changeString() {
        // 已经逐步被抛弃
        console.log(this.refs.stringRef);
        this.refs.stringRef.innerHTML = "更改了字符串";
    }

    changeObj() {
        console.log(this.objRef.current);
        this.objRef.current.innerHTML = "更改了对象内容";
    }

    changeFun() {
        console.log(this.funRef);
        this.funRef.innerHTML = "更改了方法内容";
    }

}
