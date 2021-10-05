import React, { PureComponent } from 'react';
// import store from '../store/index';
import StoreContext from './context'

function connect(mapStateToProps, mapDispatchToProps) {
    return function ComponentHoc(WrapperCpm) {
        class NewComponet extends PureComponent {
            constructor(props, context) {
                super(props, context);
                this.state = {
                    storeState: mapStateToProps(context.getState())
                }
            }
            componentDidMount() {
                this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }
            render() {
                return (
                    <WrapperCpm {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)} />
                )
            }
        }
        NewComponet.contextType = StoreContext;
        return NewComponet;
    }
}

export default connect;