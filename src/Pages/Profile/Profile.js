import React from 'react';
import Post from '../../components/PostSide/Post/Post';
import PostSide from '../../components/PostSide/PostSide/PostSide';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import './Profile.css';

const Profile = () => {
    return (
        <div className='Profile'>
            <ProfileLeft></ProfileLeft>
            <div className="Profile-center">
                <ProfileCard></ProfileCard>
                <PostSide></PostSide>
            </div>
        </div>
    );
};

export default Profile;