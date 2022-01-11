import React from "react";
import  "./nav.css"
import Logo from '../../assets/img/planet-3.png';
import Wallet from '../../assets/img/wallet.png';

const nav = () => {
    return (
        <div className="nav-container">
            <a className="logo" href="#"><img src={Logo} alt="The Void logo" className="void-logo"></img></a>
            <nav className="navigation">
                <ul>
                    <li><a href="#void-pass">Void Pass</a></li>
                    <li><a href="#the-artist">The Artist</a></li>
                    <li><a href="#the-crew">The Crew</a></li>
                    <li><a href="#the-roadmap">The Roadmap</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
            <div className="wallet">
            <button className="boom">
                <div className="wallet-button">
                    <img src={Wallet} alt="Wallet icon" className="void-logo"></img>
                </div>
                <div className="wallet-button">
                    Coming Soon
                </div>
            </button>
            </div>
            
        </div>
    )
}

export default nav
