import React from 'react';
import '../styles/app.css';

function Portfolio(){
    return(
        <div className = "portfolio"> 
            <p> Coming Soon! </p>
            <p> For now, check out my <a style = {{textDecoration: 'underline', color: 'black'}} href = 'https://github.com/ahmedalaminn?tab=repositories' target = '_blank' rel = "noopener norefferer"> GitHub</a> repositories </p> 
        </div>
    );
}

export default Portfolio;
