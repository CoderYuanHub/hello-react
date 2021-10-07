import React, { PureComponent } from 'react';
import { StoreContext } from './context'

// 高阶函数生成高阶组件方法，简易react-redux
function connect(mapStateToProps, mapDispatchToProps) {
    return function ComponentHOC(WrapperComponent) {
        class NewComponent extends PureComponent{
            constructor(props, context) {
                super(props, context);
                this.state = {
                    storeState: mapStateToProps(context.getState())
                }
            }
            componentDidMount() {
                // 订阅store更新
                this.subscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }
            componentWillUnmount() {
                // 组件销毁，同时销毁监听
                this.subscribe()
            }
            render() {
                return (
                    <WrapperComponent {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)} />
                )
            }
        }
        NewComponent.contextType = StoreContext;
        return NewComponent;
    }
}

export default connect;