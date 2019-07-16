import React,{Fragment} from 'react';

const Research = () => {
  return(
    <div className="research-container">
      <div className="research-heading">
        <div className="research-title">
          Design
        </div>
        <div className='research-subtitle'>
          Students with a hunger for innovation
        </div>
      </div>
      <div className='research-items'>
        <div className="research-item">
          <div className="research-icon-header-wrap">
            <div className="research-icon-wrap">
            <i class="fas fa-user-friends research-icon"></i>
            </div>
            <div className="research-icon-header">
              Empathize
            </div>  
          </div>
          <div className="research-icon-desc">
           
          </div>
        </div>
        <div className="research-item">
          <div className="research-icon-header-wrap">
            <div className="research-icon-wrap">
              <i class="fas fa-project-diagram research-icon"></i>
            </div>
            <div className="research-icon-header">
              Define
            </div>  
          </div>
          <div className="research-icon-desc">
           
          </div>
        </div>
        <div className="research-item">
          <div className="research-icon-header-wrap">
            <div className="research-icon-wrap">
              <i class="far fa-lightbulb research-icon"></i>
            </div>
            <div className="research-icon-header">
              Ideate
            </div>  
          </div>
          <div className="research-icon-desc">
           
          </div>
        </div>
        <div className="research-item">
          <div className="research-icon-header-wrap">
            <div className="research-icon-wrap">
              <i class="fas fa-code research-icon"></i>
            </div>
            <div className="research-icon-header">
              Prototype
            </div>  
          </div>
          <div className="research-icon-desc">
           
          </div>
        </div>
        <div className="research-item">
          <div className="research-icon-header-wrap">
            <div className="research-icon-wrap">
              <i class="fas fa-check research-icon"></i>
            </div>
            <div className="research-icon-header">
              Test
            </div>  
          </div>
          <div className="research-icon-desc">
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research;