import React, { ReactElement } from 'react';
import PropTypes from 'prop-types'
import Message from './Message';
import Name from './Name';

/**
 * Show name of the user with the encouragement message 
 * @param {any} data main data
 * @returns {ReactElement} name and message
 */

const Header = (data) => {
    return (
        <div className='header'>
            <Name data={data.data}/>
            <Message />
        </div>
    );
};

Header.propTypes = {
    data: PropTypes.any.isRequired
}

export default Header;