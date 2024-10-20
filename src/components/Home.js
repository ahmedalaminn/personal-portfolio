import React from 'react';
import '../app.css'
import linkedinLogo from '../assets/linkedin-logo.png'
import githubLogo from '../assets/github-logo.png'

function Home(){
    return (
        <div className="home"> 
            <p>Welcome! Scroll down for more :) </p>
            <div className="logos-container"> 
                <a href="https://www.linkedin.com/in/ahmedalaminn" target="_blank" rel="noopener noreferrer"><img className="logos" src={linkedinLogo} alt="LinkedIn Logo" /></a>
                <a href="https://github.com/ahmedalaminn" target="_blank" rel="noopener noreferrer"><img className="logos" src={githubLogo} alt="GitHub Logo" /></a>
            </div> 
        </div>
    );
}

export default Home;
