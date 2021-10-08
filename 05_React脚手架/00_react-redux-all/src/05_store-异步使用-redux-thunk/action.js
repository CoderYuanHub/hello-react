import { INCREMENT, FETCHBANNER, FETCHRECOMMEND, FETCHALLLIST } from './contans';
import axios from 'axios'

const action = num => ({
    type: INCREMENT,
    num
});

const fetchBanner = banner => ({
    type: FETCHBANNER,
    banner
});
const fetchRecommend = recommend => ({
    type: FETCHRECOMMEND,
    recommend
});
// redux-saga拦截的函数，写成箭头函数不生效，原因未知
const fetchAllList = {
    type: FETCHALLLIST
}

// redux-thunk中定义的action函数
const fetchData = (dispatch, getState) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        const banner = res.data.data.banner.list;
        const recommend = res.data.data.recommend.list;
        dispatch(fetchBanner(banner));
        dispatch(fetchRecommend(recommend));
    })
}
export {
    action,
    fetchBanner,
    fetchRecommend,
    fetchData,
    fetchAllList
}