import React from 'react';
import '../../src/assets/styles/style.css'
import { Navigation } from './Navigation'
import resume from '../assets/Resume.pdf';

function sideBar() {
    return (
        <div className="sidenav">
            <ul className = 'sidenavList'>
                {Navigation.map((val,key) => {
                    return (
                        <li key={key} className = 'row' id = {window.location.pathname === val.link ? "active" : ""}onClick={()=> {
                            if (val.title === 'Resume') {
                                window.location.href = resume;
                            }
                            else {
                                window.location.pathname = val.link;
                            }
                        }}>
                            {" "}
                            <div id='navicon'>{val.icon}</div>{" "}
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default sideBar;