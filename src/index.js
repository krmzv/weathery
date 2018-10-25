import React from "react";
import ReactDOM from "react-dom";
import App from './app'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import "./index.css";

const store = configureStore(window.__INITIAL_STATE__ || {})

const Wrapper = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<Wrapper/>, rootElement);