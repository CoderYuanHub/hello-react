import React, { PureComponent } from 'react';
import style from './style.module.css';

export default class StyleModule extends PureComponent {
    render() {
        return (
            <div>
                <div className={style.module}>我是模块化样式</div>
            </div>
        )
    }
}
