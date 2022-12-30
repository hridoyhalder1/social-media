import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import ProfileModal from '../ProfileModal/ProfileModal';
import './InfoCard.css';

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className='InfoCard'>
            <div className="infoHead">
                <h4>Your Info</h4>
                <FaPen onClick={() => setModalOpened(true)}/>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
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