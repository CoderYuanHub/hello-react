import React, { PureComponent } from 'react';
import Style from 'styled-components';

const Common = Style.div`
    font-ize: 20px;
    color: blue
`

export default class StyledComponentsCPn extends PureComponent {
    render() {
        return (
            <div>
                <Common>我是styled-components的样式</Common>
            </div>
        )
    }
}
