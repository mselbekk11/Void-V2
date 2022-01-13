import React from "react";
import  "./roadmap.css"
import RoadmapImage from '../../assets/img/roadmap-2.png';


const Roadmap = () => {
    return (
        <div className="roadmap" id="the-roadmap">
            <div className="title">
                <h2>Roadmap</h2>
            </div>

            <div className="section">
            <img src={RoadmapImage} alt="The Void logo" className="roadmap-image"></img>
            </div>
        </div>
    )
}

export default Roadmap
