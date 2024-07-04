import React, { useRef } from 'react';
import './styles/app.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';

function App() {
  const scrollToRef = ref => {
    ref.current.scrollIntoView( {behavior: 'smooth', block: 'start'});
  };
  const home = useRef(null);
  const aboutMe = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);
  
  return (
    
    <div className="App">
      <Header scrollToRef = {scrollToRef} home = {home} aboutMe = {aboutMe} portfolio = {portfolio} contact = {contact} />

      <div ref = {home} className = 'section'> 
      <Home/>
      </div>
      <hr className="section-divider" />

      <div ref = {aboutMe} className = 'section'> 
      <AboutMe/>
      </div>
      <hr className="section-divider" />

      <div ref = {portfolio} className = 'section'>
      <Portfolio/>
      </div>
      <hr className="section-divider" />

      <div ref = {contact} className = 'section'>
      <Contact/>
      </div>
      

    </div>
  );
}

export default App;
