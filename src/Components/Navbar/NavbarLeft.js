import React from 'react';
import NavigationLeft from "./NavigationLeft"
import Copyright from "./Copyright"

const NavbarLeft = () => {
    return (
        <div className='navbar-left'>
            <NavigationLeft />
            <Copyright />
        </div>
    );
};

export default NavbarLeft;