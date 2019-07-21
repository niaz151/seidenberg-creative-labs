import React from 'react';

const Development = () => {
  return(
    <div className="container-fluid position-relative d-flex border-dark flex-column align-items-center justify-content-around development-container">

      {/* = = = = = = = = = = = HEADER = = = = = = = = = = =  */}


      <div className="container-fluid position-absolute d-flex flex-column align-items-center justify-content-center development-header">
        <div className="container-fluid text-center development-title">
          Development
        </div>
        <div className="container-fluid text-center development-subtitle">
          We develop so fast. So well. So creatively.
        </div>
      </div>

       {/* = = = = = = = = = = = ITEM CONTAINER = = = = = = = = = = =  */}

       
      <div className="container-fluid d-flex flex-row align-items-center justify-content-center development-items">

         {/* = = = = = = = = = = = DEVELOPMENT ITEM = = = = = = = = = = =  */}

        <div className="container-fluid d-flex flex-column align-items-center justify-content-center development-item ">
          <div className="container-fluid d-flex align-items-center justify-content-center development-item-img-wrap">
            <img src={require('../../images/dev_computer_icon.png')} class="development-computer-icon" alt=""/>
          </div>
          <div className="container-fluid d-flex flex-column align-items-center justify-content-center development-item-text-wrap">
            <div className="container-fluid d-flex text-center  align-items-center justify-content-center development-item-title">
              Websites
            </div>
            <div className="container-fluid d-flex text-center  align-items-start justify-content-center development-item-desc">
             Using HTML5, CSS3, Ruby, Javascript, and other modern web technologies we deliver exciting online media.
            </div>
          </div>
        </div>

         {/* = = = = = = = = = = = DEVELOPMENT ITEM = = = = = = = = = = =  */}

        <div className="container-fluid d-flex flex-column align-items-center justify-content-center development-item ">
        <div className="container-fluid d-flex align-items-center justify-content-center development-item-img-wrap">
           <img src={require('../../images/dev_phone_icon.png')} class="development-phone-icon" alt=""/>
          </div>
          <div className="container-fluid d-flex flex-column align-items-center justify-content-center development-item-text-wrap">
            <div className="container-fluid d-flex text-center  align-items-center justify-content-center development-item-title">
              Mobile Apps
            </div>
            <div className="container-fluid d-flex text-center  align-items-start justify-content-center development-item-desc">
              We like to stay on top of modern trends. Whether it's iOS, Android, or Windows Phone, our developers have it covered.
            </div>
          </div>

        {/* = = = = = = = = = = = DEVELOPMENT ITEM = = = = = = = = = = =  */}

        </div><div className="container-fluid d-flex flex-column align-items-center justify-content-center development-item ">
          <div className="container-fluid d-flex align-items-center justify-content-center development-item-img-wrap">
            <img src={require('../../images/dev_laptop_icon.png')} class="development-laptop-icon" alt=""/>
          </div>
          <div className="container-fluid w-100 d-flex  text-center flex-column align-items-center justify-content-center development-item-text-wrap">
            <div className="container-fluid d-flex align-items-center justify-content-center development-item-title">
              Software
            </div>
            <div className="container-fluid w-100 d-flex text-center align-items-start justify-content-center development-item-desc">
              We made Microsoft Word. Bill Gates then stole it from one of our developers on a drunken night out.
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Development;