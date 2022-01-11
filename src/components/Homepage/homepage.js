import React from "react";
import  "./homepage.css"
import Hero from '../../components/Hero/hero';
import VoidPass from '../../components/Void-pass/void-pass';
import Artist from '../../components/Artist/artist';
import Crew from '../../components/Crew/crew';
import Roadmap from '../../components/Roadmap/roadmap';
import Faqs from '../../components/Faqs/faqs';
import Footer from '../../components/Footer/footer';


const Homepage = () => {
    return (
        <div className="homepage">
            <Hero />
            <VoidPass />
            <Artist />
            <Crew />
            <Roadmap />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Homepage
