import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class ClassNamesCpn extends PureComponent {
    render() {
        const isbtn = true;
        return (
            <div>
                <hr />
                {/* 函数网址 */}
                {/* https://www.npmjs.com/package/classnames */}
                <h2>classnames函数的使用</h2>
                <p className={classNames('foo', 'bar', {'btn': isbtn})}>该函数是为了解决在react中使用动态样式的复杂性，该函数支持像在Vue中使用动态样式</p>
            </div>
        )
    }
}
