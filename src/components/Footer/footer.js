import React from "react";
import  "./footer.css"
import instagram from '../../assets/img/instagram.png';
import telegram from '../../assets/img/Telegram-logo.png';
import twitter from '../../assets/img/twitter.png';


const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="title">
                <h2>Join The Community</h2>
            </div>
            <div id="links">

            <a href="https://www.instagram.com/enterthevoidNFT" target="_blank"><button class="border-gradient social"><img className='' src={instagram} alt="discord"></img></button></a>

            <a href="https://twitter.com/enterthevoidnft" target="_blank"><button class="border-gradient social"><img className='' src={twitter} alt="twitter"></img></button></a>

            <a href="https://t.me/EnterTheVoidNFT" target="_blank"><button class="border-gradient social"><img className='' src={telegram} alt="telegram"></img></button></a>
          </div>
        </div>
    )
}

export default Footer
