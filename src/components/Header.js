import React from 'react';
import '../../src/assets/styles/style.css'
import { Navigation } from './Navigation'
import { NavLink } from "react-router-dom";

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
            </ul>
        </div>
    );
}
export default sideBar;