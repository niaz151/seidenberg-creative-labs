import React,{Fragment} from 'react';
import Header from '../../components/Header';
import Development from './Developmnent';
import Design from './Design';
import Consultancy from './Consultancy';

const Skills = () => {
  return(
    <Fragment>
      <Header/>
      <Development/>      
      <Design/>
      <Consultancy/>
    </Fragment>
  )
}

export default Skills;