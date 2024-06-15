import React from "react";
import Slider from "react-slick";
import "./Towbarless.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Towbarless = () => {
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
    <div className="product-page">
      <header className="product-header">
        <h1 className="product-header-title">
          Towbarless Aircraft Tractor (Capacity 300T)
        </h1>
      </header>

      <section className="product-details">
        <div className="product-images">
          <div className="image-row">
            <div>
              <img
                src="\image\towbar1.jpeg"
                alt="Towbarless"
                className="product-image"
              />
            </div>
            <div>
              <img
                src="\image\towbar2.jpeg"
                alt="Towbarless"
                className="product-image"
              />
            </div>
          </div>
          <div className="image-row">
            <div>
              <img
                src="\image\towbar3.jpeg"
                alt="Towbarless"
                className="product-image"
              />
            </div>
            <div>
              <img
                src="\image\towbar4.jpeg"
                alt="Towbarless"
                className="product-image"
              />
            </div>
          </div>
        </div>

        <div className="product-description">
          <p>
            The Towbarless Aircraft Tractor (Capacity 300T) is a
            state-of-the-art solution for handling the heaviest aircraft with
            unmatched efficiency and safety. Designed for modern aviation needs,
            this towbarless tractor eliminates the need for traditional towbars,
            providing a more versatile and streamlined approach to aircraft
            ground handling.
          </p>
          <div className="specs-and-features">
            <div className="specifications">
              <h2>Specifications</h2>
              <ul>
                <li>Model: TBL-300</li>
                <li>Type: Diesel or electric options available</li>
                <li>Power Output: 250-300 horsepower (HP)</li>
                <li>Fuel Capacity: 250 liters (66 gallons)</li>
                <li>Maximum Towing Capacity: 300 tons (600,000 lbs)</li>
                <li>Maximum Speed: 30 km/h (18.6 mph)</li>
                <li>
                  Braking System: Hydraulic brakes with ABS for reliable
                  stopping power
                </li>
              </ul>
            </div>
            <div className="features">
              <h2>Features</h2>
              <ul>
                <li>Powerful Engine Options</li>
                <li>Towbarless Design</li>
                <li>Robust Construction</li>
                <li>Advanced Control Systems</li>
                <li>Enhanced Safety Features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Towbarless;
