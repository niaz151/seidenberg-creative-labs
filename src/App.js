import React,{Fragment} from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column" style={{height:"1800px"}} >
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
