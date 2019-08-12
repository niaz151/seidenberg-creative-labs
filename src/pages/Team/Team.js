import React,{Fragment} from 'react';
import Header from '../../components/Header';
import TeamHeader from './TeamHeader';
import CurrentMembers from './CurrentMembers';

const Team = () => {
  return(
    <Fragment>
      <Header/>
      <TeamHeader/>
      <CurrentMembers/>
    </Fragment>
  )
}

export default Team;