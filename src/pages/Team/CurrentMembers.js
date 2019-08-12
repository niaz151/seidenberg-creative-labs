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
      <div className="container-fluid d-flex flex-row align-items-start justify-content-around current-members-hex-container">
        <HexagonIcon name="Allan Krasner" role="Project Manager" desc="Born and raised in Brooklyn, he specializes in front end and helps with back-end. He has a talent for talking to people. His secret weapon is his goatee." />
        <HexagonIcon name="Jackson Byrnes" role="Team Lead / Designer" desc="Designer centered around UX and VR.  I get my best ideas at food trucks or Stack Overflow. Love Island is the best reality show out there." />
        <HexagonIcon name="Niaz Ahmed" role="Team Lead / Full Stack Developer" desc="Fullstack developer specialzing in React, React-Native, and Node. He's changing the world one syntax error at a time and sending 2 am Slack notifications." />
      </div>

      {/* = = = = = = = = = = = = = = = HEX CONTAINER = = = = = = = = = = = = = = = */}
      <div className="container-fluid d-flex flex-row align-items-start justify-content-around current-members-hex-container-two">
        <HexagonIcon name="Anna Marinina" role="Team Lead / Front End Developer" desc="Our resident crazy cat lady, she knows as many languages as she has cats. Her passion for coding is rivaled only by her desire to become a cheese connoisseur." />
        <HexagonIcon name="Guillermo Schneider" role="VR Developer" desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
        <HexagonIcon name="Daniel Berekdar" role="Back End Developer" desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " />
      </div>

      {/* = = = = = = = = = = = = = = = HEX CONTAINER = = = = = = = = = = = = = = = */}
      <div className="container-fluid d-flex flex-row align-items-start justify-content-around current-members-hex-container current-members-hex-container-three">
        <HexagonIcon name="Sammy Geller" role="Back End Developer" desc="From the mean streets of the Upper East Side, a computer science major with minors in math and economics. Yes, he wears glasses." />
        <HexagonIcon name="Sven Nussgruber" role="Developer" desc="Fullstack developer focusing on ReactJS, Django and where to find the best breakfast sandwich in NYC." />
        <HexagonIcon name="Chinmay Joshi" role="Designer" desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " />
      </div>
 
    </div>
  )
}

export default CurrentMembers;