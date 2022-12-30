import React from 'react';
import PostSide from '../../../components/PostSide/PostSide/PostSide';
import ProfileSide from '../../../components/ProfileSide/ProfileSide';
import RightSide from '../../../components/RightSide/RightSide';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <RightSide></RightSide>
        </div>
    );
};

export default Home;