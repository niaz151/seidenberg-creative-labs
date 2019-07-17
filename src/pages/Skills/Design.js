import React,{Fragment} from 'react';

const Design = () => {
  return(
    <div className="design-container">
      <div className="design-heading">
        <div className="design-title">
          Design
        </div>
        <div className='design-subtitle'>
          Students with a hunger for innovation
        </div>
      </div>
      <div className='design-items'>
        <div className="design-item">
          <div className="design-icon-header-wrap">
            <div className="design-icon-wrap">
            <i class="fas fa-user-friends design-icon"></i>
            </div>
            <div className="design-icon-header">
              Empathize
            </div>  
          </div>
          <div className="design-icon-desc">
           
          </div>
        </div>
        <div className="design-item">
          <div className="design-icon-header-wrap">
            <div className="design-icon-wrap">
              <i class="fas fa-project-diagram design-icon"></i>
            </div>
            <div className="design-icon-header">
              Define
            </div>  
          </div>
          <div className="design-icon-desc">
           
          </div>
        </div>
        <div className="design-item">
          <div className="design-icon-header-wrap">
            <div className="design-icon-wrap">
              <i class="far fa-lightbulb design-icon"></i>
            </div>
            <div className="design-icon-header">
              Ideate
            </div>  
          </div>
          <div className="design-icon-desc">
           
          </div>
        </div>
        <div className="design-item">
          <div className="design-icon-header-wrap">
            <div className="design-icon-wrap">
              <i class="fas fa-code design-icon"></i>
            </div>
            <div className="design-icon-header">
              Prototype
            </div>  
          </div>
          <div className="design-icon-desc">
           
          </div>
        </div>
        <div className="design-item">
          <div className="design-icon-header-wrap">
            <div className="design-icon-wrap">
              <i class="fas fa-check design-icon"></i>
            </div>
            <div className="design-icon-header">
              Test
            </div>  
          </div>
          <div className="design-icon-desc">
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Design;