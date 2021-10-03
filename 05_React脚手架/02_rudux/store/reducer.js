import initStore from './init.js';
import { increatment } from './contans.js';


function reducer (state = initStore, action) {
    switch (action.type) {
        case increatment:
            return {...state, counter: state.counter + 1}
        default:
            return state;
    }
}
export default reducer;