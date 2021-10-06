import {initStore} from './initStore';
import * as contanTypes from './contans';

function reducer(state = initStore, action) {
    console.log(action)
    switch (action.type) {
        case contanTypes.increment:
            return {...state, counter: state.counter + 1};
        case contanTypes.decrement:
            return {...state, counter: state.counter - action.number};
        case contanTypes.changeBanner:
            console.log({...state, banner: action.banner})
            return {...state, banner: action.banner};
        case contanTypes.changeRecommend:
            return {...state, recommend: action.recommend};
        default:
            return state;
    }
}

export default reducer;