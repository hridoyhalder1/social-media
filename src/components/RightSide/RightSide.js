import React from 'react';
import './RightSide.css';
import { FcSettings } from "react-icons/fc";
import Home from '../../assets/img/home.png';
import Noti from '../../assets/img/noti.png';
import Comment from '../../assets/img/comment.png';
import TrendCard from './TrendCard/TrendCard';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <FcSettings className='Settings' />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />

            {/* <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}

        </div>
    );
};

export default RightSide;