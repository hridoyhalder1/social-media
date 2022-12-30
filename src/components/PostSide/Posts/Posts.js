import React from 'react';
import { PostsData } from '../../../Data/PostsData';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    return (
        <div className="Posts">
            {
                PostsData.map((post, id)=> {
                    return <Post
                     key={post.id}
                     data={post}
                    //  id={id}
                     ></Post>
                })
            }
        </div>
    );
};

export default Posts;