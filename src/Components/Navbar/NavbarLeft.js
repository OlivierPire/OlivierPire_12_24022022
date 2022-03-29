import React, { ReactElement } from 'react';
import NavigationLeft from "./NavigationLeft"
import Copyright from "./Copyright"

/**
 * Return NavigationLeft and Copyright
 * @returns { ReactElement } NavigationLeft and Copyright
 */
const NavbarLeft = () => {
    return (
        <div className='navbar-left'>
            <NavigationLeft />
            <Copyright />
        </div>
    );
};

export default NavbarLeft;