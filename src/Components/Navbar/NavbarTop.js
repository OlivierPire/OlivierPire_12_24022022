import React, { ReactElement } from 'react';
import NavigationTop from "./NavigationTop"
import Logo from "./Logo"

/**
 * Return NavigationTop and Copyright
 * @returns { ReactElement } NavigationTop and Copyright
 */
const NavbarTop = () => {
    return (
        <div className='navbar-top'>
            <Logo />
            <NavigationTop />
        </div>
    );
};

export default NavbarTop;