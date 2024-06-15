import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    text: "I highly recommend MTC for their exceptional services. They went above and beyond to ensure our satisfaction.",
    author: "Johnny",
    position: "CEO, Company FYYZ",
  },
  {
    text: "The team at MTC was amazing to work with. They were attentive, responsive, and delivered high-quality work on time.",
    author: "Sonny",
    position: "Marketing Manager, ABC Corp",
  },
  {
    text: "I highly recommend MTC for their exceptional services. They went above and beyond to ensure our satisfaction.",
    author: "Ronny",
    position: "CTO, Tech Solutions",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust settings for smaller screens if needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="backgroundHeader">
      <div
        className="heading"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "black", // Set background color to black
          fontSize: "64px",
          fontWeight: "bold",
          background:
            "linear-gradient(to right, #0092ff, #bb00ff, #ff4d00, #ffbb00)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
      >
        What Our Clients Say
      </div>
      <div className="testimonials-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-box">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.author}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
