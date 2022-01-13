// import React from "react";
import React, { useEffect, useRef, useState } from "react";
import  "./void-pass.css"
// import Nft from '../../assets/img/voidpass.png';
import Table from '../../assets/img/table.png';



const VoidPass = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('February 08 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our time
                clearInterval(interval.current);
            } else {
                //update our times
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className="void-pass" id="void-pass">
            <div className="section">
                <div className="left">

                <video className="video-nft-two" autoplay="autoplay" muted loop controls>
                <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641776251/Image_from_iOS_gumrfp.mp4" type="video/mp4"></source>
                <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641776251/Image_from_iOS_gumrfp.mp4" type="video/ogg"></source>
                Your browser does not support the video tag.
                </video>

                <div className="minting">
                    <h3 className="departure">Departure in</h3>
                        <div className="timer">
                        <div className="days space">
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                        </div>
                        <div className="hours space">
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                        </div>
                        <div className="mins space">
                        <p>{timerMinutes}</p>
                        <p><small>Mins</small></p>
                        </div>
                        <div className="secs space">
                        <p>{timerSeconds}</p>
                        <p><small>Secs</small></p>
                        </div>
                        </div>
                </div>

                </div>
                <div className="right">
                <h2>WHAT IS A VOID PASS?</h2>
                <p>THE VOID PASS IS YOUR KEY TO UNLOCKING SPECIAL FEATURES, REWARDS, GOVERNANCE, PRIVATE ACCESS, AND PERKS FROM THE VOID MARKETPLACE AND ITS PARTNERS</p>
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
