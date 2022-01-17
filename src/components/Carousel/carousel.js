import React from "react";
import  "./carousel.css"

import { useState } from "react";
import Slider from "react-slick";
import galleryOne from '../../assets/img/marterium-1.png'
import galleryTwo from '../../assets/img/marterium-2.png'
import galleryThree from '../../assets/img/marterium-3.png'
import galleryFour from '../../assets/img/marterium-4.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [galleryOne, galleryTwo, galleryThree, galleryFour]


const Carousel = () => {

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };

    return (
        <div className="carousel" id="carousel">
            <div className="section">
            <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
            </div>
               
        </div>
    )
}

export default Carousel
