import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export default function UseContextCpn(props) {
    // useContext获取值的方法
    const context = useContext(ThemeContext)
    return (
        <div>
            <hr />
            <h2>useContext的使用</h2>
            <div>
                获取的值为:{context.foreground}
            </div>
            <ThemeContext.Consumer>
                {value => {
                    return (
                        <div>旧方法获取值：{value.foreground}</div>
                    )
                }}
            </ThemeContext.Consumer>
        </div>
    )
}
