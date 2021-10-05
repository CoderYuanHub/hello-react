import React, { PureComponent } from 'react';
import store from "./index";


/* 
* 接收 mapStateToProps，mapDispatchToProps是个方法返回值
*/
function connetc(mapStateToProps, mapDispatchToProps) {
    return function componentHoc(WrapperCpm) {
        class EnhandleCpn extends PureComponent {
            constructor() {
                super();
                // 存贮组件使用的属性值
                this.state = {
                    storeState: mapStateToProps(store.getState())
                }
            }
            componentDidMount() {
                // 监听store值的变化，使页面重新加载
                store.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(store.getState())
                    })
                })
            }
            render() {
                return (
                    <WrapperCpm {...this.props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />
                )
            }
        }
        return EnhandleCpn;
    }
}

export default connetc;