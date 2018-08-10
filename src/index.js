import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from "./App";
import createStore from './redux/store';

const store = createStore();

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, wrapper) : false;