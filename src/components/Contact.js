import React from 'react';
import '../styles/app.css';
import linkedinLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';
function Contact(){
    return(
        <div className = 'contact'>
            <footer> 
            <p style = {{fontWeight: 'bold'}}> Let's Get In Touch! </p>
            <a style = {{textDecoration: 'underline', color: 'black'}} href = "mailto:ahmedalamin957@gmail.com" target = '_blank' rel = "noopener norefferer"> Send An Email </a>
            <p> Call & Text Me: 267-968-2802</p>

            <div className="logos-container"> 
                <a href="https://www.linkedin.com/in/ahmedalaminn" target="_blank" rel="noopener noreferrer"><img className="logos" src={linkedinLogo} alt="LinkedIn Logo" /></a>
                <a href="https://github.com/ahmedalaminn" target="_blank" rel="noopener noreferrer"><img className="logos" src={githubLogo} alt="GitHub Logo" /></a>
            </div> 
            </footer>
      </div>
    );
}

export default Contact;