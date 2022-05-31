import React from 'react';
import '../../src/assets/styles/style.css'
import headshot from '../assets/images/Headshot.png'

function aboutMe() {
    return (
        <div className = "aboutme section-title bg-dark">
            <div className = 'aboutMeContainer'>
            <h2 className = 'bg-dark aboutTitle'>About Me</h2>
                <div className = "aboutTitleContainer bg-dark">
                    <h3 className = "aboutTitle"> Hello! My name is Anthony Pacella. </h3>
                </div>
            
            <p className = "aboutMeText">I am a 28 year old living in Ohio, hoping to becoming a professional web developer in the near future. Some of my favorite things to do are spend time with my fiancèe and dog and play golf, darts, and pub trivia. I currently work as an HVAC engineer for a HVAC construction company. 
            </p>
            <h2 className = 'aboutTitle'>Skills</h2>
            <div>
                <div>
                    <ul className = 'skillsList'>
                        <li>
                        <h3>HTML</h3>                         
                        </li>
                        <li>
                        <h3>CSS</h3>                    
                        </li>
                        <li>
                        <h3>JavaScript (Node, React)</h3>                       
                        </li>
                        <li>
                        <h3>Databases (SQL, MongoDB)</h3>   
                        </li>
                    </ul>
                </div>                 
            </div>
            <div className = 'headshotContainer'>
            <img src= {headshot} class="circle headshot" alt=""></img>
            </div>
            </div>
        </div>
    );
}

export default aboutMe;