import { applyMiddleware, createStore } from 'redux';

// 使用redux-thunk
import thunkMiddleware from 'redux-thunk';
// 使用redux-saga
import createSagaMiddleware from 'redux-saga';


import reducer from './reducer';
import saga from './saga'
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);


const store = createStore(reducer, enhancer);
sagaMiddleware.run(saga);
export default store;