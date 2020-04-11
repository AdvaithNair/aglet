import React from 'react';
import './Header.css';
import AgletLogo from './AgletLogoOutline.png';

function Header() {
    return(
        <div className = "header-bar">
            <img src = {AgletLogo} alt = "Aglet Logo" className = "header-image"></img>
            <h2>Your Sneaker Wishlist</h2>
        </div>
    );
}

export default (Header);