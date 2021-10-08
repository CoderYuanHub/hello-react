import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './05_store-异步使用-redux-thunk/action'

class List extends PureComponent {
    componentDidMount() {
        console.log(this.props)
        // this.props.getList();
    }
    render() {
        return (
            <div>
                <hr />
                <h2>配合redux-thunk获取异步数据</h2>
                <ul>
                    {this.props.banner.map(item => {
                        return <li key={item.acm}>{item.title}</li>
                    })}
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
    getList() {
        dispatch(fetchData)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);