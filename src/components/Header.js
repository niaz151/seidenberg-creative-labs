import React from 'react';

class Header extends React.Component{

  render(){
    return(
      <div className="header-container fixed-top ">
        <nav className="navbar navbar-expand-lg navbar-light container header">

          <div>
            <a href="#"> 
              <img src={require("../images/brain.png")} className="brain-img" />
            </a>
            <span className="navbar-brand text-light header-logo header-link" style={{marginLeft:"10px"}}> SCL </span>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item pr-3">
                <a className="nav-link text-light header-link" href="#">Team <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item pr-3">
                <a className="nav-link text-light header-link" href="#">Skills</a>
              </li>
              <li className="nav-item pr-3">
                <a className="nav-link text-light header-link" href="#">Projects</a>
              </li>
              <li className="nav-item pr-3">
                <a className="nav-link text-light header-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
    )
  }
}

export default Header;