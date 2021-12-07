import React from 'react';
import SideBar from './components/layout/SideBar';
import Header from './components/layout/Header';
import Contain from './components/layout/Contain';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="contain">
          <Contain />
        </div>
      </div>
    </div>
  );
}

export default App;
