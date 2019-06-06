import React from 'react';

class Header extends React.Component{

  render(){
    return(
      <div class="w-100 header-container">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light container header">
          <a class="navbar-brand text-light" href="#"> 
            <img src={require("../images/brain.png")} className="brain-img" />
            &nbsp;  
            SCL
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item pr-3">
                <a class="nav-link text-light" href="#">Team <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link text-light" href="#">Skills</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link text-light" href="#">Projects</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link text-light" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;