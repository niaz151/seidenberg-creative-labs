import React from 'react';
import HexagonIcon from '../../components/HexagonIcon';

const CurrentMembers = () => {
  return (
    <div className="container-fluid position-relative d-flex flex-column align-items-center justify-content-center current-members-container">

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
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
      </div>
      {/* = = = = = = = = = = = = = = = HEX CONTAINER = = = = = = = = = = = = = = = */}
      <div className="container-fluid d-flex flex-row align-items-center justify-content-around current-members-hex-container-two">
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
      </div>
      {/* = = = = = = = = = = = = = = = HEX CONTAINER = = = = = = = = = = = = = = = */}
      <div className="container-fluid d-flex flex-row align-items-center justify-content-around current-members-hex-container">
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
        <HexagonIcon name="Jackson Byrnes" role="Designer" desc="lorem ipsum delorum" />
      </div>

    </div>
  )
}

export default CurrentMembers;