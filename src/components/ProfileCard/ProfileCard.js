import React from 'react';
import'./ProfileCard.css';
import  cover from '../../assets/img/cover.jpg';
import profileImages from '../../assets/img/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className='profileCard'>
            <div className="profileImages">
                <img src={cover} alt="cover" className='cover' />
                <img src={profileImages} alt="profileImages" className='profile' />
            </div>

            <div className="profileName">
                <span>Ryan Rouf.</span>
                <span>Front-End Developer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div className="follow">
                    <span>6890</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Follower</span>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ProfileCard;