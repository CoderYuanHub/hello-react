import { createStore } from 'redux';
import reducer from './store/reducer.js';
import { action1 } from './store/action.js';


const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState().counter);
})
store.dispatch(action1());
store.dispatch(action1());
store.dispatch(action1());
store.dispatch(action1());