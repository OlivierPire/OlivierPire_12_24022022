import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationTop = () => {

    /**
     * Navigation
     */

    return (
        <div className='navigation-top'>
            <ul>
                <NavLink to="/"><li>Accueil</li></NavLink>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    );
};

export default NavigationTop;