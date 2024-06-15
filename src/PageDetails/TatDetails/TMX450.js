import React from "react";
import Slider from "react-slick";
import "./TMX450.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TMX450 = () => {
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
        <h1>TMX-450</h1>
      </header>
      <section className="product-details">
        <div className="product-content">
          {/* <div className="image-slider"> */}
          {/* <Slider {...settings}> */}
          <div className="image-row">
            <div>
              <img
                src="\image\tmx1.jpeg"
                alt="TMX-450"
                className="product-image"
              />
            </div>
            <div>
              <img
                src="/image/tmx2.jpeg"
                alt="TMX-450"
                className="product-image"
              />
            </div>
          </div>
          <div className="image-row">
            <div>
              <img
                src="/image/tmx3.jpeg"
                alt="TMX-450"
                className="product-image"
              />
            </div>
            <div>
              <img
                src="/image/tmx4.jpeg"
                alt="TMX-450"
                className="product-image"
              />
            </div>
          </div>
          {/* </Slider> */}
        </div>
        <div className="product-description">
          <p>
            The TMX-450 Aircraft Towing Tractor, with a maximum driveline
            capability of 32,000daN (70,500lbs) is designed to perform push back
            and towing operations on medium and wide body aircraft (like the
            B767, A300, A310, A330, A340 up to the 500 and 600, B777, B747,
            A380.). Its ergonomic design provides maximum driver comfort and
            increased visibility. The TMX-450 Aircraft Towing Tractor is your
            ultimate solution for efficient and reliable aircraft ground
            handling. Engineered for exceptional performance, the TMX-450
            combines power, durability, and advanced technology to meet the
            demanding needs of modern aviation. TLD’s high standards of build
            and component quality make the TMX-450 a durable and reliable
            tractor.
          </p>

          <div className="specs-and-features">
            <div className="specifications">
              <h2>Specifications</h2>
              <ul>
                <li>Model: TMX-450</li>
                <li>Type: Diesel, turbocharged</li>
                <li>Length: 4.5 meters (14.8 feet)</li>
                <li>Width: 2.5 meters (8.2 feet)</li>
                <li>Height: 2.2 meters (7.2 feet)</li>
                <li>Maximum Speed: 25 km/h (15.5 mph)</li>
                <li>Fuel Capacity: 200 liters (52.8 gallons)</li>
              </ul>
            </div>
            <br />
            <div className="features">
              <h2>Features</h2>
              <ul>
                <li>Powerful Engine</li>
                <li>Heavy-Duty Construction</li>
                <li>Advanced Towing Capabilities</li>
                <li>Ergonomic Design</li>
                <li>Efficient Maneuverability</li>
              </ul>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default TMX450;
