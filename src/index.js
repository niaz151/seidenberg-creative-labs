import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/css/stylesheet.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
