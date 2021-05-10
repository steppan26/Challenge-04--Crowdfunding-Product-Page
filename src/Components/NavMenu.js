import React from 'react';
import './NavMenu.css';

const NavMenu = () =>{

    return(
        <div className="menuWrapper" id="menuIcon">
            <a href="http://localhost:3000/" target="_self" className="push">About</a>
            <a href="http://localhost:3000/" target="_self">Discover</a>
            <a href="http://localhost:3000/" target="_self">Get Started</a>
        </div>
    );
}

export default NavMenu;