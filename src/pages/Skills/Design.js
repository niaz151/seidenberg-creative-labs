import React from 'react';
import DesignIcon from '../../components/DesignIcon';

const Design = () => {
  return (
    <div className="container-fluid position-relative d-flex flex-column align-items-center justify-content-center design-container">

      {/* = = = = = = = = = = = HEADER = = = = = = = = = = =  */}

      <div className="container-fluid position-absolute d-flex flex-column align-items-center justify-content-center design-header">
        <div className="container-fluid text-center design-title">
          Design
          </div>
        <div className="container-fluid text-center design-subtitle">
          Students with a hunger for innovation.
          </div>
      </div>

      {/* = = = = = = = = = = = ITEM CONTAINER = = = = = = = = = = =  */}
      <div className="container-fluid d-flex flex-row align-items-center justify-content-start design-items">
        <DesignIcon class="fas fa-user-friends design-icon" name="Empathize" />
        <DesignIcon class="fas fa-project-diagram design-icon" name="Define" />
        <DesignIcon class="far fa-lightbulb design-icon" name="Ideate" />
        <DesignIcon class="fas fa-code design-icon" name="Prototype" />
        <DesignIcon class="fas fa-check design-icon" name="Test" />
      </div>
    </div>
  )
}

export default Design;