import {initStore} from './initStore';
import * as contanTypes from './contans';

function reducer(state = initStore, action) {
    switch (action.type) {
        case contanTypes.increment:
            return {...state, counter: state.counter + 1};
        case contanTypes.decrement:
            return {...state, counter: state.counter - action.number};
        default:
            return state;
    }
}

export default reducer;