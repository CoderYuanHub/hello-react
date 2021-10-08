import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios'

import { FETCHALLLIST } from './contans'
import { fetchRecommend, fetchBanner } from './action'

function* fecthAllList(action) {
    console.log(action)
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
    console.log(res.data.data.banner.list)
    yield put(fetchBanner(res.data.data.banner.list));
    yield put(fetchRecommend(res.data.data.recommend.list));
}

function* mySaga() {
    yield takeEvery(FETCHALLLIST, fecthAllList);
}

export default mySaga;