import React from 'react';
import PostSide from '../../../components/PostSide/PostSide/PostSide';
import ProfileSide from '../../../components/ProfileSide/ProfileSide';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <div className="rightSide">Right Side</div>
        </div>
    );
};

export default Home;