import React from 'react';

class CurvedBottom extends React.Component {

    render(){
        let color = this.props.color
        return(
            <svg className="position-absolute fixed-bottom curved-bottom" height="10%" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                 <path fill={color} d="M0 0 C50 100 50 100 100 0  L100 100 0 100" stroke-width="0"></path>
            </svg>
        )
    }
  
}

export default CurvedBottom;
