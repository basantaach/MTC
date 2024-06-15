// src/pages/Home.js

import React from "react";
import "./Home.css";
import Slider from "../../components/sliders/Slider";
import images from "../../components/sliders/images";
import Section from "../../components/Section/Section";
import Testimonials from "../../components/Testimonial/Testimonials";
import Achievement from "../Achievements/Achievement";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img className="w-100" src={image.imgURL} alt={image.imgAlt} />
            <div className="text-header">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h1 className="text1-header">
                  Mater Trading at Global Airshows -
                </h1>
                <p>Powering Progress, One Innovation at a Time!</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Section />
      <Achievement />
      <Testimonials />
    </div>
  );
}

export default Home;
