import React from 'react';
import './Post.css';
import Comment from '../../../assets/img/comment.png';
import Heart from '../../../assets/img/like.png';
import Share from '../../../assets/img/share.png';
import NotLike from '../../../assets/img/notlike.png';

const Post = ({ data }) => {
    const { img, name, desc, likes, liked } = data;
    return (
        <div className="Post">
            <img src={img} alt="" />

            <div className="postReact">
                <img src={liked ? Heart : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{likes} likes</span>

            <div className="detail">
                <span><b>{name}</b></span>
                <span> {desc}</span>
            </div>
        </div>
    );
};

export default Post;