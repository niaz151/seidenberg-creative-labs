import React, {Fragment} from 'react';
import Header from '../../components/Header';
import Hero from './Hero';
import StudentDevs from './StudentDevs';
import OurSkills from './OurSkills';


const Home = () => {
  return(
    <Fragment>
      <Header/>
      <Hero/>
      <StudentDevs/>
      <OurSkills/>
    </Fragment>
  )
}

export default Home;