import React from 'react';
import PropTypes from 'prop-types'

/**
 * Show "Bonjour" and the name of the user
 * @param {object} data main data
 * @returns "Bonjour" + name
 */

const Name = (data) => {
    const name = data.data.data ? data.data.data.userInfos.firstName : "";
    // @ts-ignore
    return (
        <div className='name'>
            <h1>Bonjour <span>{name}</span></h1>
        </div>
    );
};

Name.propTypes = {
	data: PropTypes.object.isRequired
}

export default Name;