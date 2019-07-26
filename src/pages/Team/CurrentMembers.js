import React from 'react';
import HexagonIcon from '../../components/HexagonIcon';

const CurrentMembers = () => {
  return (
    <div className="container-fluid position-relative d-flex flex-column align-items-center justify-content-center current-members-container">

      {/* = = = = = = = = = = = = = = = SECTION HEADER = = = = = = = = = = = = = = = */}
      <div className="container-fluid position-absolute d-flex flex-column align-items-center justify-content-center current-members-header">
        <div className="container-fluid text-center current-members-title">
          Current Team
        </div>
        <div className="container-fluid text-center current-members-subtitle">
          Students with a hunger for innovation.
        </div>
      </div>

      {/* = = = = = = = = = = = = = = = HEX CONTAINER = = = = = = = = = = = = = = = */}
      <div className="container-fluid d-flex flex-row align-items-center justify-content-around current-members-hex-container">
        <HexagonIcon name="Allan Krasner" role="Developer.html" desc=""/>
        <HexagonIcon name="Jackson Byrnes" role="Designer.psd" desc="lorem ipsum delorum" />
        <HexagonIcon name="Niaz Ahmed" role="Developer.js" desc="Graduate student specialzing in React, React-Native, and Node.JS. He's changing the world one syntax error at a time." />
      </div>

      {/* = = = = = = = = = = = = = = = HEX CONTAINER = = = = = = = = = = = = = = = */}
      <div className="container-fluid d-flex flex-row align-items-center justify-content-around current-members-hex-container-two">
        <HexagonIcon name="Anna Marinina" role="Designer.js" desc="lorem ipsum delorum" />
        <HexagonIcon name="Guillermo Schneider" role="Designer" desc="lorem ipsum delorum" />
        <HexagonIcon name="Daniel Berekdar" role="Designer.unity" desc="lorem ipsum delorum" />
      </div>

      {/* = = = = = = = = = = = = = = = HEX CONTAINER = = = = = = = = = = = = = = = */}
      <div className="container-fluid d-flex flex-row align-items-center justify-content-around current-members-hex-container">
        <HexagonIcon name="Sammy Geller" role="Developer.js" desc="From the mean streets of the Upper East Side, a computer science major with minors in math and economics. Yes, he wears glasses." />
        <HexagonIcon name="Sven Nussgruber" role="Developer.js" desc="Fullstack developer focusing on ReactJS, Django and where to find the best breakfast sandwich in NYC." />
        <HexagonIcon name="Chinmay Joshi" role="Designer" desc="lorem ipsum delorum" />
      </div>
 
    </div>
  )
}

export default CurrentMembers;