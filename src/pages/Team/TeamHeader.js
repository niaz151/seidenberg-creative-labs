import React from 'react';

const TeamHeader = () => {
  return(
    <div className="container-fluid d-flex flex-row align-items-center justify-content-center team-header-container">
      
      {/* = = = = = = = = = IMAGE DIV = = = = = = = = = */}
      <div className="container-fluid team-header-img-div">
        <img src={require('../../images/team.png')} className="team-header-img" />
      </div>

      {/* = = = = = = = = = TEXT DIV = = = = = = = = = */}
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center team-header-text-div">
        <div className="container-fluid text-center d-flex flex-column align-items-center justify-content-center team-header-top-text">
          Committed Students
        </div>
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center team-header-bottom-text">
          Motivated students led by experienced seniors and alumni to make professional and impressive products. Each team 
          adds its own unique flavor to the project, making for a constantly evolving group of serious developers.
        </div>
      </div>

    </div>
  )
}

export default TeamHeader;