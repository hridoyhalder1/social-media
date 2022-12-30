import React, { useState } from 'react';
import './RightSide.css';
import { FcSettings } from "react-icons/fc";
import Home from '../../assets/img/home.png';
import Noti from '../../assets/img/noti.png';
import Comment from '../../assets/img/comment.png';
import TrendCard from './TrendCard/TrendCard';
import SharedModal from '../SharedModal/SharedModal';

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <FcSettings className='Settings' />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />

            <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>
            <SharedModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>

        </div>
    );
};

export default RightSide;