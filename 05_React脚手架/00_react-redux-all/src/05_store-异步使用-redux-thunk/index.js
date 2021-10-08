import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// redux-saga的使用
import sagaMiddleWare from 'redux-saga'
import reducer from './reducer';
// redux-saga的使用
import mySaga from './saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhandleSagaMiddleWare = sagaMiddleWare();
const middleware = composeEnhancers(applyMiddleware(thunkMiddleware, enhandleSagaMiddleWare));
const store = createStore(reducer, middleware);
enhandleSagaMiddleWare.run(mySaga);

export default store;
