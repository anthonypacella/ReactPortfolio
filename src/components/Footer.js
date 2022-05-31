import React from 'react';
import '../../src/assets/styles/style.css';
import { ContactData } from './ContactData';

function Footer() {
return (
    <div className = 'footer'>
            <ul className = 'footerList'>
                {ContactData.map((val,key) => {
                    return (
                        <div className = 'footerLink'>
                            <li key={key} onClick={()=> {window.location.href = val.link}}>
                            {" "}
                            <div id='icon'>{val.icon}</div>{" "}
                        </li>
                        </div>
                    );
                })}
            </ul>
    </div>
);
}

export default Footer;