import React, { useRef } from 'react';
import './styles/app.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';

function App() {

  const home = useRef(null);
  const aboutMe = useRef(null);
  
  return (
    
    <div className="App">
      <Header/>

      <div ref = {home}> 
      <Home/>
      </div>

      <div ref = {aboutMe}> 
      <AboutMe/>
      </div>

    </div>
  );
}

export default App;
