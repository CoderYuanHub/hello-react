// 使用redux 实现简易 store
import { createStore } from 'redux';

// 初始化store存储内容
const initStore = {
    counter: 0
}

// 纯函数需要传入两个参数，第一个参数state，默认initStore，第二个action对象
// 纯函数不能对影响其他内容
function reducer(state = initStore, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + action.num };
        default:
            return state;
    }
}

// 借助redux创建store
const store = createStore(reducer);

// 监听派发
store.subscribe(() => {
    // store.getState()用于获取返回属性值
    console.log("派发了一次", store.getState().counter)
})

// 派发类型
const action = (num) => ({
    type: "INCREMENT",
    num
})

// 派发
store.dispatch(action);
