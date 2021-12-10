import React, {useState} from 'react';
import SideBar from './components/layout/SideBar';
import Header from './components/layout/Header';
import Contain from './components/layout/Contain';
import './App.css';


function App() {
  const [hidden, setHidden] = useState(false);
  const hiddenSideBar = (param:boolean) => {
    setHidden(param);
  }
  const showSideBar = () => {
    setHidden(false);
  }

  let styleSideBar : object = {};
  let styleMain : object = {};
  let styleIcon : object = {};

  if (hidden === true) {
    styleSideBar = {display: 'none'};
    styleMain = {
      width: '100%'
    };
    styleIcon = {opacity: "0.5"};
  }

  return (
    <div className="App">
      <div style={styleIcon} className="show-sidebar" onClick={showSideBar}>
        <i className="fas fa-bars color-white"></i>
      </div>
      <div style={styleSideBar} className="side-bar">
        <SideBar hidden={hiddenSideBar} />
      </div>
      <div style={styleMain} className="main">
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
