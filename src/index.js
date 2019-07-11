import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/css/stylesheet.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Team from './pages/Team/Team';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/team" component={Team}/>
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
