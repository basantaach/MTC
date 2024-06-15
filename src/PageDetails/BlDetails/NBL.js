import React from "react";
import Slider from "react-slick";
import "./NBL.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NBL = () => {
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
    <div className="nbl-page">
      <header className="nbl-header">
        <h1 className="nbl-header-title">NBL</h1>
      </header>

      <section className="nbl-details">
        <div className="nbl-images">
          <div className="image-row">
            <div>
              <img src="\image\Belt1.jpeg" alt="NBL" className="nbl-image" />
            </div>
            <div>
              <img src="\image\Belt2.jpeg" alt="NBL" className="nbl-image" />
            </div>
          </div>
          <div className="image-row">
            <div>
              <img src="\image\Belt3.jpeg" alt="NBL" className="nbl-image" />
            </div>
            <div>
              <img src="\image\Belt4.jpeg" alt="NBL" className="nbl-image" />
            </div>
          </div>
        </div>
        <div className="nbl-description">
          <p>
            The NBL belt loader is a very modular piece of equipment which can
            be provided with many types of engines and with different
            transmissions (powershift or hydrostatic). Designed for reliability
            and low maintenance costs, the NBL uses the latest technology and
            features very simple electric and hydraulic circuits. Location and
            accessibility of all components have been designed to reduce
            maintenance time to a minimum. The new boom design allows the NBL
            boom to reach the lowest level aircraft doorsill heights in the
            market; in addition different boom widths and lengths are available
            to allow various applications. The NBL has been ergonomically
            designed to provide maximum driving comfort, simple controls and
            excellent visibility.
          </p>
          <div className="nbl-specs-and-features">
            <div className="nbl-specifications">
              <h2>Specifications</h2>
              <ul>
                <li>Model: NBL</li>
                <li>Type: Diesel or electric options available</li>
                <li>Length: 4.5 meters (14.8 feet)</li>
                <li>Turning Radius: 5 meters (16.4 feet)</li>
                <li>
                  Braking System: Hydraulic brakes with automatic engagement
                  when stationary
                </li>
                <li>Maximum Load Capacity: 300 kg (660 lbs) per meter</li>
                <li>Fuel Capacity (Diesel): 60 liters (15.8 gallons)</li>
              </ul>
            </div>
            <div className="nbl-features">
              <h2>Features</h2>
              <ul>
                <li>Versatile Conveyor System</li>
                <li>Robust Construction</li>
                <li>Efficient Performance</li>
                <li>Ergonomic Operator Cabin</li>
                <li>Enhanced Visibility and Lighting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NBL;
