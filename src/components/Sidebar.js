import React from 'react';
import '../../src/assets/styles/style.css'
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
import { SidebarData } from './SidebarData'
import { ContactData } from './ContactData';
import resume from '../assets/Resume.pdf';

function sideBar() {
    return (
        <div className="sidenav">
            <ul className = 'sidenavList'>
                {SidebarData.map((val,key) => {
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
                            <div id='icon'>{val.icon}</div>{" "}
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            <ul className = 'contactnavList'>
                {ContactData.map((val,key) => {
                    return (
                        <li key={key} className = 'row' onClick={()=> {window.location.href = val.link}}>
                            {" "}
                            <div id='icon'>{val.icon}</div>{" "}
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default sideBar;