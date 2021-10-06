import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
// import connect from '../utils/connect';
import { increment, decrement, changeBanner, changeRrecommend } from '../store/action';
import axios from 'axios'

class About extends PureComponent {
    componentDidMount() {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
            console.log(res)
            const banner = res.data.data.banner.list;
            const recommend = res.data.data.recommend.list;
            this.props.changeBanner(banner);
            this.props.changeRrecommend(recommend);
        })
    }
    render() {
        console.log("------------------")
        console.log(this.props)
        return (
            <div>
                <hr />
                <div>封装使用：context</div>
                <div>当前初始化：{this.props.counter}</div>
                <button onClick={e => this.props.increment()}>增加</button>
                <button onClick={e => this.props.decrement(1)}>减少</button>
                <div>banner数据</div>
                <ul>
                    {this.props.banner.map(item => {
                        return (
                            <li key={item.acm}>{item.title}</li>
                        )
                    })}
                </ul>
                <div>recommend数据</div>
                <ul>
                    {this.props.recommend.map(item => {
                        return (
                            <li key={item.acm}>{item.title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    counter: state.counter,
    banner: state.banner,
    recommend: state.recommend
});
const mapDispatchToProps = dispatch => ({
    increment() {
        dispatch(increment());
    },
    decrement(number) {
        dispatch(decrement(number));
    },
    changeBanner(banner) {
        dispatch(changeBanner(banner));
    },
    changeRrecommend(recommend) {
        dispatch(changeRrecommend(recommend));
    }
});

// redux异步操作方法一获取banner

export default connect(mapStateToProps, mapDispatchToProps)(About)