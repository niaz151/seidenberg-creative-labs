import React from 'react';

const OurSkills = () => {
    
    return(
      <div className="container-fluid d-flex flex-column align-items-center our-skills-container"> 
        <div className="container-fluid w-50 d-flex align-items-center justify-content-center our-skills-header">
          Our Skills
        </div>
        <div className="container-fluid w-75 d-flex align-items-center justify-content-center our-skills-icon-container">
          <div className="container-fluid  d-flex align-items-center justify-content-center our-skills-icon">
            <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-img">
              <i className="fa fa-cogs fa-2x icon"></i>
            </div>
            <div>
              <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-header">
                Development
              </div>
              <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-desc">
                Working side by side with clients, we create products which bring their visions to life. Anything is possible.
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon">
            <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-img">
              <i className="fas fa-chart-bar fa-2x icon"></i>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-header">
                Design
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-desc">
              Working side by side with clients, we create products which bring their visions to life. Anything is possible.
            </div>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon">
            <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-img">
              <i className="far fa-lightbulb fa-2x icon"></i>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-header">
                Consultancy
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center our-skills-icon-desc">
              Working side by side with clients, we create products which bring their visions to life. Anything is possible.
            </div>
          </div>
        </div>
        <div className="w-100 container-fluid d-flex align-items-center justify-content-center ours-skills-btn-container">
          <div className=" container d-flex align-items-center justify-content-center our-skills-btn">
            Check Out Our Skills
          </div>
        </div>
      </div>
    )
}

export default OurSkills;