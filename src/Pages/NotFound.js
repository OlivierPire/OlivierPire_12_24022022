import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Oups !</h1>
            <h2>La page que vous demandez n'existe pas</h2>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    );
};

export default NotFound;