import React from 'react';

const Name = (data) => {
    const name = data.data ? data.data.data.userInfos.firstName : "";
    return (
        <div className='name'>
            <h1>Bonjour <span>{name}</span></h1>
        </div>
    );
};

export default Name;