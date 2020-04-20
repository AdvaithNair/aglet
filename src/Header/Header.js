import React from 'react';
import './Header.css';
import AgletLogo from './../Images/AgletLogoOutline.png';

//HTML for Header Segment
function Header() {
    return(
        <div className = "header-bar">
            <img src = {AgletLogo} alt = "Aglet Logo" className = "header-image"></img>
            <h2 className = "header-title">Your Sneaker Collection</h2>
            <div className = "under-bar"></div>
        </div>
    );
}

export default (Header);