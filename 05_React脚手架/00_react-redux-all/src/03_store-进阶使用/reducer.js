import { INCREMENT } from './contans';
import initStore from './store'

// 纯函数，用于处理操作返回属性值
function reducer(state = initStore, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + action.num };
        default:
            return state;
    }
}

export default reducer;