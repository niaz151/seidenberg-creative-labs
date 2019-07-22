import React,{Fragment} from 'react';
import Header from '../../components/Header';

const Contact = () => {
  return(
    <>
      <Header/>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center contact-container">
        
        {/* = = = = = = = = = = = HEADER = = = = = = = = = = =  */}
        <div className="container-fluid position-absolute d-flex flex-column align-items-center justify-content-center contact-header">
          <div className="container-fluid text-center contact-title">
            Contact
            </div>
          <div className="container-fluid text-center contact-subtitle">
            We accept pigeon mail.
          </div>
        </div>

        {/* = = = = = = = = = = = ITEM CONTAINER = = = = = = = = = = =  */}
        <div className="container-fluid d-flex flex-row align-items-center justify-content-start contact-items">

          {/* = = = = = = ITEM   = = = = = = */}
          <div className="container-fluid d-flex flex-column align-items-center justify-content-around contact-item">
            <div className="container-fluid d-flex align-items-center justify-content-center contact-img-wrap">
              <i class="fas fa-envelope contact-img"></i>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center contact-text-wrap">
              scl@gmail.com
            </div>
          </div>

          {/* = = = = = = ITEM   = = = = = = */}
          <div className="container-fluid d-flex flex-column align-items-center justify-content-around contact-item">
            <div className="container-fluid d-flex align-items-center justify-content-center contact-img-wrap">
             <i class="fas fa-mobile contact-img"></i>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center contact-text-wrap">
              0-123-456-7890
            </div>
          </div>

          {/* = = = = = = ITEM   = = = = = = */}
          <div className="container-fluid d-flex flex-column align-items-center justify-content-around contact-item">
            <div className="container-fluid d-flex align-items-center justify-content-center contact-img-wrap">
              <i class="fas fa-map-marker-alt contact-img"></i>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center contact-text-wrap">
              163 Williams St 2nd Floor
            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Contact;