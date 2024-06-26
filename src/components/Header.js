import React from 'react';
import '../styles/app.css'

function Header(){
    return(
        <nav className = 'header'> 
            <a className = "name"> Ahmed Alamin </a>
                <ul> 
                    <li> 
                        <a href = '/Home' className = "links"> Home </a> 
                    </li>
                    <li>
                        <a href = 'AboutMe' className = "links"> About Me </a>
                    </li>
                    <li> 
                        <a href = 'Portfolio' className = "links"> Portfolio </a>
                    </li>
                    <li>
                        <a href = 'Resume' className = "links"> Resume </a>
                    </li>
                    <li>
                        <a href = 'Contact' className = "links"> Contact </a>
                    </li>
                </ul>
        </nav>
    );
} 

export default Header;