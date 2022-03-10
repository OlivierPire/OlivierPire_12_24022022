import React from 'react';
import NavigationTop from "./NavigationTop"
import Logo from "./Logo"

const NavbarTop = () => {
    return (
        <div className='navbar-top'>
            <Logo />
            <NavigationTop />
        </div>
    );
};

export default NavbarTop;