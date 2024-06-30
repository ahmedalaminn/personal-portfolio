import React from 'react';
import '../styles/app.css'

function Header(){

    const scrollToRef = ref => {
        ref.current.scrollIntoView( {behavior: 'smooth', block: 'start'});
    };

    const home = React.createRef();
    const aboutMe = React.createRef();
    const portfolio= React.createRef();
    const resume= React.createRef();    
    const contact = React.createRef();
    return(
        <nav className = 'header'> 
            <a className = "name"> Ahmed Alamin </a>
                <ul> 
                    <li> 
                        <a href = 'Home' onClick = {() => scrollToRef(home)} className = "links"> Home </a> 
                    </li>
                    <li>
                        <a href = 'AboutMe' onClick = {() => scrollToRef(aboutMe)} className = "links"> About Me </a>
                    </li>
                    <li> 
                        <a href = 'Portfolio' onClick = {() => scrollToRef(portfolio)} className = "links"> Portfolio </a>
                    </li>
                    <li>
                        <a href = 'Resume' onClick = {() => scrollToRef(resume)} className = "links"> Resume </a>
                    </li>
                    <li>
                        <a href = 'Contact' onClick = {() => scrollToRef(contact)} className = "links"> Contact </a>
                    </li>
                </ul>
        </nav>
    );
} 

export default Header;