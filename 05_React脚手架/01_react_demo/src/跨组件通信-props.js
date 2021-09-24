import React, { Component } from 'react';

// 跨组件传值通过props多层传递
function CrosPropsInfo (props) {
    const { name, age } = props;
    return (<div>{name}+++{age}</div>)
}

class CrosPropsHeader extends Component {
    render() {
        return (
            <div>
                <CrosPropsInfo {...this.props} />
            </div>
        )
    }
}

export default class CrosProps extends Component {
    render() {
        return (
            <div>
                <CrosPropsHeader name="wyy" age={24} />  
            </div>
        )
    }
}
