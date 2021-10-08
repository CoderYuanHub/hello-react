import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAllList } from './05_store-异步使用-redux-thunk/action'

class Me extends PureComponent {
    componentDidMount() {
        console.log(this.props)
        this.props.getAllList();
    }
    render() {
        return (
            <div>
                <hr />
                <h2>redux-saga的使用</h2>
                <ul>
                    {this.props.recommend.map(item => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    banner: state.banner,
    recommend: state.recommend
})
const mapDispatchToProps = dispatch => ({
    getAllList() {
        dispatch(fetchAllList)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Me);

