import React from 'react';
import '../app.css';
import resume from '../assets/Ahmed_Alamin_Resume.pdf'; 

function Header({scrollToRef, home, aboutMe, portfolio, contact}){

    return(
        <nav className = 'header'> 
            <a className = "name"> Ahmed Alamin </a>
                <ul> 
                    <li> 
                        <a href = '#home' onClick = {() => scrollToRef(home)} className = "links"> Home </a> 
                    </li>
                    <li>
                        <a href = '#aboutMe' onClick = {() => scrollToRef(aboutMe)} className = "links"> About Me </a>
                    </li>
                    <li> 
                        <a href = '#portfolio' onClick = {() => scrollToRef(portfolio)} className = "links"> Portfolio </a>
                    </li>
                    <li>
                        <a href = {resume} target = "_blank" rel = "noopener noreferer" className = "links"> Resume </a>
                    </li>
                    <li>
                        <a href = '#contact' onClick = {() => scrollToRef(contact)} className = "links"> Contact </a>
                    </li>
                </ul>
        </nav>
    );
} 

export default Header;