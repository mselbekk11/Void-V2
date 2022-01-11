import React from "react";
import  "./artist.css"
import Gallery from '../../assets/img/gallery.png';
import IconOne from '../../assets/img/001.png';
import IconTwo from '../../assets/img/002.png';
import IconThree from '../../assets/img/003.png';
import IconFour from '../../assets/img/004.png';
import IconFive from '../../assets/img/005.png';



const Artist = () => {
    return (
        <div className="artist" id="the-artist">
            <div className="section">
                <div className="left">
                <img src={Gallery} alt="The Void logo" className="gallery"></img>
                </div>
                <div className="right">
                    <h2>MEET THE ARTIST: MATERIUM</h2>
                    <p>THE VOID IS PROUD TO ANNOUNCE THAT WE HAVE PARTNERED WITH RENOWNED ARTIST, MATERIUM, FOR THE CREATION OF OUR VOID PASS. MATERIUMS UNIQUE AND HIGH QUALITY ART WORK IS SOMETHING WE ARE EXCITED TO PROVIDE OUR COMMUNITY AND WE ARE EVEN MORE EXCITED TO HAVE HIM AS ONE OF OUR TRUSTED ADVISORS ON THE VOID GOVERNANCE COUNCIL.</p>
                    <div className="icons">

                    <a href="https://www.instagram.com/marterium/" target="blank"><img src={IconOne} alt="The Void logo" className="social"></img></a>

                     <a href="https://twitter.com/Marterium_" target="blank"><img src={IconTwo} alt="The Void logo" className="social"></img></a>

                     <a href="https://www.pinterest.de/marterium/" target="blank"><img src={IconThree} alt="The Void logo" className="social"></img></a>

                     <a href="https://www.behance.net/marterium" target="blank"><img src={IconFour} alt="The Void logo" className="social"></img></a>

                     <a href="https://marterium.com/nft" target="blank"><img src={IconFive} alt="The Void logo" className="social"></img></a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Artist
