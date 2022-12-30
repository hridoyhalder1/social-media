import React from 'react';
import { FaPen } from 'react-icons/fa';
import './InfoCard.css';

const InfoCard = () => {
    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4>Your Info</h4>
                <FaPen></FaPen>
            </div>
            <div className="info">
                <span><b>Status </b></span>
                <span>In a Relationship</span>
            </div>

            <div className="info">
                <span><b>Lives </b></span>
                <span>United States</span>
            </div>

            <div className="info">
                <span><b>Works at </b></span>
                <span>Programming Hero</span>
            </div>
            <button className='button logout-button'>LogOut</button>
        </div>
    );
};

export default InfoCard;