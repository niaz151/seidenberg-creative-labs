import React from 'react';

const TeamHeader = () => {
  return(
    <div className="container-fluid position-relative d-flex flex-row align-items-center justify-content-center team-header-container">
      
       {/* = = = = = = = = = = = HEADER = = = = = = = = = = =  */}
       <div className="container-fluid position-absolute d-flex flex-column align-items-center justify-content-center team-header">
        <div className="container-fluid text-center team-header-title">
          Committed Students
        </div>
        <div className="container-fluid text-center team-header-subtitle">
          Determinaton. Creativity. Stack Overflow.
        </div>
      </div>

      <div className="container-fluid d-flex flex-row align-items-center justify-content-center team-header-content-wrap">

        {/* = = = = = = = = = IMAGE DIV = = = = = = = = = */}
        <div className="container-fluid d-flex align-items-center justify-content-center team-header-img-wrap">
          <img src={require('../../images/team.png')} className="team-header-img" />
        </div>
       
        {/* = = = = = = = = = TEXT DIV = = = = = = = = = */}
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center team-header-text-wrap">
          Motivated students led by experienced seniors and alumni to make professional and impressive products. Each team 
          adds its own unique flavor to the project, making for a constantly evolving group of serious developers.
        </div>
      </div>

    </div>
  )
}

export default TeamHeader;