import React from 'react';

const Consultancy = () => {
  return(
    <div className="consultancy-container">
      <div className="consultancy-heading">
        <div className="consultancy-title">
          Consultancy
        </div>
        <div className="consultancy-subtitle">
          Somtimes you just need a push in the right direction
        </div>
      </div>
      <div className="consultancy-items">
          <div className="consultancy-img-wrap">
            <img src={require('../../images/phone.png')} className="consultancy-img"/>
          </div>
          <div className="consultancy-text-wrap">
            <div className="consultancy-text-p1">
              The first stage of a product is the most important one. If you have an idea for a project 
              but aren't sure how to make it work, we can provide guidance to solidify those ideas. We 
              will provide a realistic view of the field, explain challenges and alternate solutions, 
              highlight technologies that will best fit the job, and offer you a testing ground for your product.
            </div>
            <div className="consultancy-text-p2">
             If you need advice on anything technology related, come on in. The first meeting is free!  
            </div>
          </div>
      </div>    
    </div>
  )
}

export default Consultancy;