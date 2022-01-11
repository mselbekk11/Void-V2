import React from "react";
import  "./void-pass.css"
// import Nft from '../../assets/img/voidpass.png';
import Table from '../../assets/img/table.png';



const VoidPass = () => {
    return (
        <div className="void-pass" id="void-pass">
            <div className="section">
                <div className="left">
                <video className="video-nft-two" autoplay="autoplay" muted loop controls>
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641776251/Image_from_iOS_gumrfp.mp4" type="video/mp4"></source>
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641776251/Image_from_iOS_gumrfp.mp4" type="video/ogg"></source>
            Your browser does not support the video tag.
            </video>
                </div>
                <div className="right">
                <h2>WHAT IS A VOID PASS?</h2>
                <p>THE VOID PASS IS YOUR KEY TO UNOCKING SPECIAL FEATURES, REWARDS, GOVERNANCE, PRIVATE ACCESS, AND PERKS FROM THE VOID MARKETPLACE AND ITS PARTNERS</p>
                <h2>PERKS AND BENEFITS</h2>
                {/* <p>THE VOID PASS IS YOUR KEY TO UNOCKING SPECIAL FEATURES, REWARDS, GOVERNANCE, PRIVATE ACCESS, AND PERKS FROM THE VOID MARKETPLACE AND ITS PARTNERSTHE VOID PASS IS YOUR KEY TO UNOCKING SPECIAL FEATURES, REWARDS, GOVERNANCE, PRIVATE ACCESS, AND PERKS FROM THE VOID MARKETPLACE AND ITS PARTNERSTHE VOID PASS IS YOUR KEY TO UNOCKING SPECIAL FEATURES, REWARDS, GOVERNANCE, PRIVATE ACCESS, AND PERKS FROM THE VOID MARKETPLACE AND ITS PARTNERS</p> */}
                <img src={Table} alt="The Void logo" className="table"></img>
                <h2>OTHER PERKS</h2>
                <ul>
                    <li>FREE AIRDROPS</li>
                    <li>WHITELITING FOR EXCLUSIVE PROJECTS</li>
                    <li>PRIVAT COMMUNITY ACCESS</li>
                    <li>GOVERNANCE</li>
                    <li>SPECIAL PERKS FROM ECOSYTEM PARTNERS</li>
                    <li>MERCHANDISE!</li>
                    <li>EVENT VIP ACCESS</li>
                    <li>UNLOCK SPECIAL CONTENT</li>
                </ul>
                </div>
            </div>
            
        </div>
    )
}

export default VoidPass
