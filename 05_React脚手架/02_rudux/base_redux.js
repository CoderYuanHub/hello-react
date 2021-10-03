import redux from "redux";

// 创建一个对象要保存的状态，
const initStore = {
    counter: 0
};



// 创建一个纯函数
function reducer(state = initStore, action) {
    switch(action.type) {
        case "INCREATEMENT": 
            return {...state, counter: state.counter + 1};
        default:
            return state;
    }
}
// 创建一个store，
const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log("派发了 一次", store.getState().counter)
})


// action
const action1 = {
    type: "INCREATEMENT"
}
const action2 = {
    type: "INCREATEMENT",
    num: 10
}

// 派发dispatch
store.dispatch(action1)
store.dispatch(action2);
