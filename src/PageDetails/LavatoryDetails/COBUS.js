import React from "react";

const COBUS = () => {
  return (
    <div className="nbl-page">
      <header className="nbl-header">
        <h1 className="nbl-header-title">COBUS Aircraft Ramp Bus</h1>
      </header>

      <section className="nbl-details">
        <div className="nbl-images">
          <div className="nbl-image-row">
            <div className="nbl-image-container">
              <img src="\image\COBUS1.jpeg" alt="COBUS" className="nbl-image" />
            </div>
            <div className="nbl-image-container">
              <img src="\image\COBUS2.jpeg" alt="COBUS" className="nbl-image" />
            </div>
            <div className="nbl-image-container">
              <img src="\image\COBUS3.jpeg" alt="COBUS" className="nbl-image" />
            </div>
            <div className="nbl-image-container">
              <img src="\image\COBUS4.jpeg" alt="COBUS" className="nbl-image" />
            </div>
          </div>
        </div>
        <div className="nbl-description">
          <div className="nbl-content">
            <p>
              The COBUS Aircraft Ramp Bus is a state-of-the-art transportation
              solution designed to facilitate the efficient and comfortable
              movement of passengers between the terminal and aircraft. Renowned
              for its reliability, spacious design, and advanced features, the
              COBUS Aircraft Ramp Bus enhances the passenger experience while
              streamlining airport ground operations.
            </p>
            <br />
            <div className="nbl-specs-and-features">
              <div className="nbl-specifications">
                <h2>Specifications</h2>
                <ul>
                  <li>
                    Passenger Capacity: Up to 112 passengers (including standing
                    passengers)
                  </li>
                  <li>Ground Clearance: 0.35 meters (1.1 feet)</li>
                  <li>
                    Gross Vehicle Weight (GVW): Up to 20,000 kg (44,092 lbs)
                  </li>
                  <li>Diesel Engine Type: Euro VI compliant</li>
                  <li>Maximum Speed: 50 km/h (31 mph)</li>
                  <li>
                    Suspension System: Advanced suspension for a smooth ride
                  </li>
                </ul>
              </div>
              <div className="nbl-features">
                <h2>Features</h2>
                <ul>
                  <li>Spacious Interior</li>
                  <li>Advanced Safety Features</li>
                  <li>Robust Construction</li>
                  <li>Efficient Performance</li>
                  <li>Passenger Comfort</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default COBUS;
