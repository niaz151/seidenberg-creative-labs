import React from 'react';

const OurSkillsIcon = (props) => {
  return(
    <div className="container-fluid  d-flex align-items-center justify-content-center our-skills-icon">
      <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-img">
        <i className={props.class}></i>
      </div>
      <div>
        <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-header">
          {props.name}
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-center text-center our-skills-icon-desc">
          {props.desc}
        </div>
      </div>
    </div>
  )
}

export default OurSkillsIcon;