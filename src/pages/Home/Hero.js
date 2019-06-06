import React from 'react';
import CurvedBottom from '../../components/CurvedBottom';

const Hero = () => {

  return(
    <div className="container-fluid d-flex align-items-center justify-content-center flex-column position-relative h-75 home-hero">
      <div className="container w-75 d-flex align-items-center justify-content-center home-hero-title-container">
        <span className="home-hero-title"> Seidenberg </span>
        <span className="home-hero-title home-hero-title-heavy"> Creative Labs </span>
      </div>
      <div className="container w-50 d-flex align-items-center justify-content-center home-hero-subtitle-container ">
        <span className="home-hero-subtitle"> Technology Research and Development </span>
      </div>
      <CurvedBottom color="white" />
    </div>
  )
}

export default Hero;

