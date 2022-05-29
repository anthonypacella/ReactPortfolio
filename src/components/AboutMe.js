import React from 'react';
import '../../src/assets/styles/style.css'
import headshot from '../assets/images/Headshot.png'

function aboutMe() {
    return (
    <section id="aboutme">
        <div className = "section-title">
            <h2>About Me</h2>
            <div className = "aboutTitleContainer">
                <h3 className = "aboutTitle"> Hello! My name is Anthony Pacella. </h3>
            </div>
            
            <p className = "aboutMeText">I am a 28 year old living in Ohio, hoping to becoming a professional web developer in the near future. Some of my favorite things to do are spend time with my fiancè and dog and play golf, darts, and pub trivia. I currently work as an HVAC engineer for a HVAC construction company. 
            </p>
            <h2>Skills</h2>
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
            <img src= {headshot} class="img-fluid rounded circle headshot" alt=""></img>
            </div>

        </div>
    </section>
    );
}

export default aboutMe;