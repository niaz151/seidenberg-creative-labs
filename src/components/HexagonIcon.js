import React from 'react';

const HexagonIcon = (props) => {
  return (
    <div class="container-fluid d-flex flex-column align-items-center justify-content-center hex-item">
      <div class="hexagon-wrapper">
        <div id="color_one" class="hexagon"></div>
      </div>
      <div class="container-fluid d-flex flex-column align-items-center justify-content-center current-members-text-wrapper">
        <div class="container-fluid d-flex flex-column align-items-center justify-content-center current-members-text-header-wrapper">
          <div class="container-fluid d-flex align-items-center justify-content-center current-members-text-header-title">
            {props.name}
          </div>
          <div class="container-fluid d-flex align-items-center justify-content-center current-members-text-header-subtitle">
            {props.role}
          </div>
        </div>
        <div class="container-fluid d-flex align-items-center justify-content-center current-members-text-blurb-wrapper">
            {props.desc}
        </div>
      </div>
  </div>
  )
}

export default HexagonIcon;