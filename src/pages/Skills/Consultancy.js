import React from 'react'

const Consultancy = () => {
  return(
    <div className="container-fluid position-relative d-flex flex-column align-items-center justify-content-center consultancy-container">

      {/* = = = = = = = = = = = HEADER = = = = = = = = = = =  */}
      <div className="container-fluid position-absolute d-flex flex-column align-items-center justify-content-center consultancy-header">
      
        {/* = = = = = = = = = TITLE = = = = = = = = = */}
        <div className="container-fluid text-center consultancy-title">
          Consultancy
          </div>

        {/* = = = = = = = = = SUBTITLE = = = = = = = = = */}
        <div className="container-fluid text-center consultancy-subtitle">
          Sometimes you just need a push in the right direction.
        </div>

      </div>


      {/* = = = = = = = = = = = CONTAINER = = = = = = = = = = =  */}
      <div className="container-fluid d-flex flex-row align-items-center justify-content-center consultancy-items">
       
        {/* = = = = = = = = = IMAGE DIV = = = = = = = = = */}
        <div className="container-fluid d-flex align-items-center justify-content-center consultancy-img-wrap">
          <img src={require('../../images/phone.png')} className="consultancy-img" alt=""/>
        </div>

 
        <div className="container-fluid d-flex flex-column align-items-center consultancy-text-wrap">
          
          {/* = = = = = = = = = TEXT DIV = = = = = = = = = */}
          <div className="container-fluid d-flex align-items-center justify-content-start consultancy-text-p1">
            The first stage of a product is the most important one. If you have an idea for a project but aren't sure how to
             make it work, we can provide guidance to solidify those ideas. We will provide a realistic view of the field, 
             explain challenges and alternate solutions, highlight technologies that will best fit the job, and offer you a 
             testing ground for your product.
          </div>

          {/* = = = = = = = = = TEXT DIV = = = = = = = = = */}
          <div className="container-fluid d-flex align-items-center justify-content-start consultancy-text-p2">
            If you need advice on anything technology related, come on in. The first meeting is free!
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Consultancy;