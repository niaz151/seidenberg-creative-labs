import React from 'react';

class Header extends React.Component{

  render(){
    return(
      <div class="header-container fixed-top ">
        <nav class="navbar navbar-expand-lg navbar-light container header">

          <div>
            <a href="#"> 
              <img src={require("../images/brain.png")} className="brain-img" />
            </a>
            <span class="navbar-brand text-light header-logo header-link" style={{marginLeft:"10px"}}> SCL </span>
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item pr-3">
                <a class="nav-link text-light header-link" href="#">Team <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link text-light header-link" href="#">Skills</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link text-light header-link" href="#">Projects</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link text-light header-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
    )
  }
}

export default Header;