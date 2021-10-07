// 使用高阶函数，封装一个高阶组件
import React, { PureComponent } from "react";
import store from './index';

// 接收两个参数 第一个初始化值mapStateToProps,第二个操作mapDispatchToProps
// 例如 mapStateToProps = state => ({ counter: state.counter})
// 例如 mapDispatchToProps = dispatch => ({ increment() {dispatch(action)}})

function connect(mapStateToProps, mapDispatchToProps) {
    return function ComponentHoc(WrapperComponent) {
        return class extends PureComponent{
            constructor() {
                super();
                this.state = {
                    storeState: mapStateToProps(store.getState())
                }
            }
            componentDidMount() {
                // 用于监听更新数据
                this.subscribe = store.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(store.getState())
                    })
                    
                })
            }
            componentWillUnmount() {
                this.subscribe()
            }
            render() {
                return (
                    <WrapperComponent {...this.props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />
                )
            }
        }
    }
}
export default connect;