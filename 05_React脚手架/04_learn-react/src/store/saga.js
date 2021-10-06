import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { changeBanner, changeRrecommend } from './action'
import { FETCH_HOME_MULTIDATA } from './contans'
function* fetchHomeMultidata(action) {
    const res = yield  axios.get('http://123.207.32.32:8000/home/multidata');
    console.log('res-----', res);
    yield put(changeBanner(res.banner.list));
    yield put(changeRrecommend(res.recommend.list));
}

function* mySaga() {
    yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
}

export default mySaga;