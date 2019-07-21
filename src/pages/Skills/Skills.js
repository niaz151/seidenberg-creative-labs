import React,{Fragment} from 'react';
import Header from '../../components/Header';
import Development from './Developmnent';
import Design from './Design';
import Consultancy from './Consultancy';

const Skills = () => {
  return(
    <>
      <Header/>
      <Development/>      
      <Design/>
      <Consultancy/>
    </>
  )
}

export default Skills;