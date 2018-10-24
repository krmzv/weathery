import React from "react";
import ReactDOM from "react-dom";
import { Today } from './components/Today'
import Forecast from './components/Forecast'

import "./index.css";

const App = () => (
  <div className="container">
    <div className='widget__container'>
      <Today/>
      <Forecast/>
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
