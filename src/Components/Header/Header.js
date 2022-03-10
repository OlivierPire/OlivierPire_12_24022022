import React from 'react';
import Message from './Message';
import Name from './Name';

const Header = (data) => {
    return (
        <div className='header'>
            <Name data={data.data}/>
            <Message />
        </div>
    );
};

export default Header;