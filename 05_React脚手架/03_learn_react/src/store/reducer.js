import initStore from './initStore';

import { increment } from './contans';

const reducer = (state = initStore, action) => {
    switch(action.type) {
        case increment:
            return {...state, counter: state.counter + 1}
        default:
            return state
    }
}

export default reducer;