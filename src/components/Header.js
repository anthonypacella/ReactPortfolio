import React from 'react';
import '../../src/assets/styles/style.css'
import { Navigation } from './Navigation'
import { NavLink } from "react-router-dom";
import { Resume } from './Resume';
import resume from '../assets/Resume.pdf';

function sideBar() {
    return (
        <div className="sidenav">
            <ul className = 'sidenavList'>
                {Navigation.map((val,key) => {
                    return (
                        <li key={key} className = 'row' id = {window.location.pathname === val.link ? "active" : ""}>
                            <NavLink className = 'row' to={val.link}>
                            {" "}
                            <div id='navicon'>{val.icon}</div>{" "}
                            <div id='title'>{val.title}</div>
                            </NavLink>
                        </li>
                    );
                })}
                <li className = 'row' onClick = {() => window.location.href = resume}>
                    <div id='navicon'>{Resume[0].icon}</div>{" "}
                    <div id='title'>{Resume[0].title}</div>
                </li>
            </ul>
        </div>
    );
}
export default sideBar;