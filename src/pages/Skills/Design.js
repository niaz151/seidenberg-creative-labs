import React from 'react';

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

        {/* = = = = =  DESIGN ITEM = = = = =  */}
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center design-item">
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-icon">
            <i class="fas fa-user-friends design-icon"></i>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-text">
            Emphathize
          </div>
        </div>

        {/* = = = = =  DESIGN ITEM = = = = =  */}
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center design-item">
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-icon">
            <i class="fas fa-project-diagram design-icon"></i>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-text">
            Define
          </div>
        </div>

        {/* = = = = =  DESIGN ITEM = = = = =  */}
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center design-item">
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-icon">
            <i class="far fa-lightbulb design-icon"></i>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-text">
            Ideate
          </div>
        </div>
        {/* = = = = =  DESIGN ITEM = = = = =  */}
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center design-item">
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-icon">
            <i class="fas fa-code design-icon"></i>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-text">
            Prototype
          </div>
        </div>

        {/* = = = = =  DESIGN ITEM = = = = =  */}
        <div className="container-fluid d-flex flex-column align-items-center justify-content-around design-item">
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-icon">
            <i class="fas fa-check design-icon"></i>
          </div>
          <div className="container-fluid d-flex align-items-center justify-content-center design-item-text">
            Test
          </div>
        </div>
      </div>

    </div>
  )
}

export default Design;