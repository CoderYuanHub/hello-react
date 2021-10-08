import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 简易封装
// import { StoreContext } from './04_store-简易版react-redux/context';
// import store from './04_store-简易版react-redux';
import store from './05_store-异步使用-redux-thunk'
import { Provider } from 'react-redux'


ReactDOM.render(
  // 简易封装
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>,
  // 官方使用
   <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
