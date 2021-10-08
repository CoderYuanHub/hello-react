import initStore from './store';
import { INCREMENT, FETCHBANNER, FETCHRECOMMEND } from './contans'

function reducer(state = initStore, action) {
    console.log(action)
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + action.num };
        case FETCHBANNER:
            return { ...state, banner: action.banner };
        case FETCHRECOMMEND:
            return { ...state, recommend: action.recommend };
        default:
            return state;
    }
}

export default reducer;