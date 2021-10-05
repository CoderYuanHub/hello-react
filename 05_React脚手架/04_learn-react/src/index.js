import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import StoreContext from './utils/context';
import store from './store/index';
import { Provider } from 'react-redux'

// 简易封装的
// ReactDOM.render(
//   <StoreContext.Provider value={store}>
//     <App />
//   </StoreContext.Provider>,
//   document.getElementById('root')
// );
// 官方提供
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
