import React, { useRef, useState } from 'react';
import './PostShare.css';
import profileImg from '../../../assets/img/profileImg.jpg';
import { FaImage } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const PostShare = () => {

    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = event => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
        }
        
    }

    return (
        <div className="PostShare">
            <img src={profileImg} alt="" />
            <div>
                <input type="text" name="" id="" placeholder='Whats on your mind ? ' />
                <div className="postOptions">
                    <div className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={()=>imageRef.current.click()}
                    >
                        <FaImage></FaImage>
                        Photo
                    </div>
                    <div className="option"
                        style={{ color: "var(--video)" }}
                    >
                        <FaPlayCircle></FaPlayCircle>
                        Video
                    </div>
                    <div className="option"
                        style={{ color: "var(--location)" }}
                    >
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        Location
                    </div>
                    <div className="option"
                        style={{ color: "var(--shedule)" }}>
                        <FaCalendarAlt></FaCalendarAlt>
                        Schedule
                    </div>
                    <button className='button ps-button'>
                        Share
                    </button>
                    <div style={{display: "none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className='previewImage'>
                        <HiX onClick={()=>setImage(null)}></HiX>
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>

        </div>

    );
};

export default PostShare;