import React, { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
const initialState = { count: 0 };
export default function UseReducerCpn() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <hr />
            <h2>useReducer的使用</h2>
            <div>count的值为: {state.count}</div>
            <button onClick={e => dispatch({type: 'increment'})}>增加</button>
            <button onClick={e => dispatch({type: 'decrement'})}>减少</button>
        </div>
    )
}
