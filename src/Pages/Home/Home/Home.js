import React from 'react';
import ProfileSide from '../../../components/ProfileSide/ProfileSide';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide></ProfileSide>
            <div className="postSide">Posts</div>
            <div className="rightSide">Right Side</div>
        </div>
    );
};

export default Home;