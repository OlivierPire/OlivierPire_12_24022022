import React from 'react';
import { FaAppleAlt, FaFire, FaHamburger } from 'react-icons/fa'
import { GiChickenLeg } from 'react-icons/gi'

const KeyData = () => {
    return (
        <div className='key-data'>
            <div className='calories'>
                <FaFire /> 
                <div className="infos">
                    <span></span>
                    <p>Calories</p>
                </div>   
            </div>
            <div className='proteines'>
                <GiChickenLeg />
                <div className="infos">
                    <span></span>
                    <p>Proteines</p>
                </div>
            </div>
            <div className='glucides'>
                <FaAppleAlt />
                <div className="infos">
                    <span></span>
                    <p>Glucides</p>
                </div>
            </div>
            <div className='lipides'>
                <FaHamburger />
                <div className="infos">
                    <span></span>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
};

export default KeyData;
