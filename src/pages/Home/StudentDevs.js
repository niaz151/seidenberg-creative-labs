import React from 'react';
import CurvedBottom from '../../components/CurvedBottom';

const StudentDevs = () => {

  return(
    <div className="container-fluid position-relative d-flex home-stdev">
      <div className="container-fluid d-flex h-100 w-100 home-stdev-container home-stdev-flex-control">
        <div className="container-fluid d-flex flex-column align-items-center home-stdev-img-container">
          <div className="container-fluid h-25 d-flex align-items-center justify-content-center home-stdev-alert">
            <span>
              alert ("
            </span>
            <span className="std-alert-quote">
              Run By Students
            </span>
            <span>
              ");
            </span>
          </div>
          <div className="container-fluid h-50 w-100 d-flex align-items-center justify-content-center">
            <img src={require('../../images/laptop.png')} className="home-stdev-img" />
          </div>
        </div>
        <div className='container-fluid d-flex flex-column align-items-center justify-content-center home-stdev-text-container'>
          <div className="container-fluid d-flex flex-column justify-content-between align-items-center home-stdev-text-subcontainer">
            <div className='std-text-header align-items-end d-flex'>
                Student Developers 
            </div>
            <div className='std-text std-text-p1 d-flex align-items-center justify-content-center'>
                Seidenberg Creative Labs takes pride in the fact that it is run by students. 
                It brings skilled graduate and undergraduate students together to work on professional 
                products. Starting in their sophomore year, student developers are managed by experienced 
                seniors and alumni, who guide them unto becoming experienced professionals.
            </div>
            <div className='std-text std-text-p2'>
                Through Creative Labs, students gain real world experience which prepares them for internships and 
                full-time jobs after graduation. Some have even moved on to form their own startups!
            </div>  
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default StudentDevs;

