import initStore from './store';
import { INCREMENT } from './contans'
function reducer(state = initStore, action) {
    switch(action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + action.num};
        default:
            return state;
    }
}

export default reducer;