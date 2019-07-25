import React,{Fragment} from 'react';
import Header from '../../components/Header';
import TeamHeader from './TeamHeader';
import CurrentMembers from './CurrentMembers';

const Team = () => {
  return(
    <>
      <Header/>
      <TeamHeader/>
      <CurrentMembers/>
    </>
  )
}

export default Team;