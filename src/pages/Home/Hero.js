import React from 'react';
import CurvedBottom from '../../components/CurvedBottom';

const Hero = () => {

  return(
    <div className="container-fluid d-flex align-items-center justify-content-center flex-column position-relative hero">
      <div className="container w-100 d-flex align-items-center justify-content-center hero-title-container">
        <span className="hero-title"> Seidenberg </span>
        <span className="hero-title hero-title-heavy"> Creative Labs </span>
      </div>
      <div className="container w-100 d-flex align-items-center justify-content-center hero-subtitle-container ">
        <span className="hero-subtitle"> Technology design and Development </span>
      </div>
      <CurvedBottom color="white"/>
    </div>
  )
}

export default Hero;

