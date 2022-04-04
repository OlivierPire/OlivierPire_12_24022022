import React from 'react';
import { FaAppleAlt, FaFire, FaHamburger } from 'react-icons/fa'
import { GiChickenLeg } from 'react-icons/gi'
import PropTypes from 'prop-types'

/**
 * This component returns the principals data of the user
 * @param {object} data main data
 * @returns { React.ReactElement | String} nutrient information of the user
 */

const KeyData = (data) => {
    const keyData = data.data.data ? data.data.data.keyData : ""
    
    return (
        <div className='key-data'>
            <div className='calories box'>
                <FaFire style={{backgroundColor: '#FF000020'}} color='#FF0000'/> 
                <div className="infos">
                    <span>{keyData.calorieCount}kCal</span>
                    <p>Calories</p>
                </div>   
            </div>
            <div className='proteines box'>
                <GiChickenLeg style={{backgroundColor: '#4AB8FF20'}} color='#4AB8FF'/>
                <div className="infos">
                    <span>{keyData.proteinCount}g</span>
                    <p>Proteines</p>
                </div>
            </div>
            <div className='glucides box'>
                <FaAppleAlt style={{backgroundColor: '#FDCC0C20'}} color='#FDCC0C' />
                <div className="infos">
                    <span>{keyData.carbohydrateCount}g</span>
                    <p>Glucides</p>
                </div>
            </div>
            <div className='lipides box' >
                <FaHamburger style={{backgroundColor: '#FD518120'}} color='#FD5181' />
                <div className="infos">
                    <span>{keyData.lipidCount}g</span>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
};

KeyData.propTypes = {
	data: PropTypes.object.isRequired
}
export default KeyData;
