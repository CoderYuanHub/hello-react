// 引入存储内容
import initStore from './store';
// 引入action类型
import * as contansTypes from './contans'

// 纯函数不能对影响其他内容
function reducer(state = initStore, action) {
    switch (action.type) {
        case contansTypes.INCREMENT:
            return { ...state, counter: state.counter + action.num };
        default:
            return state;
    }
}
export default reducer;