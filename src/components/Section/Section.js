import React from "react";
import Slider from "react-slick";
import { Heading } from "@chakra-ui/react";
import "./Section.css";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "TOWBARLESS AIRCRAFT TRACTORS",
    imgSrc: "/image/towbar3.jpeg",
    description:
      "Towbarless aircraft tractors are ground support vehicles designed to tow aircraft without using a towbar, enhancing efficiency and flexibility during ground operations.",
    link: "/product/TAT",
  },
  {
    title: "BELT LOADERS",
    imgSrc: "/image/Belt1.jpeg",
    description:
      "Belt loaders are ground support equipment used to load and unload luggage and cargo onto aircraft, ensuring efficient and safe handling during airport operations.",
    link: "/product/Bl",
  },
  {
    title: "PAX STEPS",
    imgSrc: "/image/pax3.jpeg",
    description:
      "PAX steps, short for passenger steps, are mobile stairways used to provide safe boarding and disembarking for passengers from aircraft at airports.",
    link: "/product/Ps",
  },
  {
    title: "LAVATORY AND WATER TRUCKS",
    imgSrc: "image/potablewatertruck4.jpeg",
    description:
      "Lavatory and water trucks are vital for aircraft service, providing potable water and maintaining lavatories for passenger comfort and hygiene during flights.",
    link: "/product/lavatory",
  },
];

const Section = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two products at once
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
    <div className="bgHeading">
      <div className="heading">
        <Heading as="h1" size="20px">
          Our Products
        </Heading>
      </div>
      <div className="products-slider">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="product-item-box">
                <h2>{product.title}</h2>
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="product-image"
                />
                <p>{product.description}</p>
                <br />
                <button
                  className="product-button"
                  onClick={() => navigate(product.link)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section;
