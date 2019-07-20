import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/Projects/Projects';
import Team from '../pages/Team/Team';
class Header extends React.Component{

  render(){
    return(
      <div className="header-container fixed-top ">
        <nav className="navbar navbar-expand-lg navbar-light container header">
          <div>
            <Link to="/"> 
              <a href="#"> 
                <img src={require("../images/brain.png")} className="brain-img"  alt=""/>  
              </a>
              <span className="navbar-brand text-light header-logo header-link" style={{marginLeft:"10px"}}> SCL </span>
            </Link>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item pr-3">
                <Link to="/team">
                  <a className="nav-link text-light header-link" href="#">Team <span className="sr-only">(current)</span></a>
                </Link>
              </li>
              <li className="nav-item pr-3">
                <Link to="/skills">
                  <a className="nav-link text-light header-link" href="#"> Skills <span className="sr-only">(current)</span></a>
                </Link>
              </li>
              <li className="nav-item pr-3">
                <Link to="/projects">
                  <a className="nav-link text-light header-link" href="#"> Projects <span className="sr-only">(current)</span></a>
                </Link>
              </li>
              <li className="nav-item pr-3">
                <Link to="/projects">
                  <a className="nav-link text-light header-link" href="#"> Contact <span className="sr-only">(current)</span></a>
                </Link>
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
    )
  }
}

export default Header;