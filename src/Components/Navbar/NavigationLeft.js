import React from 'react';
import { BiSwim } from 'react-icons/bi'
import { IoMdFitness, IoMdBicycle } from 'react-icons/io'

const NavigationLeft = () => {
    return (
        <div className='navigation-left'>
            <ul>
                <li><img src="../../../img/Group.png" alt="" /></li>
                <li><BiSwim /></li>
                <li><IoMdBicycle /></li>
                <li><IoMdFitness /></li>
            </ul>
        </div>
    );
};

export default NavigationLeft;