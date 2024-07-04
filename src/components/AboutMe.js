import React from 'react';
import '../styles/app.css'
import aboutMePic from '../assets/aboutMePic.jpeg'

function AboutMe(){
    return (
        <div class = 'aboutMe'> 
            <div> 
                <p> Welcome to my website! This is me speaking. I am a... </p> 
                <ul>
                    <li> 
                        Year: Rising Sophmore
                    </li>
                    <li> 
                        Studying: Bachelors of Engineering in Computer Engineering
                    </li>
                    <li> 
                        At: Villanova University
                    </li>
                    <li> 
                        Interested In: Full-stack applications, artificial intelligence, cybersecurity. 
                    </li>
                    <li> 
                        From: Ethnically from Sudan, born right outside Philadelphia, Pennsylvania!
                    </li>
                </ul>
                <p> Feel free to contact me through the link in the header! Check out the rest of my page for my experience, projects, and resume! </p>
            </div>
            <img className = 'picture' src = {aboutMePic} alt = 'aboutMePic'/> 
        </div>

        
    );
}

export default AboutMe;