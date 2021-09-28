import React, { PureComponent, Fragment } from 'react'

export default class FragmentsCpn extends PureComponent {
    render() {
        return (
            <Fragment>
                <hr />
                <h2>Fragment方法的使用</h2>
                <div>最外层套用Fragment页面加载不展示节点</div>
                {/* 短语法 */}
                <>
                    <div>短语法展示</div>
                    <div>短语法与Fragment的区别在于Fragment可以接收属性</div>
                </>
            </Fragment>
        )
    }
}
