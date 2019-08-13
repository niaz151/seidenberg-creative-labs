import React from 'react';

const HexagonIcon = (props) => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center hex-item">
      <div className="hexagon-wrapper">
        <div id="color_one" className="hexagon">
          <img src={require('../images/sammy-g.svg')} className="team-member-portrait"/>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center current-members-text-wrapper">
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center current-members-text-header-wrapper">
          <div className="container-fluid d-flex align-items-center justify-content-center current-members-text-header-title">
            {props.name}
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center current-members-text-header-subtitle">
            {props.role}
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-center current-members-text-blurb-wrapper">
            {props.desc}
        </div>
      </div>
  </div>
  )
}

export default HexagonIcon;