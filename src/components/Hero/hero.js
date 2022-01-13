import React from "react";
// import React, { useEffect, useRef, useState } from "react";
import  "./hero.css"
// import Mint from '../../assets/img/planet-sphere-2.png';
// import CountDown from '../../assets/img/countdown.png';



const Hero = () => {

    // const [timerDays, setTimerDays] = useState('00');
    // const [timerHours, setTimerHours] = useState('00');
    // const [timerMinutes, setTimerMinutes] = useState('00');
    // const [timerSeconds, setTimerSeconds] = useState('00');

    // let interval = useRef();

    // const startTimer = () => {
    //     const countdownDate = new Date('February 08 2022 00:00:00').getTime();

    //     interval = setInterval(() => {
    //         const now = new Date().getTime();
    //         const distance = countdownDate - now;

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         if (distance < 0) {
    //             //stop our time
    //             clearInterval(interval.current);
    //         } else {
    //             //update our times
    //             setTimerDays(days);
    //             setTimerHours(hours);
    //             setTimerMinutes(minutes);
    //             setTimerSeconds(seconds);
    //         }

    //     }, 1000)
    // };

    // componentDidMount
    // useEffect(() => {
    //     startTimer();
    //     return () => {
    //         clearInterval(interval.current);
    //     }
    // });

    return (
        <div className="hero" id="void">

            <div className="space-box">

                <video className="video-test" autoplay="" muted loop="1" playsinline="">
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641749454/bg.2bc8c652_egdvao.mp4" type="video/mp4"></source>
            <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641749454/bg.2bc8c652_egdvao.mp4" type="video/ogg"></source>
            Your browser does not support the video tag.
            </video>


            <div className="text-box">
                <h1>THE VOID</h1>
            </div>

            <div className="nft-box">
                <div className="video-box">
                    <video className="video-nft" autoplay="autoplay" muted loop>
                    <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641776251/Image_from_iOS_gumrfp.mp4" type="video/mp4"></source>
                    <source src="https://res.cloudinary.com/mselbekk-com/video/upload/v1641776251/Image_from_iOS_gumrfp.mp4" type="video/ogg"></source>
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>


            {/* <div className="minting">
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
            </div> */}



            </div>

            
        </div>
    )
}

export default Hero
{/* <div className="mint">
<h2>Departure in</h2>
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
</div> */}


