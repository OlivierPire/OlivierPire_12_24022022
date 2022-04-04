import React from 'react';
import PropTypes from 'prop-types'
import Message from './Message';
import Name from './Name';

/**
 * Show user name with the encouragement message 
 * @param {object} data main data
 * @returns {React.ReactElement} name and message
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
    data: PropTypes.object.isRequired
}

export default Header;