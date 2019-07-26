import React from 'react';

const DesignIcon = (props) => {
  return(
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center design-item">
    <div className="container-fluid d-flex align-items-center justify-content-center design-item-icon">
      <i class={props.class}></i>
    </div>
    <div className="container-fluid d-flex align-items-center justify-content-center design-item-text">
      {props.name}
    </div>
  </div>
  )
}

export default DesignIcon;