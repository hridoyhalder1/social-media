import React from 'react';
import './ProfileCard.css';
import cover from '../../assets/img/coverPhoto.webp';
import profileImages from '../../assets/img/profileImg.jpg'

const ProfileCard = () => {

    const ProfilePage = true;

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
                <div>
                    <div className="follow">
                        <span>5520</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Follower</span>
                    </div>

                    {ProfilePage && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}


                </div>
                <hr />
            </div>
            {ProfilePage ? '' : <span>My Profile</span>}

        </div>
    );
};

export default ProfileCard;