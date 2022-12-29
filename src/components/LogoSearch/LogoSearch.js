import React from 'react';
import logo from '../../assets/img/logo.png';
import './LogoSearch.css';
import { FaSearch } from "react-icons/fa";


const LogoSearch = () => {
    return (
        <div>
            <div className="LogoSearch">
                <img src={logo} alt="logo" />
                <div className="search">
                    <input type="text" placeholder='Search here...'/>
                    <div className="s-icon">
                        <FaSearch/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;