import React from "react";
import "./Dubai2023.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dubai2023 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="product-page" style={{ background: "rgb(245,245,247" }}>
      <header className="product-header">
        <h1 className="productHeader">Dubai Airshow Expo/Exhibition 2023</h1>
      </header>

      <section className="product-details">
        <div className="product-content">
          <div className="image-slider">
            {/* <Slider {...settings}> */}
            <div className="image-row">
              <div>
                <img
                  src="/image/Dubai1.jpeg"
                  alt="Dubai1"
                  className="product-image"
                />
              </div>
              <div>
                <img
                  src="/image/Dubai2.jpeg"
                  alt="Dubai2"
                  className="product-image"
                />
              </div>
              <div>
                <img
                  src="/image/Dubai4.jpeg"
                  alt="Dubai4"
                  className="product-image"
                />
              </div>
            </div>
            <div className="image-row">
              <div>
                <img
                  src="/image/Dubai3.jpeg"
                  alt="Dubai3"
                  className="product-image"
                />
              </div>
              <div>
                <img
                  src="/image/Dubai5.jpeg"
                  alt="Dubai5"
                  className="product-image"
                />
              </div>
              <div>
                <img
                  src="/image/Dubai6.jpeg"
                  alt="Dubai6"
                  className="product-image"
                />
              </div>
            </div>
            {/* </Slider> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dubai2023;
