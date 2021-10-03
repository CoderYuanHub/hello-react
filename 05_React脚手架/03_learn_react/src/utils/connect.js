
import React, { PureComponent } from 'react';
import { StoreContext } from './context'

function connect(mapStateProps, mapDispatchProps) {
    return function exhandleCpn(WrappedComponent) {
        class EnhandleCpn extends PureComponent{
            constructor(props, context) {
                super(props, context);
                console.log(context)
                this.state = {
                    storeSatte: mapStateProps(context.getState())
                }
            }
            componentDidMount() {
                this.subscribe = this.context.subscribe(() => {
                    this.setState({
                        storeSatte: mapStateProps(this.context.getState())
                    })
                })
            }
            componentWillUnmount() {
                this.subscribe();
            }
            render() {
                return (
                    <WrappedComponent {...this.props} {...mapStateProps(this.context.getState())} {...mapDispatchProps(this.context.dispatch)} />
                )
            }
        }
        EnhandleCpn.contextType = StoreContext;
        return EnhandleCpn;
    }
    
}

export default connect;