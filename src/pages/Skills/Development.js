/* eslint-disable react/jsx-pascal-case */
import React from 'react';

const Development = () => {
  return(
    <div className="development-container">
      <div className="development-title">
        <div className="development-title-big">
          Development
        </div>
        <div className="development-title-small">
          We develop so fast. So well. So creatively.
        </div>
      </div>
      <div className="development-icons">
        <div className="development-icon">
          <div className="development-icon-img">
            <img src={require('../../images/dev_computer_icon.png')} className="development-computer-img" alt="" />
          </div>
          <div className="development-icon-title">
            Websites 
          </div>
          <div className="development-icon-desc">
            Using HTML, React, Electron, and other modern technologies we deliver exciting end products.
          </div>
        </div>
        <div className="development-icon">
          <div className="development-icon-img">
            <img src={require('../../images/dev_phone_icon.png')} className="development-phone-img" alt="" />
          </div>
          <div className="development-icon-title">
            Mobile Apps
          </div>
          <div className="development-icon-desc">
            We like to stay on top of modern trends. Whether it's iOS or Android our developers have it covered.
          </div>
        </div>
        <div className="development-icon">
          <div className="development-icon-img">
            <img src={require('../../images/dev_laptop_icon.png')} class="development-laptop-img" alt="" />
          </div>
          <div className="development-icon-title">
            Software
          </div>
          <div className="development-icon-desc">
           We made Microsoft Word. Bill Gates then stole it from one of our developers on a drunken night out.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Development;