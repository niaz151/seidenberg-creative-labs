import React from 'react';
import CurvedBottom from '../../components/CurvedBottom';

const Hero = () => {

  return(
    <div className="container-fluid d-flex align-items-center position-relative h-75 home-hero" style={{justifyContent:"center"}}>
      <div className="container h-25">
        Heero
      </div>
      <CurvedBottom color="white" />
    </div>
  )
}

export default Hero;

