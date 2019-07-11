import React,{Fragment} from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="d-flex flex-column" >
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
