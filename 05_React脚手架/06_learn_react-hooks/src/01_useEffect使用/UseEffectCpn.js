import React, { useEffect, useState } from 'react'

export default function UseEffectCpn() {
    const [Title, setTitle] = useState("标题")
    // 相当于componentWillMounted()页面即将加载完
    useEffect(() => {
        document.title = Title;
        // 返回值，当页面销毁时会执行相当于componentWillUnMounted()，一般用于移除监听事件这类的操作
        return () => {
            console.log('执行了')
        }
    })
    function changeTitle() {
        setTitle("新标题")
    }
    return (
        <div>
            <h2>useEffect的使用</h2>
            <div>标题为：{Title}</div>
            <button onClick={e => changeTitle()}>更改标题</button>
        </div>
    )
}
