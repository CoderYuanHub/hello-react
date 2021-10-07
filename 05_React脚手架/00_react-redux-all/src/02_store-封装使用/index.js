// 对简易使用的方法进行封装
import { createStore } from 'redux';

// 引入纯函数reducer
import reducer from './reducer'

const store = createStore(reducer);

export default store;