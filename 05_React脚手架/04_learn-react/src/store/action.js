import * as contanTypes from './contans';
import axios from 'axios';
const increment = () => ({
    type: contanTypes.increment
});

const decrement = (number) => ({
    type: contanTypes.decrement,
    number
});

const changeBanner = (banner) => ({
    type: contanTypes.changeBanner,
    banner
});
const changeRrecommend = (recommend) => ({
    type: contanTypes.changeRecommend,
    recommend
});
// redux-thunk的使用
const getHomeMultidataAction = () => {
    return (dispatch) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
            const data = res.data.data;
            dispatch(changeBanner(data.banner.list));
            dispatch(changeRrecommend(data.recommend.list));
        })
    }
}
// redux-saga的使用
const fetchHomeMultidataAction = () => ({
    type: contanTypes.FETCH_HOME_MULTIDATA
})

export {
    increment,
    decrement,
    changeBanner,
    changeRrecommend,
    getHomeMultidataAction,
    fetchHomeMultidataAction
}