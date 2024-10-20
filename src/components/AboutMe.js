import React from 'react';
import '../app.css'
import aboutMePic from '../assets/aboutMePic.jpeg'

function AboutMe(){
    return (
        <div class = 'aboutMe'> 
            <div> 
                <p> Here are some details about me: </p> 
                <ul>
                    <li> 
                        Year: Sophomore
                    </li>
                    <li> 
                        Pursuing: Bachelors of Science in Computer Science
                    </li>
                    <li> 
                        At: Georgia Institute of Technology
                    </li>
                    <li> 
                        Interested In: Full-stack applications and machine learning.
                    </li>
                    <li> 
                        From: Ethnically from Sudan, born right outside Philadelphia, PA.
                    </li>
                </ul>
            </div>
            <img className = 'picture' src = {aboutMePic} alt = 'aboutMePic'/> 
        </div>

        
    );
}

export default AboutMe;