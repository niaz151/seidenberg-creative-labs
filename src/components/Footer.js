import React from 'react';

class Footer extends React.Component{

  render(){
    return(
      <div className="container-fluid w-100 h-50 border d-flex align-items-center justify-content-center flex-column footer">
        <div className="container w-50 d-flex align-items-center justify-content-center footer-title">
          Site Links
        </div>
        <div className="container d-flex align-items-center justify-content-center footer-subtitles">
          <span className="footer-item d-flex align-items-center justify-content-center"> Home </span>
          <span className="footer-item d-flex align-items-center justify-content-center"> Team </span>
          <span className="footer-item d-flex align-items-center justify-content-center"> Skills </span>
          <span className="footer-item d-flex align-items-center justify-content-center"> Projects </span>
          <span className="footer-item d-flex align-items-center justify-content-center"> Contact </span>
          <span className="footer-item d-flex align-items-center justify-content-center"> Join Us </span>
        </div>
      </div>
    )
  }
}

export default Footer;