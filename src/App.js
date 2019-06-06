import React,{Fragment} from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="d-flex flex-column" style={{height:"1400px"}} >
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
